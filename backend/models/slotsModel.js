import mongoose from "mongoose";

const slotsSchema = mongoose.Schema(
  {
    value: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Slots = mongoose.model("Slots", slotsSchema);

module.exports = Slots;
