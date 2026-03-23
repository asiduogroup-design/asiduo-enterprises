import Product from "../models/Product.js";

export const listProducts = async (req, res, next) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.json(products);
  } catch (err) {
    return next(err);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const { name, description, image, category } = req.body;
    if (!name || !description || !category) {
      return res.status(400).json({ message: "Missing required fields." });
    }
    const product = await Product.create({ name, description, image, category });
    return res.status(201).json(product);
  } catch (err) {
    return next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Product not found." });
    }
    return res.json(updated);
  } catch (err) {
    return next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Product not found." });
    }
    return res.json({ message: "Deleted." });
  } catch (err) {
    return next(err);
  }
};
