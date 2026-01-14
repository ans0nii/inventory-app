const db = require("../db/queries");

exports.itemsListGet = async (req, res) => {
  const items = await db.getAllItems();
  res.send("Items: " + items.map((item) => item.name).join(", "));
};

exports.itemsCreateGet = (req, res) => {
  res.render("items/form");
};

exports.itemsCreatePost = async (req, res) => {
  const { name, brand, price, year, description, category_id } = req.body;
  await db.createItem(name, brand, price, year, description, category_id);
  res.redirect("/items");
};

exports.itemsDetailGet = async (req, res) => {
  const id = req.params.id;
  const item = await db.getItemById(id);
  res.send(JSON.stringify(item));
};

exports.itemsDeletePost = async (req, res) => {
  await db.deleteItem(req.params.id);
  res.redirect("/items");
};

exports.itemsUpdateGet = async (req, res) => {
  const item = await db.getItemById(req.params.id);
  res.render("items/form", { item });
};

exports.itemsUpdatePost = async (req, res) => {
  const { name, brand, price, year, description, category_id } = req.body;
  await db.updateItem(
    req.params.id,
    name,
    brand,
    price,
    year,
    description,
    category_id
  );
  res.redirect("/items/" + req.params.id);
};
