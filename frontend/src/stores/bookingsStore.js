import { create } from 'zustand';
import axios from 'axios';

const bookingsStore = create((set) => ({
    bookings: null,


    // Lists of booking types and operating system types
    bookingTypes: ["General Check-up", "Hardware repair", "Software Repair", "Data recovery"],

    osTypes: ["Windows", "Linux", "Apple", "Others"],

    // State for creating a new booking
    createForm: {
        bookingType: "",
        fullName: "",
        contact: "",
        deviceType: "",
        os: "",
        problem: "",
        bookingDate: null,
        bookingTime: null,

    },

    // State for updating an existing booking
    updateForm: {
        _id: null,
        bookingType: "",
        fullName: "",
        contact: "",
        deviceType: "",
        os: "",
        problem: "",
        bookingDate: null,
        bookingTime: null,

    },

    fetchBookings: async () => {
        //fetch the Bookings
        const res = await axios.get('/bookings');

        //set to state
        set({ bookings: res.data.bookings });
    },

    updateCreateFormField: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                createForm: {
                    ...state.createForm,
                    [name]: value,
                }
            }
        });
    },

    updateCreateFormDate: (date) => {
        set((state) => {
            return {
                createForm: {
                    ...state.createForm,
                    bookingDate: date,
                }
            }
        });
    },

    updateCreateFormTime: (time) => {
        set((state) => {
            return {
                createForm: {
                    ...state.createForm,
                    bookingTime: time,
                }
            }
        });
    },

    createBooking: async (e) => {
        e.preventDefault();

        const { createForm, bookings } = bookingsStore.getState();
        const res = await axios.post("/bookings", createForm);

        set({
            bookings: [...bookings, res.data.booking],
            createForm: {
                bookingType: "",
                fullName: "",
                contact: "",
                deviceType: "",
                os: "",
                problem: ""
            },
        });
    },

    deleteBooking: async (_id) => {
        //delete the booking
        const res = await axios.delete(`/bookings/${_id}`);
        const { bookings } = bookingsStore.getState();

        //update state
        const newBookings = bookings.filter(booking => {
            return booking._id !== _id;
        });

        set({ bookings: newBookings });
    },

    handleUpdateFieldChange: (e) => {
        const { value, name } = e.target;

        set(state => {
            return {
                updateForm: {
                    ...state.updateForm,
                    [name]: value,
                },
            };
        });
    },

    // updateUpdateFormDate: (date) => {
    //     set((state) => {
    //         return {
    //             updateForm: {
    //                 ...state.updateForm,
    //                 bookingDate: date,
    //             }
    //         }
    //     });
    // },

    // updateUpdateFormTime: (time) => {
    //     set((state) => {
    //         return {
    //             updateForm: {
    //                 ...state.updateForm,
    //                 bookingTime: time,
    //             }
    //         }
    //     });
    // }, 

    toggleUpdate: ({ _id, bookingType, fullName, contact, deviceType, os, problem, bookingDate, bookingTime }) => {
        console.log('toggleUpdate', _id, bookingType, fullName, contact, deviceType, os, problem, bookingDate, bookingTime);
        set((state) => ({
            updateForm: {
                ...state.updateForm,
                bookingType,
                fullName,
                contact,
                deviceType,
                os,
                problem,
                bookingDate,
                bookingTime,
                _id,
            },
        }));

    },

    updateBooking: async (e) => {
        e.preventDefault();

        const { updateForm: { bookingType, fullName, contact, deviceType, os, problem, bookingDate, bookingTime, _id },
            bookings,
        } = bookingsStore.getState();

        // send the update request
        const res = await axios.put(
            `/bookings/${_id}`,
            {
                bookingType,
                fullName,
                contact,
                deviceType,
                os,
                problem,
                bookingDate,
                bookingTime
            }
        );


        // update state
        const newBookings = [...bookings];
        const bookingIndex = bookings.findIndex(booking => {
            return booking._id === _id;
        });
        newBookings[bookingIndex] = res.data.booking;

        set({
            bookings: newBookings,
            updateForm: {
                _id: null,
                bookingType: "",
                fullName: "",
                contact: "",
                deviceType: "",
                os: "",
                problem: "",
                bookingDate: null,
                bookingTime: null
            },
        });
    },
}));

export default bookingsStore;