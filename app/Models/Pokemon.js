'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pokemon extends Model {
    static get table() {
        return('pokemons');
      }
      static get PrimaryKey() {
        return('id');
      }
    
    category(){
        return this.belongsTo('App/Models/Category')
    }

    type(){
        return this.belongsToMany('App/Models/Type').pivotTable('type_pokemons')
    }
}

module.exports = Pokemon
