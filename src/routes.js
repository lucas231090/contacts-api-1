const { Router } = require("express");
const ContactController = require("./controllers/ContactController");

const routes = Router();

routes.get("/contacts", ContactController.index);
routes.get("/contacts/:id", ContactController.show);
routes.post("/contacts", ContactController.store);
routes.put("/contacts/:id", ContactController.update);
routes.delete("/contacts/:id", ContactController.delete);

//rota "/users" - TIPO POST
routes.post("/users", (request, response) => {
  console.log(request.body);
  response.json({ message: "Rota /users METODO POST" });
});

module.exports = routes;