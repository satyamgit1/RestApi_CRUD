// help to start mongodb
// https://stackoverflow.com/questions/18452023/installing-and-running-mongodb-on-osx
// brew services start mongodb-community
// mongosh
// brew services stop mongodb-community

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/Sample", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected with MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

// Parse URL-encoded bodies (typically form data)
app.use(bodyParser.urlencoded({ extended: false }));
// Parse JSON bodies (for JSON data)
app.use(express.json());




const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});
const Product = mongoose.model("Product", productSchema); // product collection
//create a new Product
app.post("/api/v1/product/new", async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json({
        success: true,
        product
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
//Read a product
app.get("/api/v1/products", async (req, res) => {
    const products = await Product.find();
    res.status(201).json({
        success: true,
        products
      });

});

// Update a product
app.put("/api/v1/product/:id", async (req, res) => {
    try {
      // Find the product by ID
      let product = await Product.findById(req.params.id);
  
      // Check if the product exists
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Update the product with the new data
      product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true, // Return the updated product
        useFindAndModify: false, // Set to false to use native findOneAndUpdate() rather than findAndModify()
        runValidators: true // Ensure that validation is run against the new data
      });
  
      // Send response with updated product
      res.status(200).json({
        success: true,
        product
      });
    } catch (error) {
      // Handle any errors
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  // Delete a product
app.delete("/api/v1/product/:id", async (req, res) => {
    try {
      // Find the product by ID
      const product = await Product.findById(req.params.id);
  
      // Check if the product exists
      if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
  
      // Delete the product
      await Product.findByIdAndDelete(req.params.id);
  
      // Send success response
      res.status(200).json({
        success: true,
        message: 'Product deleted successfully'
      });
    } catch (error) {
      // Handle any errors
      console.error(error);
      res.status(500).json({ success: false, message: 'Product not found' });
    }
  });
  
  



const PORT = process.env.PORT || 4500;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
