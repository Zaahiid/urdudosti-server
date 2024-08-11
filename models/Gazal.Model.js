const { default: mongoose } = require("mongoose");

const ghazalSchema = new mongoose.Schema(
  {
    shayar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shayar",
    },
    sher: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sher",
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ghazal", ghazalSchema);
