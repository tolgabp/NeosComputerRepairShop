import { useEffect } from "react";
import CreateForm from "../components/CreateForm";
import UpdateForm from "../components/UpdateForm";
import bookingsStore from "../stores/bookingsStore";
import Bookings from "../components/Bookings";


import CustomerNavbar from "../components/CustomerNavbar";

export default function BookingsPage() {
    const store = bookingsStore();

  //use effect
  useEffect(() => {
    store.fetchBookings();
  }, []);

    return (
        <div>
            <CustomerNavbar/>
            <Bookings />
            <UpdateForm/>
            <CreateForm />
        </div>
    )
}
