const Product = require("../models/Products");
const asyncHandler = require("../middleware/async");

/**
 * @desc Get All Insurers Details
 * @route GET /api/auto/insurer
 * @access Private
 */
// exports.getAllProduct = async (req, res) => {
//   const Products = await Product.find({});
//   res.status(200).json({ oaky: Products });
// };
exports.getAllProduct = asyncHandler(async (req, res, next) => {
  const Products = await Product.find({});
  return res.status(200).json({ Products });
});

/**
 * @desc Get All Insurers Company Name Only
 * @route GET /api/auto/insurer/company-names
 * @access Private
 */
exports.getProduct = asyncHandler(async (req, res, next) => {
  const _id = req.params.id;
  // sending just company-names as titles
  const product = await Product.findById({ _id });
  return res.status(200).json({ product });
});


/**
 * @desc Add Insurer Details
 * @route POST /api/auto/insurer
 * @access Private
 */
exports.addProduct = asyncHandler(async (req, res, next) => {
  req.body.user = req.user.id   

  const product = await Product.create(req.body);
  return res.status(200).json({ product });
});

/**
 * @desc Update Insurer Details
 * @route PUT /api/auto/insurer
 * @access Private
 */
exports.updateProduct = asyncHandler(async (req, res, next) => {
  const _id = req.params.id;
  const product = await Product.findByIdAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
  });
  return res.status(200).json({ product });
});

/**
 * @desc Delete Existing Insurer Company
 * @route DELETE /api/auto/insurer
 * @access Private
 */
exports.deleteProduct = asyncHandler(async (req, res, next) => {
  const _id = req.params.id;
  const product = await Product.findByIdAndDelete(_id);
  return res.status(200).json({ product });
});
