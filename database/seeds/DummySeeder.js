'use strict'

/*
|--------------------------------------------------------------------------
| DummySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Pokemon = use('App/Models/Pokemon');
const Category = use('App/Models/Category')
const Type = use('App/Models/Type');

const Factory = use('Factory')

class DummySeeder {
  async run () {
   const category1 = new Category();
   category1.name = 'Seed Pokémon';
   await category1.save();

   const category2 = new Category();
   category2.name = 'Lizard Pokémon';
   await category2.save();

   const category3 = new Category();
   category3.name = 'Flame Pokemon';
   await category3.save();

   const category4 = new Category();
   category4.name = '	Tiny Turtle Pokémon';
   await category4.save();

   const category5 = new Category();
   category5.name = 'Turtle Pokémon';
   await category5.save();

   const type1 = new Type();
   type1.name = 'Grass';
   await type1.save();

   const type2 = new Type();
   type2.name = 'Poison';
   await type2.save();

   const type3 = new Type();
   type3.name = 'Water';
   await type3.save();

   const type4 = new Type();
   type4.name = 'Fire';
   await type4.save();

   const pokemonJSON1 = {
     name: "Bulbasaur",
     image_url: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
     latitude: '1212123',
     longitude: '-23131',
     category_id: category1.id
   };

   const pokemon1 = await Pokemon.create(pokemonJSON1);

   const pokemon1Types = [1, 2];

   await pokemon1.type().attach(pokemon1Types)

   const pokemonJSON2 = {
    name: "Charmander",
    image_url: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
    latitude: '1212123',
    longitude: '-23131',
    category_id: category2.id
  };

  const pokemon2 = await Pokemon.create(pokemonJSON2);

  const pokemon2Types = [4];

  await pokemon2.type().attach(pokemon2Types)

  }

  

}

module.exports = DummySeeder
