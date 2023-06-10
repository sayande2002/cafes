import React from "react";
import BookingCard from "../components/BookingCard";

const booking = [
  {
    name: "Table Booking",
    route: "table-booking",
  },
  {
    name: "Party Booking ",
    route: "party-booking",
  },
];

const Bookings = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap gap-8 mt-4">
        {booking.map(({ name, route }) => (
          <BookingCard name={name} route={route} />
        ))}
      </div>
    </>
  );
};

export default Bookings;
