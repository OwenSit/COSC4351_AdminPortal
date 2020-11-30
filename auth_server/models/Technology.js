const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema({
  linkname: {
    type: String,
    required: true,
  },
});

mongoose.model("Technology", technologySchema);
