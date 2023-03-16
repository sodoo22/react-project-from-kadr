const express = require("express");
const ProductCategory = require("../models/ProductCategory");

const Router = express.Router();

Router.get("/categories", async (request, response) => {
  const categories = await ProductCategory.find({});
  response.status(200).send({ data: categories });
});

Router.post("/category/add", async (request, response) => {
  const body = request.body;
  const category = new ProductCategory();
  category.product_category_name = body.categoryName;
  category.product_category_description = body.categoryDescription;

  const savedCategory = await category.save();

  response.status(200).send({ data: savedCategory });
});

module.exports = Router;
