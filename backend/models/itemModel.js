import mongoose from "mongoose";

const formats = {
  1: "CD",
  2: "Kaseta",
  3: "Winyl",
};

const genres = {
  1: "Rock",
  2: "Elektroniczna",
  3: "Pop",
  4: "Muzyka etniczna, Folk, Country",
  5: "Jazz",
  6: "Funk / Soul",
  7: "Klasyczna",
  8: "Hip Hop",
  9: "Latynoska",
  10: "Użytkowa",
  11: "Reggae",
  12: "Blues",
  13: "Non-Music",
  14: "Dla dzieci",
  15: "Brass & Military",
};

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: [
    {
      type: String,
      default: "Various",
    },
  ],
  format: {
    type: String,
    enum: formats,
    required: true,
  },
  genre: [
    {
      type: String,
      enum: genres,
      required: true,
    },
  ],
  year: {
    type: Number || String,
    default: "Unknown",
  },
  country: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  tracklist: [
    {
      trackName: {
        type: String,
        required: true,
      },
      trackLength: {
        type: Number,
      },
      trackArtist: {
        type: String,
      },
    },
  ],
  label: {
    type: String,
    required: true,
  },
  catalogueNum: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  previewMusic: {
    type: String,
    required: true,
  },
});

const itemModel = mongoose.model("Item", itemSchema);

export default itemModel;
