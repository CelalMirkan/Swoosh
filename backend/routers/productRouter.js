import express from "express";
import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import data from "../data.js";

const productRouter = express.Router();

productRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
      const name = req.query.name || '';
      const nameFilter = name ? { name: { $regex: name, $options: 'i' } } : {};
      const products = await Product.find({
        ...nameFilter,
      }).populate();
      res.send(products);
    })
  );
  


productRouter.get('/seed', expressAsyncHandler(async(req, res) =>{
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
}

));

productRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({message: 'Product not found'});
    }
}));

export default productRouter;