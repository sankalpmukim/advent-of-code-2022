export const q4a = (input: string): number => {
  const lines = input.split("\n");
  let sum = 0;
  for (const line of lines) {
    const [range1, range2] = line.split(",");
    const [min1, max1] = range1.split("-").map(Number);
    const [min2, max2] = range2.split("-").map(Number);
    // check if the shorter range is inside the longer range
    if ((min1 >= min2 && max1 <= max2) || (min2 >= min1 && max2 <= max1)) {
      sum += 1;
    }
  }
  return sum;
};

export const q4b = (input: string): number => {
  const lines = input.split("\n");
  let sum = 0;
  for (const line of lines) {
    const [range1, range2] = line.split(",");
    const [min1, max1] = range1.split("-").map(Number);
    const [min2, max2] = range2.split("-").map(Number);
    // add 1 to sum if there is any overlap between the two ranges
    if (min1 <= max2 && min2 <= max1) {
      sum += 1;
    }
  }
  return sum;
};
