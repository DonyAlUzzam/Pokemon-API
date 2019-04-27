'use strict'

const Pokemon = use('App/Models/Pokemon')

class PokemonController {
    async index({ response }) {
        const pokemon = await Pokemon.query()
          .with("category")
          .with("type")
          .fetch();
        return response.json(pokemon);
      }

    async show({params, response}){
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
}

module.exports = PokemonController
