import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import Charts from "./Charts";
import CarCard from "./carCard";

export default function Dashboard({ userEmail }) {
  const [bookings, setBookings] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [cars, setCars] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [activeTab, setActiveTab] = useState("Dashboard");

  const menuItems = ["Dashboard", "Bookings", "Cars", "Customers", "Settings"];

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = () => {
    fetch("http://localhost:5000/api/bookings").then(res => res.json()).then(setBookings);
    fetch("http://localhost:5000/api/rentals").then(res => res.json()).then(setRentals);
    fetch("http://localhost:5000/api/cars").then(res => res.json()).then(setCars);
    fetch("http://localhost:5000/api/customers").then(res => res.json()).then(setCustomers);
  };

  const handleNewRental = (rental) => {
    setRentals(prev => [...prev, rental]);
  };

  const totalCars = cars.length;
  const totalBookings = bookings.length;
  const totalCustomers = customers.length;
  const totalRevenue = rentals.reduce((sum, r) => sum + (r.total || 0), 0);

  const deleteBooking = async (id) => {
    await fetch(`http://localhost:5000/api/bookings/${id}`, { method: "DELETE" });
    setBookings(prev => prev.filter(b => b._id !== id));
  };

  const deleteCar = async (id) => {
    await fetch(`http://localhost:5000/api/cars/${id}`, { method: "DELETE" });
    setCars(prev => prev.filter(c => c._id !== id));
  };

  const deleteCustomer = async (id) => {
    await fetch(`http://localhost:5000/api/customers/${id}`, { method: "DELETE" });
    setCustomers(prev => prev.filter(c => c._id !== id));
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2>CarRent</h2>
        <ul>
          {menuItems.map(item => (
            <li key={item} className={activeTab === item ? "active" : ""} onClick={() => setActiveTab(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="main">
        <div className="topbar">
          <h1>{activeTab}</h1>
          <button className="logout">Logout</button>
        </div>

        {activeTab === "Dashboard" && (
          <>
            <div className="cards">
              <div className="card"><h3>Total Cars</h3><p>{totalCars}</p></div>
              <div className="card"><h3>Bookings</h3><p>{totalBookings}</p></div>
              <div className="card"><h3>Customers</h3><p>{totalCustomers}</p></div>
              <div className="card"><h3>Revenue</h3><p>${totalRevenue}</p></div>
            </div>
            <Charts bookings={bookings} rentals={rentals} />
          </>
        )}

        {activeTab === "Bookings" && (
          <div className="table-container">
            <h2>Recent Bookings</h2>
            <table>
              <thead>
                <tr><th>ID</th><th>Pickup Date</th><th>Return Date</th><th>Action</th></tr>
              </thead>
              <tbody>
                {bookings.map(b => (
                  <tr key={b._id}>
                    <td>{b._id}</td>
                    <td>{b.pickupDate}</td>
                    <td>{b.returnDate}</td>
                    <td><button className="btn-delete" onClick={() => deleteBooking(b._id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "Cars" && (
          <div className="table-container">
            <h2>Cars Management</h2>

            {cars.map(c => (
              <CarCard key={c._id} name={c.name} price={c.price} image={c.image} reviews={c.reviews} userEmail={userEmail} onNewRental={handleNewRental} />
            ))}

            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Car Name</th>
                  <th>Price/Day</th>
                  <th>Status</th>
                  <th>Info</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((c, index) => {
                  const rental = rentals.find(r => r.carName === c.name);
                  const status = rental ? "Rented" : "Available";
                  return (
                    <tr key={c._id}>
                      <td>{index + 1}</td>
                      <td>{c.name}</td>
                      <td>${c.price}</td>
                      <td>
                        <span className={status === "Rented" ? "badge rented" : "badge available"}>{status}</span>
                      </td>
                      <td>
                        {rental ? (
                          <div style={{ fontSize: "0.9em", lineHeight: 1.4 }}>
                            <div>Age: {rental.driverAge}</div>
                            <div>Phone: {rental.phone}</div>
                          </div>
                        ) : "-"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "Customers" && (
          <div className="table-container">
            <h2>Customers Management</h2>
            <table>
              <thead>
                <tr><th>ID</th><th>Name</th><th>Email</th><th>Action</th></tr>
              </thead>
              <tbody>
                {customers.map(c => (
                  <tr key={c._id}>
                    <td>{c._id}</td>
                    <td>{c.name}</td>
                    <td>{c.email}</td>
                    <td><button className="btn-delete" onClick={() => deleteCustomer(c._id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "Settings" && (
          <div style={{ padding: "20px" }}>
            <h2>Settings</h2>
            <p>يمكنك إضافة إعدادات Dashboard هنا</p>
          </div>
        )}
      </div>
    </div>
  );
}