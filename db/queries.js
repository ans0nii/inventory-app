const pool = require("./pool");

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
    "INSERT INTO items (name, brand, price, year, description, category_id) VALUES ($1, $2, $3, $4, $5, $6 RETURNING *",
    [name, brand, price, year, description, category_id]
  );
  return rows[0];
}
// Update existing item
async function updateItem(
  id,
  name,
  brand,
  price,
  year,
  description,
  category_id
) {}

// Delete item
async function deleteItem(id) {}

// Get all categories
async function getAllCategories() {}

// Get single category by id
async function getCategoryById(id) {}

// Create new category
async function createCategory(name, description) {}

// Update category
async function updateCategory(id, name, description) {}

// Delete category
async function deleteCategory(id) {}

module.exports = {
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
