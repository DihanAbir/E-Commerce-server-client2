const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

// const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");

const passport = require("passport");
const cors = require("cors");

// custome
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
const passportSetp = require("./utils/passport");

// Mount routers
const auth = require("./routes/auth");
const authSocal = require("./routes/authSocal");
const product = require("./routes/product");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

// Route files
// const auth = require("./routes/auth");

const app = express();
app.use(express.json());

app.use(
  cookieSession({
    name: "session",
    keys: ["youcompare"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

//cookieParser
// app.use(cookieParser());

// Enable CORS
app.use(
  cors({
    // origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Mount routers
app.use("/api/v1/auth", auth);
app.use("/auth", authSocal);

// product
app.use("/api/product", product);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("E-Commerce API is running Successfully....");
});

const PORT = process.env.PORT || 5000;

// const server = app.listen(
//   "5000",
//   console.log(
//     `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
//   )
// );
app.listen("5000", () => {
  console.log("Server is running on 5000!");
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
