import * as db from "../db/queries.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await db.getAllCategories();

    if (!categories) {
      res.status(404).json({ error: "Failed to find categories" });
      return;
    }

    res.json(categories);
  } catch {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newCategories = await db.createCategory(name, description);

    if (!newCategories) {
      res.status(400).json({ error: "Failed to create category" });
      return;
    }

    res.status(201).json(newCategories);
  } catch {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description } = req.body;

    if (!name || !description) {
      res.status(400).json({ error: "Failed to update task" });
      return;
    }

    const updatedCategory = await db.updateCategory(id, name, description);

    res.json(updatedCategory);
  } catch {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedCategory = await db.deleteCategory(id);

    if (!deletedCategory) {
      res.status(404).json({ error: "Failed to delete category " });
      return;
    }

    res.json(deletedCategory);
  } catch {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};
