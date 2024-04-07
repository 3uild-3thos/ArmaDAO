const timeAgo = (dateString: string): string => {
  const inputDate = new Date(dateString);
  const now = new Date();
  const yearsDifference = now.getFullYear() - inputDate.getFullYear();
  const monthsDifference = now.getMonth() - inputDate.getMonth();
  const daysDifference = now.getDate() - inputDate.getDate();

  let differenceInMonths = yearsDifference * 12 + monthsDifference;
  if (daysDifference < 0) {
    differenceInMonths--;
  }
  const differenceInDays = Math.floor(
    (now.getTime() - inputDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const differenceInHours = Math.floor(
    (now.getTime() - inputDate.getTime()) / (1000 * 60 * 60)
  );
  const differenceInMinutes = Math.floor(
    (now.getTime() - inputDate.getTime()) / (1000 * 60)
  );

  // Helper function for pluralization
  function pluralize(time: number, unit: string): string {
    return time === 1 ? `${time} ${unit} ago` : `${time} ${unit}s ago`;
  }

  if (differenceInMinutes < 60) {
    return pluralize(differenceInMinutes, "minute");
  } else if (differenceInHours < 24) {
    return pluralize(differenceInHours, "hour");
  } else if (differenceInDays < 7) {
    return pluralize(differenceInDays, "day");
  } else if (differenceInDays < 30) {
    return pluralize(Math.floor(differenceInDays / 7), "week");
  } else if (differenceInMonths < 12) {
    return pluralize(differenceInMonths, "month");
  } else {
    const years = Math.floor(differenceInMonths / 12);
    return pluralize(years, "year");
  }
};

export default timeAgo;
