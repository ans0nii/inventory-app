const express = require("express");
const app = express();
const categoriesRouter = require("./routes/categoriesRouter");
const itemsRouter = require("./routes/itemsRouter");
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/categories", categoriesRouter);
app.use("/items", itemsRouter);

app.get("/", (req, res) => {
    res.render('index')
})
const PORT = 3000;
app.listen(PORT, (error) => {
    if(error){
        throw error;
    }
    console.log(`Server is running on ${PORT}`);
});