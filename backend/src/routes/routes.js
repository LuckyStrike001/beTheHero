const express = require("express");

const { celebrate, Segments, Joi } = require("celebrate");

const OngController = require("../controllers/OngController");
const IncidentController = require("../controllers/IncidentController");
const ProfileController = require("../controllers/profileController");
const SessionController = require("../controllers/SessionController");
const { join } = require("../database/connection");

const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number().required().min(9).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  OngController.create
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentController.index
);
routes.post("/incidents", IncidentController.create);
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentController.delete
);

routes.post("/sessions", SessionController.create);

module.exports = routes;
