import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  createProduct,
  deleteProduct,
  listProducts,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", listProducts);

router.post("/", auth, createProduct);

router.put("/:id", auth, updateProduct);

router.delete("/:id", auth, deleteProduct);

export default router;
