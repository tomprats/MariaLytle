export const displayDate = (string) => {
  const date = new Date(string);

  return date.toLocaleDateString();
};
