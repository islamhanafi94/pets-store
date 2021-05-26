const mongoose = require("mongoose");

const petSchema = new mongoose.Schema(
  {
    name: { type: String },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    photoUrls: { type: [{ name: { type: String } }], required: true },
    tags: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }] },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    status: {
      type: String,
      enum: ["available", "pending", "sold"],
      default: "available",
    },
    bids: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        amount: { type: Number, min: 1 },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pet", petSchema);
