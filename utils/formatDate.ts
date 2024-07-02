// utils/formatDate.ts
// Utility Function (formatDate.ts)
// This function can be placed in the /utils directory and will be useful for formatting dates across the application.// utils/formatDate.ts

import { format } from 'date-fns';

export const formatDate = (
  date: Date,
  dateFormat: string = 'yyyy-MM-dd'
): string => {
  return format(date, dateFormat);
};
