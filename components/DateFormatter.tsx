import { parseISO, format } from "date-fns";

type IDateFormatter = {
  dateString: string;
};

export const DateFormatter = ({ dateString }: IDateFormatter) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
};
