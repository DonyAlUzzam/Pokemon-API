'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('categories', (table) => {
      table.increments()
      table.string('name').nullable()
      table.timestamps()
    })

    this.alter("pokemons", table=>{
      table.foreign("category_id").references('id').inTable('categories')
    })
  }

  down () {
    this.drop('categories')
  }
}

module.exports = CategorySchema
