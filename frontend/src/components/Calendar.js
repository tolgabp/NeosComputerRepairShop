import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';
import dateStore from "../stores/dateStore";

export default function Calendar() {
  const { dateValue, setDateValue, timeValue, setTimeValue } = dateStore();

  const handleTimeChange = (newValue) => {
    // time 9:00 - 17:00
    if (newValue.getMinutes() % 30 === 0 && newValue.getHours() >= 9 && newValue.getHours() < 17) {
      setTimeValue(newValue);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
          value={dateValue}
          onChange={(newValue) => {
            setDateValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          shouldDisableDate={(day) => {
            // Disable Sundays
            return day.getDay() === 0;
          }}
        />
        <TimePicker
          ampm={false}
          openTo="hours"
          value={timeValue}
          onChange={handleTimeChange}
          renderInput={(params) => <TextField {...params} />}
          minutesStep={30}
        />
       
      </Box>
    </LocalizationProvider>
  );
}
