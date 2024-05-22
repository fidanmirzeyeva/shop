import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const ProductsSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
});
const ProductsModel = mongoose.model("products", ProductsSchema);
app.get("/user", async (req, res) => {
    const products = await ProductsModel.find()
  res.send(products);
});
app.get("/user/:id", async (req, res) => {
    const {id} = req.params
    const products = await ProductsModel.findById(id)
  res.send(products);

 
});

app.post("/user", async (req, res) => {
    const data = req.body
    const products = new ProductsModel(data)
    await products.save()
  res.send(products);
});

app.put("/user", async (req, res) => {
  res.send();
});

app.delete("/user/:id", async (req, res) => {
    const {id} = req.params
    const data = req.body
    const products = await ProductsModel.findByIdAndDelete(id,data)
  res.send(products);
});
mongoose
  .connect("mongodb+srv://fidan:fidan2911@fidoshh.cia2mse.mongodb.net/")
  .then(() => console.log("Connected!"));
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
