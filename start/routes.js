'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {

  Route.post('pokemons', 'PokemonController.store').middleware(['auth'])
  Route.get('pokemons', 'PokemonController.index')
  Route.get('pokemons/:id', 'PokemonController.show')
  Route.delete('pokemons/:id', 'PokemonController.destroy').middleware(['auth'])

  Route.post("users/register", "AuthController.register");
  Route.post("users/login", "AuthController.login");
  Route.get('users/data', 'AuthController.getData').middleware(['auth'])
  Route.post("users/refresh", "AuthController.generateRefreshToken");

}).prefix('api/v1')

