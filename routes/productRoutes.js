import express from "express";
import { createProduct, readAllProducts, readProductById, updateProduct, deleteProduct, insertProduct } from '../controller/productController.js';

const productRoutes = express.Router();

productRoutes.route("/")
    .get(readAllProducts)
    .post(createProduct);

productRoutes.route("/:id")
    .get(readProductById)
    .delete(deleteProduct)
    .post(insertProduct)
    .put(updateProduct);

export default productRoutes;
