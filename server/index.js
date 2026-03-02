import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(cors({ origin: "http://localhost:5173" })); // React Vite عادة على port 5173

// MongoDB
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/RentCar";
mongoose.connect(MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected..."))
  .catch(err => console.error("❌ MongoDB Error:", err));

// JWT secret
const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

// User model
const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});
const User = mongoose.model("User", UserSchema);

// Booking model
const BookingSchema = new mongoose.Schema({
  pickupDate: String,
  returnDate: String,
  createdAt: { type: Date, default: Date.now },
});
const Booking = mongoose.model("Booking", BookingSchema);

// Rental model
const RentalSchema = new mongoose.Schema({
  name: String,
  price: Number,
  days: Number,
  total: Number,
  driverAge: Number,
  phone: String,
  passport: String,
  createdAt: { type: Date, default: Date.now },
});
const Rental = mongoose.model("Rental", RentalSchema);

// Routes
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.json({ message: "✅ User registered" });
  } catch {
    res.status(400).json({ error: "❌ User already exists" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "User not found" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid password" });
  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
  res.json({ message: "Login successful", token, user: { id: user._id, email: user.email } });
});

app.post("/api/book", async (req, res) => {
  const { pickupDate, returnDate } = req.body;
  if (!pickupDate || !returnDate) return res.status(400).json({ error: "Please provide pickup and return dates" });
  try {
    const booking = new Booking({ pickupDate, returnDate });
    await booking.save();
    console.log("✅ Booking received:", booking);
    res.json({ message: "Booking data received successfully!" });
  } catch (err) {
    console.error("❌ Booking error:", err);
    res.status(500).json({ error: "Error saving booking" });
  }
});

app.post("/api/rent-car", async (req, res) => {
  const { name, price, days, total, driverAge, phone, passport } = req.body;
  if (!name || !price || !days || !total || !driverAge) return res.status(400).json({ error: "Missing required fields" });
  try {
    const rental = new Rental({ name, price, days, total, driverAge, phone, passport });
    await rental.save();
    console.log("✅ Rental saved:", rental);
    res.json({ message: "Car rental data received successfully!" });
  } catch (err) {
    console.error("❌ Rental error:", err);
    res.status(500).json({ error: "Error saving rental data" });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));