const db = require("../db/queries");

exports.categoriesListGet = async (req, res) => {
  const categories = await db.getAllCategories();
  res.render("categories/list", {categories});
};

exports.categoriesCreateGet = (req, res) => {
  res.render("categories/form", {categories: null});
};

exports.categoriesCreatePost = async (req, res) => {
  const { name, description } = req.body;
  await db.createCategory(name, description);
  res.redirect("/categories");
};

exports.categoriesDetailGet = async (req, res) => {
  const id = req.params.id;
  const category = await db.getCategoryById(id);
  res.render("category/detail", {category})
};

exports.categoriesDeletePost = async (req, res) => {
  await db.deleteCategory(req.params.id);
  res.redirect("/categories");
};

exports.categoriesUpdateGet = async (req, res) => {
  const category = await db.getCategoryById(req.params.id);
  res.render("categories/form", { category });
};

exports.categoriesUpdatePost = async (req, res) => {
  const { name, description } = req.body;
  await db.updateCategory(req.params.id, name, description);
  res.redirect("/categories/" + req.params.id);
};
