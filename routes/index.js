const Router = require("express").Router();
const TvController = require("../controllers");

Router.get("/", TvController.getList);
Router.get("/:id", TvController.getById);
Router.post("/", TvController.create);
Router.patch("/:id", TvController.update);
Router.delete("/:id", TvController.delete);

module.exports = Router;
