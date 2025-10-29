// Form for customers to book a table or special event reservation

import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const ReservationForm = () => {
  const { addReservation } = useContext(AppContext);

  // Local state for reservation form fields
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState(1);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add reservation to global context
    addReservation({ id: Date.now(), name, date, time, people });

    // Notify user
    alert("Reservation confirmed!");

    // Clear form after submission
    setName("");
    setDate("");
    setTime("");
    setPeople(1);
  };

  return (
    <form className="Book" onSubmit={handleSubmit}>
      <h2>Book a Table</h2>
        <label>Name </label><input className="inputname" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required/>
      <br />

        <label>Date</label><input className="inputdate" type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <br />

      <label>Time</label><input  className="inputtime" type="time" value={time} onChange={e => setTime(e.target.value)} required />
      <br />
      <label>How Many people</label><input className="inputnum" type="number" min="1" value={people} onChange={e => setPeople(e.target.value)} required />
      <br />
      <button type="submit">Reserve</button>
    </form>
  );
};

export default ReservationForm;
