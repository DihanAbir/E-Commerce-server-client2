const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

// middleware
const { protect } = require("../middleware/auth");

router.get("/Products", getAllProduct);
router.get("/Products/:id", getProduct);

//protected routes
router.post("/", protect, addProduct);
router.put("/", updateProduct);
router.delete("/", deleteProduct);

module.exports = router;
