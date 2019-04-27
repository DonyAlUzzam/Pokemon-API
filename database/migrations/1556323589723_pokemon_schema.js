'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PokemonSchema extends Schema {
  up () {
    this.create('pokemons', (table) => {
      table.increments()
      table.integer('category_id')
      .unsigned()
      table.string('name').nullable()
      table.string('image_url').nullable()
      table.double('latitude').notNullable()
      table.double('longitude').notNullable()
      table.timestamps()
    })
   
  }

  down () {
    this.drop('pokemons')
  }
}

module.exports = PokemonSchema
