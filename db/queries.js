import pool from "./pool.js";

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  return rows;
}

async function getItemById(id) {
  const { rows } = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
  return rows[0];
}

async function createItem(name, brand, price, year, description, category_id) {
  const { rows } = await pool.query(
    "INSERT INTO items (name, brand, price, year, description, category_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
    [name, brand, price, year, description, category_id],
  );
  return rows[0];
}

async function updateItem(
  id,
  name,
  brand,
  price,
  year,
  description,
  category_id,
) {
  const { rows } = await pool.query(
    "UPDATE items SET name = $1, brand = $2, price = $3, year = $4, description = $5, category_id = $6 WHERE id = $7 RETURNING *",
    [name, brand, price, year, description, category_id, id],
  );
  return rows[0];
}

async function deleteItem(id) {
  const { rows } = await pool.query(
    "DELETE FROM items WHERE id = $1 RETURNING *",
    [id],
  );
  return rows[0];
}

//Categories

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getCategoryById(id) {
  const { rows } = await pool.query("SELECT * FROM categories WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function createCategory(name, description) {
  const { rows } = await pool.query(
    "INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *",
    [name, description],
  );
  return rows[0];
}

async function updateCategory(id, name, description) {
  const { rows } = await pool.query(
    "UPDATE categories SET name = $1, description = $2 WHERE id = $3 RETURNING *",
    [name, description, id],
  );
  return rows[0];
}

async function deleteCategory(id) {
  const { rows } = await pool.query(
    "DELETE FROM categories WHERE id = $1 RETURNING *",
    [id],
  );
  return rows[0];
}

export {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
