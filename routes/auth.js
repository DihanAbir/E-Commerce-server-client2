const express = require("express");
const passport = require("passport");
const {
  register,
  login,
  logout,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
} = require("../controllers/auth");

const router = express.Router();

// variable
const CLIENT_URL = "http://localhost:3000";

const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.get("/getMe", protect, getMe);
router.put("/updateDetails", protect, updateDetails);
router.get("/forgotPassword", forgotPassword);

// google auth routes

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

module.exports = router;
