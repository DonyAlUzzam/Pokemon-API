'use strict'

const Type = use("App/Models/Type");

class TypeController {
    async index({ request, response }) {
      try {
        let types = await Type.all();
        return response.status(200).json(types);
      } catch (error) {
        return {
          status: "Something went wrong",
          message: error.message
      }


      }
       
      }
    
      async show({ params, response }) {
        try {
          const type = await Type.query()
            .where("id", params.id)
            .first();
    
          console.log(type); 
          return response.send(type);
        } catch (error) {
          return {
            status: "Something went wrong",
            message: error.message
        }

        }
      }
}   

module.exports = TypeController
