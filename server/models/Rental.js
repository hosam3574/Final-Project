import mongoose from "mongoose";

const RentalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  days: { type: Number, required: true },
  total: { type: Number, required: true },
  driverAge: { type: Number, required: true },
  phone: String,
  passport: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Rental", RentalSchema);