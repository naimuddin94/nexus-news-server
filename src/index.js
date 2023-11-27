const express = require("express");
const cors = require("cors");
const globalErrorHandler = require("./utils/globalErrorHandler");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

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

const main = async () => {
  app.listen(port, () => {
    console.log(`nexus news is running on port ${port}`);
  });
};

main();
