// pages/calendar.tsx
import React from 'react';
import AvailabilityCalendar from '../components/AvailabilityCalendar';

const CalendarPage: React.FC = () => {
  return (
    <div>
      <h1>Service Provider Availability</h1>
      <AvailabilityCalendar />
    </div>
  );
};

export default CalendarPage;
