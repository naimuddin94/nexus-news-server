const mongoose = require("mongoose");
const publisherSchema = require("../schemas/publisherSchema");
const Publisher = mongoose.model("Publisher", publisherSchema);

// get all publisher
const getAllPublisher = async (req, res) => {
  try {
    const publisher = await Publisher.find({});
    res.send(publisher);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// create a new publisher
const createPublisher = async (req, res) => {
  try {
    const publisher = req.body;
    await Publisher.create(publisher);
    res.status(200).send({ message: "Publisher created successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// delete publisher
const deletePublisher = async (req, res) => {
  try {
    const id = req.params.id;
    await Publisher.findByIdAndDelete(id);
    res.status(200).send({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { createPublisher, getAllPublisher, deletePublisher };
