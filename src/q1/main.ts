interface ElfCarry {
  value: number;
}

export const q1a = (input: string): number => {
  const elves: ElfCarry[] = [];

  const elfdata = input.split("\n\n");
  elfdata.forEach((elf) => {
    const lines = elf.split("\n");
    const sum = lines.reduce((acc, line) => {
      return acc + parseInt(line);
    }, 0);
    elves.push({ value: sum });
  });

  // find max value
  let max = elves[0].value;

  elves.forEach((elf) => {
    if (elf.value > max) {
      max = elf.value;
    }
  });

  return max;
};

export const q1b = (input: string): number => {
  const elves: ElfCarry[] = [];

  const elfdata = input.split("\n\n");
  elfdata.forEach((elf) => {
    const lines = elf.split("\n");
    const sum = lines.reduce((acc, line) => {
      return acc + parseInt(line);
    }, 0);
    elves.push({ value: sum });
  });

  // find top 3 max values
  const maxes = elves.sort((a, b) => b.value - a.value).slice(0, 3);

  // return sum of top 3 max values
  return maxes.reduce((acc, max) => acc + max.value, 0);
};
