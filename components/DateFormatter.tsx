import React from 'react';
import { parseISO, format } from 'date-fns';

type IDateFormatter = {
  dateString: string;
  className?: string;
};

export const DateFormatter = ({ dateString, className }: IDateFormatter) => {
  const date = parseISO(dateString);
  return (
    <time className={className} dateTime={dateString}>
      {format(date, 'LLLL	d, yyyy')}
    </time>
  );
};
