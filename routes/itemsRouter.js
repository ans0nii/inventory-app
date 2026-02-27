import {
  getAllItems,
  getItemById,
  getAllCategories,
  createItem,
  updateItem,
  deleteItem,
} from "../db/queries.js";
import express from "express";
const { Router } = express;
const itemsRouter = Router();

itemsRouter.get("/", getAllItems);
itemsRouter.get("/:id", getItemById);

itemsRouter.post("/", createItem);

itemsRouter.put("/:id", updateItem);

itemsRouter.delete("/:id", deleteItem);

itemsRouter.get("/categories", getAllCategories);

export default itemsRouter;
