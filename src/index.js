const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const globalErrorHandler = require("./utils/globalErrorHandler");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();
const userHandler = require("./routes/userRoutes");
const articleHandler = require("./routes/articleRoutes");

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DB_URI, { dbName: process.env.DB_NAME })
  .then(() => console.log("DB connection established"))
  .catch((error) => console.log(error));

app.use("/users", userHandler);
app.use("/articles", articleHandler);

app.get("/", (req, res) => {
  res.send("nexus news is running....");
});

// handling all route which is not found
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`nexus news is running on port ${port}`);
});
