const getRemainingDateTime = (date: string) => {
  const today = new Date();
  const end = new Date(date);
  const difference = end.getTime() - today.getTime();
  const days = Math.round(difference / (1000 * 3600 * 24));
  const hours = Math.round(difference / (1000 * 3600 * 24 * 60));
  const minutes = Math.round(difference / (1000 * 3600 * 24 * 60 * 60));
  const seconds = Math.round(difference / (1000 * 3600 * 24 * 60 * 60 * 100));
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

export default getRemainingDateTime;
