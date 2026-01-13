const { Router } = require("express");
const categoriesController = require("../controllers/categoriesController");
const categoriesRouter = Router();

categoriesRouter.get("/", categoriesController.categoriesListGet);
categoriesRouter.get("/new", categoriesController.categoriesCreateGet);
categoriesRouter.post("/new", categoriesController.categoriesCreatePost);
categoriesRouter.get("/:id", categoriesController.categoriesDetailGet);
categoriesRouter.post("/:id/delete", categoriesController.categoriesDeletePost);
categoriesRouter.get("/:id/update", categoriesController.categoriesUpdateGet);
categoriesRouter.post("/:id/update", categoriesController.categoriesUpdatePost);

module.exports = categoriesRouter;
