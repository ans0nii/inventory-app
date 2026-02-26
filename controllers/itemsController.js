const db = require("../db/queries");

export const getAllItems = async (req, res) => {
  try {
    const items = await db.getAllItems();

    if (!items) {
      res.status(404).json({ error: "Failed to find items" });
      return;
    }

    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to fetch items" });
  }
};

export const getItemById = async (req, res) => {
  const { name, brand, price, year, description, category_id } = req.body;
  await db.createItem(name, brand, price, year, description, category_id);
  res.redirect("/items");
};

export const getAllCategories = async (req, res) => {

};

export const createItem = async (req, res) => {

};

export const updateItem = async (req, res) => {

};

export const deleteItem = async (req, res) => {
  const { name, brand, price, year, description, category_id } = req.body;
  await db.updateItem(
    req.params.id,
    name,
    brand,
    price,
    year,
    description,
    category_id,
  );
  res.redirect("/items/" + req.params.id);
};
