const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

router.get("/Products", getAllProduct);
router.get("/Products/:id", getProduct);

router.post("/product", addProduct);
router.put("/product", updateProduct);
router.delete("/product", deleteProduct);

module.exports = router;
