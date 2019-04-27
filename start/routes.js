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

  Route.post('pokemon', 'PokemonController.store').middleware(['auth'])
  Route.get('pokemon', 'PokemonController.index')
  Route.get('pokemon/:id', 'PokemonController.show')
}).prefix('api/v1')

