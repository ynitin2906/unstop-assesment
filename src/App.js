import { useState } from "react";
import "./App.css";
import BookYourSeat, { bookedSeats } from "./components/BookYourSeat";
import Show from "./components/Show";

function App() {
  const availableSeats = 80 - bookedSeats.size;
  // console.log(80 - bookedSeats);
  const [seats, setSeats] = useState("");
  const [err, setErr] = useState("");
  const handleSubmit = () => {
    if (!seats) return setErr("Input shouldn't be left blank");
    if (seats <= 0) return setErr("Oops!! Can't Book Negative or Zero Seats");
    if (seats > 7) return setErr("Sorry!! Can't Book More Than 7 Seats");

    if (seats > availableSeats)
      return setErr("Sorry!! Not Enough Seats Available");
    BookYourSeat(Number(seats));
    setErr("");
    setSeats("");
  };
  return (
    <div className="App">
      <div className="Container">
        <div className="form-container">
          <h1>Book Your Comfort</h1>
          <div className="form">
            <p style={{ fontSize: "20px" }}>Enter Number of Seats</p>
            <input
              type="number"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              placeholder="Enter No. of seats"
            />
            <p className="err">{err}</p>

            <p>Available Seats : {availableSeats}</p>
            <button onClick={handleSubmit}>Book Ticket</button>
            <div className="indentify">
              <div className="available"></div>
              <p>Available Seats</p>
              <div className="bookedSeat"></div>
              <p>Booked Seats</p>
            </div>
          </div>
        </div>

        <div className="hr"></div>

        <div className="seat-container">
          <h1>Seat Status</h1>
          <div className="seats">
            <Show />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
