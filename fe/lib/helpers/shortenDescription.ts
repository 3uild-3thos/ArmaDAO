const shortenDescription = (
  description: string,
  characters: number
): string => {
  return description.slice(0, characters);
};

export default shortenDescription;
