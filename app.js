import express from "express";
import cors from "cors";
import categoriesRouter from "./routes/categoriesRouter.js";
import itemsRouter from "./routes/itemsRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/categories", categoriesRouter);
app.use("/api/items", itemsRouter);

app.get("/", (req, res) => {
  res.json({ message: "Inventory is running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw new Error("Failed to launch inventory");
  }
  console.log(`Inventory is running on ${PORT}`);
});
