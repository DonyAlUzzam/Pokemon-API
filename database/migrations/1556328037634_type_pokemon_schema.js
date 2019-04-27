"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class TypePokemonSchema extends Schema {
  up() {
    this.create("type_pokemons", table => {
      // table.increments()
      // table.integer('pokemon_id')
      // .unsigned()
      // .references('id')
      // .inTable('pokemons')
      // .onDelete('CASCADE');
      // table.integer('type_id')
      // .unsigned()
      // .references('id')
      // .inTable('types')
      // .onDelete('CASCADE');
      // table.timestamps()

      table
        .integer("pokemon_id")
        .unsigned()
        .index("pokemon_id");
      table
        .foreign("pokemon_id")
        .references("pokemons.id")
        .onDelete("cascade");
      table
        .integer("type_id")
        .unsigned()
        .index("type_id");
      table
        .foreign("type_id")
        .references("types.id")
        .onDelete("cascade");
    });
  }

  down() {
    this.drop("type_pokemons");
  }
}

module.exports = TypePokemonSchema;
