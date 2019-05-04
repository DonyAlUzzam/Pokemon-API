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

const DataGrid = use('DataGrid')
 


Route.group(() => {
  Route.post('/', 'PokemonController.store').middleware(['auth'])
  Route.get('/', 'PokemonController.index')
  Route.get('/:id', 'PokemonController.show')
  Route.delete('/:id', 'PokemonController.destroy').middleware(['auth'])
  Route.patch('/:id', 'PokemonController.update').middleware(['auth'])
}).prefix('api/v1/pokemons')

Route.group(() => {
  Route.post("/register", "AuthController.register");
  Route.post("/login", "AuthController.login");
  Route.get('/data', 'AuthController.getData').middleware(['auth'])
  Route.post("/refresh", "AuthController.generateRefreshToken");
}).prefix('api/v1/users')

Route.group(() => {
  Route.get("/", "CategoryController.index");
  Route.get("/:id", "CategoryController.show");
}).prefix('api/v1/categories')

Route.group(() => {
  Route.get("/", "TypeController.index");
  Route.get("/:id", "TypeController.show");
}).prefix('api/v1/types')

