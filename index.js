const express = require("express");
const app = express();
const colors = require("colors");
var dotenv = require("dotenv");
const mongodb = require("./config/db");
const userRoutes = require("./routes/user-routes");
const blogRoutes = require("./routes/blog-routes");

dotenv.config();
mongodb();

app.use(express.json());
app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);
app.listen(5000, console.log("Server is running at 5000 port"));
