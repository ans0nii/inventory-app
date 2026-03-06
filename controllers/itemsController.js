import * as db from "../db/queries.js";

const sanitizeString = (str) => {
  if (!str) return str;
  return str
    .toString()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+="[^"]*"/gi, "")
    .trim();
};

export const getAllItems = async (req, res) => {
  try {
    const items = await db.getAllItems();

    if (!items) {
      res.status(404).json({ error: "Motorcycles not found" });
      return;
    }

    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to fetch motorcycles" });
  }
};

export const getItemById = async (req, res) => {
  try {
    const id = req.params.id;
    const item = await db.getItemById(id);

    if (!item) {
      res.status(404).json({ error: "Motorcycle not found" });
      return;
    }

    res.json(item);
  } catch {
    res.status(500).json({ error: "Failed to fetch motorcycles" });
  }
};

export const getAllCategories = async (req, res) => {
  try {
    const categories = await db.getAllCategories();

    if (!categories) {
      res.status(404).json({ error: "Categories not found" });
      return;
    }

    res.json(categories);
  } catch {
    res.status(500).json({ error: "Failed to fetch motorcycles" });
  }
};

export const createItem = async (req, res) => {
  try {
    const { name, brand, price, year, description, category_id } = req.body;

    if (!name || !brand) {
      res.status(400).json({ error: "Name and brand are required" });
      return;
    }

    const sanitizedName = sanitizeString(name);
    const sanitizedBrand = sanitizeString(brand);
    const sanitizedDescription = sanitizeString(description);

    if (sanitizedName.length < 2 || sanitizedName.length > 30) {
      res.status(400).json({ error: "Name must be 2-30 characters" });
      return;
    }

    if (sanitizedBrand.length > 20) {
      res.status(400).json({ error: "Brand must be under 20 characters" });
      return;
    }

    if (sanitizedDescription.length > 50) {
      res
        .status(400)
        .json({ error: "Description must be under 50 characters" });
      return;
    }

    const newItem = await db.createItem(
      sanitizedName,
      sanitizedBrand,
      price,
      year,
      sanitizedDescription,
      category_id,
    );

    if (!newItem) {
      res.status(400).json({ error: "Failed to create item" });
      return;
    }

    res.status(201).json(newItem);
  } catch {
    res.status(500).json({ error: "Failed to create motorcycles" });
  }
};

export const updateItem = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, brand, price, year, description, category_id } = req.body;

    if (!name || !brand) {
      res.status(400).json({ error: "Name and brand are required" });
      return;
    }

    const sanitizedName = sanitizeString(name);
    const sanitizedBrand = sanitizeString(brand);
    const sanitizedDescription = sanitizeString(description);

    const item = await db.updateItem(
      id,
      sanitizedName,
      sanitizedBrand,
      price,
      year,
      sanitizedDescription,
      category_id,
    );

    if (!item) {
      res.status(400).json({ error: "Failed to update motorcycle" });
      return;
    }

    res.json(item);
  } catch {
    res.status(500).json({ error: "Failed to fetch motorcycle" });
  }
};

export const deleteItem = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedItem = await db.deleteItem(id);

    if (!deletedItem) {
      res.status(400).json({ error: "Failed to delete motorcycle" });
      return;
    }

    res.json(deletedItem);
  } catch {
    res.status(500).json({ error: "Failed to fetch motorcycle" });
  }
};
