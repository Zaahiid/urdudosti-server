const { default: mongoose } = require("mongoose");

const sherSchema = new mongoose.Schema(
  {
    misraOneUR: {
      type: String,
      required: true,
    },
    misraOneEN: {
      type: String,
      required: true,
    },
    misraTwoUR: {
      type: String,
      required: true,
    },
    misraTwoEN: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
