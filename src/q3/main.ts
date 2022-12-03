const alphabetString = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;

const getPriority = (char: string): number => {
  // get index + 1
  return alphabetString.indexOf(char) + 1;
};

export const q3a = (input: string): number => {
  const lines = input.split("\n");
  let sum = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // split the string into two equal parts
    const [left, right] = [
      line.slice(0, line.length / 2),
      line.slice(line.length / 2),
    ];
    // get the common characters between the two parts
    const commonChars = left.split("").filter((char) => right.includes(char));
    // get the priority of the common characters
    const priorities = commonChars.map((char) => getPriority(char));
    // get the sum of the priorities
    sum += priorities[0];
  }
  return sum;
};

export const q3b = (input: string): number => {
  const lines = input.split("\n");

  let sum = 0;

  //   for each 3 lines
  for (let i = 0; i < lines.length; i += 3) {
    const line1 = lines[i];
    const line2 = lines[i + 1];
    const line3 = lines[i + 2];
    // find the common characters between the 3 lines
    const commonChars = line1
      .split("")
      .filter((char) => line2.includes(char) && line3.includes(char));

    // console.log("commonChars", commonChars);
    const theCommonChar = commonChars[0];

    sum += getPriority(theCommonChar);
  }

  return sum;
};
