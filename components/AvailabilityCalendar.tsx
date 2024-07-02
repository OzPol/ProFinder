// components/AvailabilityCalendar.tsx

import React, { useState } from 'react';
import Calendar, { CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

// Define a DateRange type
type DateRange = [Date, Date];

const AvailabilityCalendar: React.FC = () => {
  const [date, setDate] = useState<Date | DateRange>(new Date());

  const onChange: CalendarProps['onChange'] = (newDate) => {
    if (newDate instanceof Date) {
      setDate(newDate);
    } else if (
      Array.isArray(newDate) &&
      newDate.every((value) => value instanceof Date)
    ) {
      setDate(newDate as DateRange);
    } else {
      setDate(new Date());
    }
    // TODO: Handle date selection (e.g., fetch availability or bookings)
    console.log('Selected date:', date);
    // TODO: Add code here to fetch availability or bookings based on the selected date
  };

  return (
    <div>
      <Calendar onChange={onChange} value={date} />
      <p>
        Selected date:{' '}
        {Array.isArray(date)
          ? date.map((d) => d.toDateString()).join(', ')
          : date.toDateString()}
      </p>
    </div>
  );
};

export default AvailabilityCalendar;
