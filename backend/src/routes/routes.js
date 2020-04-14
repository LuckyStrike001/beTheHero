const express = require("express");

const ongController = require("../controllers/OngController");
const incidentController = require("../controllers/incidentController");

const routes = express.Router();

routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.create);

routes.post("/incidents", incidentController.create);

module.exports = routes;
