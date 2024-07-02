// pages/index.tsx
// This will serve as the homepage for the application
// It will display a greeting message and today's date
// It will also display a button that will navigate to the calendar page
// The page uses React hooks to manage state and perform side effects
// The page is exported as a default component to be used in the application
// The page can be accessed at the / route

import React, { useState, useEffect } from 'react';
import FormattedDate from '../components/FormattedDate';
import Greeting from '../components/Greeting';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    setToday(new Date());
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <Greeting name="ProBooker User" />
        <h1 className="text-3xl font-bold mb-4 text-center">
          Welcome to ProBooker
        </h1>
        <p className="mb-4 text-center">
          Today&apos;s date is:{' '}
          {today ? <FormattedDate date={today} /> : 'Loading...'}
        </p>
        <Button />
      </div>
    </div>
  );
};

export default HomePage;
