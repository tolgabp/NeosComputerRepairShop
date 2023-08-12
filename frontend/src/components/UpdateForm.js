import bookingsStore from "../stores/bookingsStore";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers';

export default function UpdateForm() {
    const store = bookingsStore();
    console.log('UpdateForm', store.updateForm);
    if (!store.updateForm._id) return <></>;
    return (
        <div>
            <h2>Update bookings</h2>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <form onSubmit={store.updateBooking}>

                    <label>Booking Type
                        <select
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateForm.bookingType}
                            name="bookingType"
                        >{store.bookingTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                        </select>

                    </label>

                    <label>  Full Name
                        <input
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateForm.fullName}
                            name="fullName"
                        />
                    </label>

                    <label>  Contact
                        <input
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateForm.contact}
                            name="contact"
                        />
                    </label>

                    <label>  Device Type
                        <input
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateForm.deviceType}
                            name="deviceType"
                        />
                    </label>

                    <label>  Operating System
                        <select
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateForm.os}
                            name="os"
                        >{store.osTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                        </select>
                    </label>

                    <label>  Problem - Comments
                        <textarea
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateForm.problem}
                            name="problem"
                        />
                    </label>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 300,
                            width: 300,
                            border: '1px solid grey',
                            borderRadius: '5px',
                            padding: '20px',
                            gap: '20px',
                        }}
                    >
                        <DatePicker
                            label="Weekdays only"
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateForm.bookingDate}
                            name="bookingDate"
                            renderInput={(params) => <TextField {...params} />}
                            shouldDisableDate={(day) => {
                                return day.getDay() === 0;
                            }}
                        />

                        <TimePicker
                            ampm={false}
                            openTo="hours"
                            onChange={store.handleUpdateFieldChange}
                            value={store.updateForm.bookingTime}
                            name="bookingTime"
                            renderInput={(params) => <TextField {...params} />}
                            minutesStep={30}
                        />

                    </Box>

                    <button type="submit">Update booking</button>
                </form>
            </LocalizationProvider>
        </div>

    );
}
