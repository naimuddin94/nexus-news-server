const express = require("express");
const cors = require("cors");
const globalErrorHandler = require("./utils/globalErrorHandler");
require("dotenv").config();
const app = express();
const userRoutes = require("./routes/userRoutes");
const articleRoutes = require("./routes/articleRoutes");
const authenticationRoute = require("./routes/authenticationRoute");


app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://nexus-news-5bb9e.web.app",
      "https://nexus-news-5bb9e.firebaseapp.com",
    ],
    credentials: true,
  })
);

app.use("/users", userRoutes);
app.use("/articles", articleRoutes);
app.use("/auth", authenticationRoute);

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

module.exports = app;
