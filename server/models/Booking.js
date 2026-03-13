import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  pickupDate: { type: String, required: true },
  returnDate: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Booking", BookingSchema);