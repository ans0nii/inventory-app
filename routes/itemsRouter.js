const { Router } = require("express");
const itemsController = require("../controllers/itemsController");
const itemsRouter = Router();

itemsRouter.get("/", itemsController.itemsListGet);
itemsRouter.get("/new", itemsController.itemsCreateGet);
itemsRouter.post("/new", itemsController.itemsCreatePost);
itemsRouter.get("/:id", itemsController.itemsDetailGet);
itemsRouter.post("/:id/delete", itemsController.itemsDeletePost);
itemsRouter.get("/:id/update", itemsController.itemsUpdateGet);
itemsRouter.post("/:id/update", itemsController.itemsUpdatePost);

module.exports = itemsRouter;
