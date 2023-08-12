import bookingsStore from "../stores/bookingsStore"

//Handling delete and toggleUpdate function of the bookings
export default function Booking({ booking }) {
    const store = bookingsStore(store => {

        return {
            deleteBooking: store.deleteBooking,
            toggleUpdate: store.toggleUpdate,
        };
    });


    return (<div key={booking._id}>
        <h3>{booking.bookingType}</h3>
        <button onClick={() => store.deleteBooking(booking._id)}>
            Delete booking
        </button>
        <button onClick={() => store.toggleUpdate(booking)}>Update booking</button>
    </div>);
}