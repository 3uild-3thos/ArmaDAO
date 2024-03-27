const getPercentage = (current: number, goal: number) => {
  return Math.round((current * 100) / goal);
};

export default getPercentage;
