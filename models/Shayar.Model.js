const { default: mongoose } = require("mongoose");

const shayarSchema = new mongoose.Schema(
  {
    nameUR: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
    descriptionUR: {
      type: [String],
      default: [],
    },
    descriptionEN: {
      type: [String],
      default: [],
    },
    image: {
      type: String,
      default: "",
    },
    dateOfBirthGregorian: {
      type: Date,
      default: null,
    },
    dateOfBirthHijri: {
      type: Date,
      default: null,
    },
    placeOfBirth: {
      type: String,
      default: "",
    },
    dateOfDeathGregorian: {
      type: Date,
      default: null,
    },
    dateOfDeathHijri: {
      type: Date,
      default: null,
    },
  },
  {
    versionKey: true,
    timestamps: true,
  }
);
