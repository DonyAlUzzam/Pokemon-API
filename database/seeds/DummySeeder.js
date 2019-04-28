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

   const type5 = new Type();
   type5.name = 'Flying';
   await type5.save();

   const pokemonJSON1 = {
     name: "Bulbasaur",
     image_url: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
     latitude: '-6.3015707',
     longitude: '106.7329167',
     category_id: category1.id
   };

   const pokemon1 = await Pokemon.create(pokemonJSON1);

   const pokemon1Types = [1, 2];

   await pokemon1.type().attach(pokemon1Types)

   const pokemonJSON2 = {
    name: "Charmander",
    image_url: 'https://cdn.bulbagarden.net/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png',
    latitude: '-6.3023251',
    longitude: '106.7333995',
    category_id: category3.id
  };

  const pokemon2 = await Pokemon.create(pokemonJSON2);

  const pokemon2Types = [4];

  await pokemon2.type().attach(pokemon2Types)

  const pokemonJSON3= {
    name: "Charizard",
    image_url: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
    latitude: '-6.3023251',
    longitude: '106.7333995',
    category_id: category2.id
  };

  const pokemon3 = await Pokemon.create(pokemonJSON3);

  const pokemon3Types = [4, 5];

  await pokemon3.type().attach(pokemon3Types)

  const pokemonJSON4 = {
    name: "	Ivysaur",
    image_url: 'https://vignette.wikia.nocookie.net/pokemon/images/7/73/002Ivysaur.png/revision/latest?cb=20140328190847',
    latitude: '-6.3015707',
    longitude: '106.7329167',
    category_id: category1.id
  };

  const pokemon4 = await Pokemon.create(pokemonJSON4);

  const pokemon4Types = [1, 2];

  await pokemon4.type().attach(pokemon4Types)


  const pokemonJSON5 = {
    name: "Venusaur",
    image_url: 'https://pokemongo.gamepress.gg/sites/pokemongo/files/styles/240w/public/2018-03/pokemon_icon_003_00.png?itok=FFF25h_1',
    latitude: '-6.3023251',
    longitude: '106.7333995',
    category_id: category2.id
  };

  const pokemon5 = await Pokemon.create(pokemonJSON5);

  const pokemon5Types = [4, 5];

  await pokemon5.type().attach(pokemon5Types)

  // Pokemon

  const pokemonJSON6 = {
    name: "Charmeleon",
    image_url: 'https://img.pokemondb.net/artwork/large/charmeleon.jpg',
    latitude: '-6.3023251',
    longitude: '106.7333995',
    category_id: category3.id
  };

  const pokemon6 = await Pokemon.create(pokemonJSON6);

  const pokemon6Types = [4];

  await pokemon6.type().attach(pokemon6Types)


   const pokemonJSON7 = {
    name: "Charmander",
    image_url: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
    latitude: '-6.3015707',
    longitude: '106.7329167',
    category_id: category3.id
  };

  const pokemon7 = await Pokemon.create(pokemonJSON7);

  const pokemon7Types = [4];

  await pokemon7.type().attach(pokemon7Types)


  const pokemonJSON8= {
    name: "Charizard",
    image_url: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
    latitude: '-6.3015707',
    longitude: '106.7329167',
    category_id: category2.id
  };

  const pokemon8 = await Pokemon.create(pokemonJSON8);

  const pokemon8Types = [4, 5];

  await pokemon8.type().attach(pokemon8Types)



  const pokemonJSON9 = {
    name: "Charizard",
    image_url: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
    latitude: '-6.3015707',
    longitude: '106.7329167',
    category_id: category2.id
  };

  const pokemon9 = await Pokemon.create(pokemonJSON9);

  const pokemon9Types = [4, 5];

  await pokemon9.type().attach(pokemon9Types)


  const pokemonJSON10 = {
    name: "Charizard",
    image_url: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
    latitude: '-6.3015707',
    longitude: '106.7329167',
    category_id: category2.id
  };

  const pokemon10 = await Pokemon.create(pokemonJSON10);

  const pokemon10Types = [4, 5];

  await pokemon10.type().attach(pokemon10Types)





  // adadada
  const pokemonJSON11 = {
    name: "Bulbasaur",
    image_url: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
    latitude: '-6.3015707',
    longitude: '106.7329167',
    category_id: category1.id
  };

  const pokemon11 = await Pokemon.create(pokemonJSON11);

  const pokemon11Types = [1, 2];

  await pokemon11.type().attach(pokemon11Types)

  
  const pokemonJSON12 = {
   name: "Charmander",
   image_url: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
   latitude: '-6.3015707',
   longitude: '106.7329167',
   category_id: category3.id
 };

 const pokemon12 = await Pokemon.create(pokemonJSON12);

 const pokemon12Types = [4];

 await pokemon12.type().attach(pokemon12Types)

 const pokemonJSON13= {
   name: "Charizard",
   image_url: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
   latitude: '-6.3015707',
   longitude: '106.7329167',
   category_id: category2.id
 };

 const pokemon13 = await Pokemon.create(pokemonJSON13);

 const pokemon13Types = [4, 5];

 await pokemon13.type().attach(pokemon13Types)

 const pokemonJSON14 = {
   name: "Charizard",
   image_url: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
   latitude: '-6.3015707',
   longitude: '106.7329167',
   category_id: category2.id
 };

 const pokemon14 = await Pokemon.create(pokemonJSON14);

 const pokemon14Types = [4, 5];

 await pokemon14.type().attach(pokemon14Types)


 const pokemonJSON15 = {
   name: "Charizard",
   image_url: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
   latitude: '-6.3015707',
   longitude: '106.7329167',
   category_id: category2.id
 };

 const pokemon15 = await Pokemon.create(pokemonJSON15);

 const pokemon15Types = [4, 5];

 await pokemon15.type().attach(pokemon15Types)

 // Pokemon

 const pokemonJSON16 = {
   name: "Charizard",
   image_url: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
   latitude: '-6.3015707',
   longitude: '106.7329167',
   category_id: category2.id
 };

 const pokemon16 = await Pokemon.create(pokemonJSON16);

 const pokemon16Types = [4, 5];

 await pokemon16.type().attach(pokemon16Types)


  const pokemonJSON17 = {
   name: "Charmander",
   image_url: 'https://cdn.bulbagarden.net/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png',
   latitude: '-6.3015707',
   longitude: '106.7329167',
   category_id: category3.id
 };

 const pokemon17 = await Pokemon.create(pokemonJSON17);

 const pokemon7Types = [4];

 await pokemon17.type().attach(pokemon17Types)


 const pokemonJSON18= {
   name: "Charizard",
   image_url: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
   latitude: '-6.3015707',
   longitude: '106.7329167',
   category_id: category2.id
 };

 const pokemon18 = await Pokemon.create(pokemonJSON18);

 const pokemon18Types = [4, 5];

 await pokemon18.type().attach(pokemon18Types)



 const pokemonJSON19 = {
   name: "Charizard",
   image_url: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
   latitude: '-6.3015707',
   longitude: '106.7329167',
   category_id: category2.id
 };

 const pokemon19 = await Pokemon.create(pokemonJSON19);

 const pokemon19Types = [4, 5];

 await pokemon19.type().attach(pokemon19Types)


 const pokemonJSON20 = {
   name: "Charizard",
   image_url: 'https://img.pokemondb.net/artwork/large/charizard-mega-y.jpg',
   latitude: '-6.3015707',
   longitude: '106.7329167',
   category_id: category2.id
 };

 const pokemon20 = await Pokemon.create(pokemonJSON20);

 const pokemon20Types = [4, 5];

 await pokemon20.type().attach(pokemon20Types)


 
 }
 }

module.exports = DummySeeder
