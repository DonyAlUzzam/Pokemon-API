"use strict";

const Pokemon = use("App/Models/Pokemon");

class PokemonController {
  // async index({ response }) {
  //     const pokemon = await Pokemon.query()
  //       .with("category")
  //       .with("type")
  //       .fetch();
  //     return response.json(pokemon);
  //   }

  async index({ request, response }) {
    let { name_like, category, type_in } = request._qs;

    if (name_like) {
      if (category) {
        if (type_in) {
          try {
            let pokemons = await Pokemon.query()
              .with("types")
              .with("categories")
              .where("name", "LIKE", "%" + name_like + "%")
              .where("category_id", category)
              .where("type_id", type_in)
              .orderBy("id", "desc")
              .limit(10)
              .fetch();
            return response.json(pokemons);
          } catch (err) {
            return {
              status: "Something went wrong",
              message: err.message
            };
          }
        } else {
          try {
            let pokemons = await Pokemon.query()
              .with("type")
              .with("category")
              .where("name", "LIKE", "%" + name_like + "%")
              .where("category_id", category)
              .orderBy("id", "desc")
              .limit(10)
              .fetch();
            return response.json(pokemons);
          } catch (err) {
            return {
              status: "Something went wrong",
              message: err.message
            };
          }
        }
      } else {
        try {
          let pokemons = await Pokemon.query()
            .with("type")
            .with("category")
            .where("name", "LIKE", "%" + name_like + "%")
            .orderBy("id", "desc")
            .limit(10)
            .fetch();
          return response.json(pokemons);
        } catch (err) {
          return {
            status: "Something went wrong",
            message: err.message
          };
        }
      }
    } else if (category) {
      if (type_in) {
        try {
          let pokemons = await Pokemon.query()
            .with("type")
            .with("category")
            .where("category_id", category)
            .where("type_id", type_in)
            .inTable("type_pokemons")
            .orderBy("id", "desc")
            .limit(10)
            .fetch();
          return response.json(pokemons);
        } catch (err) {
          return {
            status: "Something went wrong",
            message: err.message
          };
        }
      } else {
        try {
          let pokemons = await Pokemon.query()
            .with("type")
            .with("category")
            .where("category_id", category)
            .orderBy("id", "desc")
            .limit(10)
            .fetch();
          return response.json(pokemons);
        } catch (err) {
          return {
            status: "Something went wrong",
            message: err.message
          };
        }
      }
    } else if (type_in) {
      if (name_like) {
        try {
          let pokemons = await Pokemon.query()
            .with("type")
            .with("category")
            .where("name", "LIKE", "%" + name_like + "%")
            .where("type_id", type_in)
            .orderBy("id", "desc")
            .limit(10)
            .fetch();
          return response.json(pokemons);
        } catch (err) {
          return {
            status: "Something went wrong",
            message: err.message
          };
        }
      } else {
        try {
          let pokemons = await Pokemon.query()
            .with("type")
            .with("category")
            .where("type_id", type_in)
            .orderBy("id", "desc")
            .limit(10)
            .fetch();
          return response.json(pokemons);
        } catch (err) {
          return {
            status: "Something went wrong",
            message: err.message
          };
        }
      }
    } else {
      try {
        let pokemons = await Pokemon.query()
          .with("type")
          .with("category")
          .fetch();
        return response.json(pokemons);
      } catch (err) {
        return {
          status: "Something went wrong",
          message: err.message
        };
      }
    }
  }

  async show({ params, response }) {
    try {
      const pokemon = await Pokemon.query()
        .with("category")
        .with("type")
        .where("pokemons.id", params.id)
        .fetch();

      console.log(pokemon);
      return response.send(pokemon);
    } catch (error) {
      console.log(error);
    }
  }
  async store({ request, response }) {
    try {
      const {
        name,
        image_url,
        category_id,
        type_id,
        latitude,
        longitude
      } = request.post();

      const pokemon = await Pokemon.create({
        name,
        image_url,
        category_id,
        latitude,
        longitude
      });

      if (type_id && type_id.length > 0) {
        await pokemon.types().attach([type_id]);
        pokemon.types = await pokemon.types().fetch();
      }

      response.status(201).json({
        message: "Successfully created a new pokemon.",
        data: pokemon
      });
    } catch (error) {
      console.log(error);
    }
  }



  async destroy ({params, response}) {

    try {
        const pokemon = await Pokemon.find(params.id)
        await pokemon.delete()
        return response.status(200).json({message: "Successfully deleted the pokemon"})
    } catch (err) {
        return {
            status: "Failed...",
            message: err.message
        }
    }
  }
}
module.exports = PokemonController;
