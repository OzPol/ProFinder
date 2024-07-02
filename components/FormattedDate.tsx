// components/FormattedDate.tsx
import React from 'react';

interface FormattedDateProps {
  date: Date;
}

const FormattedDate: React.FC<FormattedDateProps> = ({ date }) => {
  return <span>{date.toDateString()}</span>;
};

export default FormattedDate;
