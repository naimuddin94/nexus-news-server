const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("nexus news is running....");
});

const main = async () => {
  app.listen(port, () => {
    console.log(`nexus news is running on port ${port}`);
  });
};

main();
