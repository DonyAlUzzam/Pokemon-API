"use strict";

const Pokemon = use("App/Models/Pokemon");
const DataGrid = use("DataGrid");
const {validate} = use('Validator');

class PokemonController {
  async index({ request, params, response }) {
    try {
      let url = request.originalUrl();
      let { type_in } = request._qs;
      let type;
      let filter;

      if (type_in) {
        type = JSON.parse(type_in);
        // return response.send(type);
        filter = Pokemon.query()
          .with("type")
          .whereHas("type", builder => {
            return builder.whereInPivot("type_id", type);
          })
          .with("category");
      } else {
        filter = Pokemon.query()
          .with("type")
          .with("category");
      }
      const config = {
        // base query
        query() {
          return filter;
        },

        sortable: {
          id: "id",
          name: "name",
          category_id: "category_id"
        },

        searchable: ["name", "category_id"],

        filterable: {
          category: "category_id"
        }
      };

      return DataGrid.paginate(config);
    } catch (error) {
      return {
        status: "Failed...",
        message: error.message
      };
    }
  }

  async update({ request, params, response }) {
    try {

      const rules = {
        name: 'required|string',
        image_url: 'required|string',
        type: 'required',
        category_id: 'required|number',
        latitude: 'required|string',
        longitude: 'required|string'
      }
   

      const data = request.only(['name', 'image_url', 'category_id', 'latitude', 'longitude'])
      const pokemon = await Pokemon.find(params.id)
      if (pokemon == null)
        return response.status(404).json({
          message: 'Pokemon not found'
        })
      pokemon.merge(data)
      await pokemon.save()
      if(request.input("type")){
      await pokemon.type().sync(request.input('type'));
     }
      pokemon.type = await pokemon.type().fetch()
      pokemon.category = await pokemon.category().fetch()

      return response.status(200).json({
        message: 'Pokemon updated',
        pokemon: pokemon
      })
    } catch (error) {
      return {
        status: "Failed...",
        message: error.message
      };
    }

  }

  async show({ params, response }) {
    try {
      const pokemon = await Pokemon.query()
        .with("category")
        .with("type")
        .where("pokemons.id", params.id)
        .first();

      console.log(pokemon);
      return response.send(pokemon);
    } catch (error) {
      return {
        status: "Failed...",
        message: err.message
      };
    }
  }

  async store({ request, response }) {
    try {
      const rules = {
        name: 'required|string',
        image_url: 'required|string',
        type_id: 'required',
        category_id: 'required|number',
        latitude: 'required',
        longitude: 'required'
      }
   
      const validation = await validate(request.all(), rules)
      if(validation.fails())
        return response.status(400).json({'message': validation.messages()})

        const data = request.only(['name', 'image_url', 'category_id', 'latitude', 'longitude'])
        console.log(data)
        const pokemon = await Pokemon.create(data)

        // await pokemon.save()
        await pokemon.type().attach(request.input('type_id'))
        pokemon.types = await pokemon.type().fetch()

        return response.status(200).json({pokemon})
    } catch (error) {
      return response.status(400).send({'message': 'Something wrong'})
    }
     
  }

  async destroy({ params, response }) {
    try {
      const pokemon = await Pokemon.find(params.id);
      await pokemon.delete();
      await pokemon.type().detach()
      return response
        .status(200)
        .json({ message: "Successfully deleted the pokemon",  id: params.id });
       
    } catch (err) {
      return {
        status: "Failed...",
        message: err.message
      };
    }
  }
}
module.exports = PokemonController;
