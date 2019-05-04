'use strict'

const Category = use("App/Models/Category");

class CategoryController {
    async index({ request, response }) {
        let categories = await Category.all();
    return response.status(200).json(categories);
      }
    
      async show({ params, response }) {
        try {
          const category = await Category.query()
            .where("id", params.id)
            .first();
    
          console.log(category); 
          return response.send(category);
        } catch (error) {
          console.log(error);
        }
      }
    
}

module.exports = CategoryController
