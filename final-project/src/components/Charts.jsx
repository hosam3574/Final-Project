import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

export default function Charts({ bookings, rentals }) {

  const revenueData = rentals.map((r, i) => ({
    name: `Rental ${i+1}`,
    revenue: r.total
  }));

  const bookingData = bookings.map((b, i) => ({
    name: `Booking ${i+1}`,
    bookings: 1
  }));

  const carData = rentals.map((r) => ({
    name: r.name,
    days: r.days
  }));

  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"30px",marginTop:"40px"}}>

      {/* Revenue Chart */}

      <div style={{background:"white",padding:"20px",borderRadius:"10px"}}>
        <h3>Revenue</h3>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="revenue" fill="#2240ee"/>
          </BarChart>
        </ResponsiveContainer>

      </div>

      {/* Bookings Chart */}

      <div style={{background:"white",padding:"20px",borderRadius:"10px"}}>
        <h3>Bookings</h3>

        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={bookingData}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Line type="monotone" dataKey="bookings" stroke="#10b981"/>
          </LineChart>
        </ResponsiveContainer>

      </div>

      {/* Cars Chart */}

      <div style={{background:"white",padding:"20px",borderRadius:"10px"}}>
        <h3>Cars Usage</h3>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={carData}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="days" fill="#f59e0b"/>
          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}