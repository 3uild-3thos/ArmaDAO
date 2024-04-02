export const slotsToTime = (slots: number) => {
  // Convert the hours to slots first, any remainder is minutes
  const hours = Math.floor(slots / (60 * 60 * 2));
  const minutes = Math.floor((slots % (60 * 60 * 2)) / (60 * 2));

  return { hours, minutes };
};
