const cleanUpInput = (string) => {
  const clean = string.split(',');
  return clean.map(chunk => {
    return parseInt(chunk);
  });
};