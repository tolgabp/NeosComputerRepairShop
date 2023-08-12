import bookingsStore from "../stores/bookingsStore";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers';


export default function CreateForm() {
    const store = bookingsStore();

    if (store.updateForm._id) return <></>;

    return (
        <div>
            <h2>Create Booking</h2>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <form onSubmit={store.createBooking}>

                    <label>Booking Type
                        <select
                            onChange={store.updateCreateFormField}
                            value={store.createForm.bookingType}
                            name="bookingType"
                        >
                            <option value="">Select a Booking Type</option>
                            {store.bookingTypes.map((type, index) => (
                                <option 
                                key={index} 
                                value={type}>{type}</option>
                            ))}
                        </select>
                    </label>
                    <label>  Full Name
                        <input
                            onChange={store.updateCreateFormField}
                            value={store.createForm.fullName}
                            name="fullName"
                        />
                    </label>
                    <label>  Contact
                        <input
                            onChange={store.updateCreateFormField}
                            value={store.createForm.contact}
                            name="contact"
                        />
                    </label>

                    <label>  Device Type
                        <input
                            onChange={store.updateCreateFormField}
                            value={store.createForm.deviceType}
                            name="deviceType"
                        />
                    </label>

                    <label>  Operating System
                        <select
                            onChange={store.updateCreateFormField}
                            value={store.createForm.os}
                            name="os"
                        >
                            <option value="">Select a Operating System</option>
                            {store.osTypes.map((type, index) => (
                                <option key={index} value={type}>{type}</option>
                            ))}
                        </select>
                    </label>

                    <label>  Problem - Comments
                        <textarea
                            onChange={store.updateCreateFormField}
                            value={store.createForm.problem}
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
                            onChange={store.updateCreateFormDate}
                            value={store.createForm.bookingDate}
                            name="bookingDate"
                            renderInput={(params) => <TextField {...params} />}
                            shouldDisableDate={(day) => {
                                return day.getDay() === 0;
                            }}
                        />

                        <TimePicker
                            ampm={false}
                            openTo="hours"
                            onChange={store.updateCreateFormTime}
                            value={store.createForm.bookingTime}
                            name="bookingTime"
                            renderInput={(params) => <TextField {...params} />}
                            minutesStep={30}
                        />

                    </Box>
                    <button type="submit">Create booking</button>
                </form>
            </LocalizationProvider>
        </div>
    )
}
