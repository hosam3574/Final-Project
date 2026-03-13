import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import User from "./models/User.js";
import Booking from "./models/Booking.js";
import Rental from "./models/Rental.js";

dotenv.config();

const app = express();
app.use(express.json({ limit: "10mb" }));

// ✅ Allow all localhost origins during development
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || origin.startsWith("http://localhost")) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// Connect MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected..."))
  .catch(err => console.error("❌ MongoDB Error:", err));

const JWT_SECRET = process.env.JWT_SECRET;

// --- Routes ---

// Register
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password required" });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.json({ message: "✅ User registered" });
  } catch (err) {
    res.status(400).json({ error: "❌ User already exists" });
  }
});

// Login
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

// Book
app.post("/api/book", async (req, res) => {
  const { pickupDate, returnDate } = req.body;
  if (!pickupDate || !returnDate) return res.status(400).json({ error: "Pickup and return dates required" });

  try {
    const booking = new Booking({ pickupDate, returnDate });
    await booking.save();
    res.json({ message: "✅ Booking saved", booking });
  } catch (err) {
    res.status(500).json({ error: "Error saving booking" });
  }
});

// Rent car
app.post("/api/rent-car", async (req, res) => {
  const { name, price, days, total, driverAge, phone, passport } = req.body;
  if (!name || !price || !days || !total || !driverAge) return res.status(400).json({ error: "Missing required fields" });

  try {
    const rental = new Rental({ name, price, days, total, driverAge, phone, passport });
    await rental.save();
    res.json({ message: "✅ Rental saved", rental });
  } catch (err) {
    res.status(500).json({ error: "Error saving rental data" });
  }
});

// --- Start server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));


// الحصول على جميع الحجز
app.get("/api/bookings", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: "Error fetching bookings" });
  }
});

// الحصول على جميع السيارات المستأجرة
app.get("/api/rentals", async (req, res) => {
  try {
    const rentals = await Rental.find();
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ error: "Error fetching rentals" });
  }
});