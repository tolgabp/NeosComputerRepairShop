import bookingsStore from "../stores/bookingsStore";
import Booking from "./Booking";

export default function Bookings() {

    const store = bookingsStore();
//renders all bookings
    return (
        <div>
            <h2>Bookings:</h2>
            {store.bookings && store.bookings.map(booking => {
                return <Booking booking={booking} key={booking._id} />
                    ;
            })}
        </div>

    )
}