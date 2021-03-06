'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Type extends Model {
    pokemon() {
        return this.belongsToMany('App/Models/Pokemon').pivotTable('type_pokemons')
      }
    
}

module.exports = Type
