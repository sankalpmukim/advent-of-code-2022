export const q6a = (input: string): number => {
  // convert string to array
  const chars = input.split("");

  // find index of first 4 unique different characters
  for (let i = 0; i < chars.length - 3; i++) {
    const a = chars[i];
    const b = chars[i + 1];
    const c = chars[i + 2];
    const d = chars[i + 3];
    if (a !== b && a !== c && a !== d && b !== c && b !== d && c !== d) {
      return i + 4;
    }
  }
};

export const q6b = (input: string): number => {
  // convert string to array
  const chars = input.split("");

  // find index of first 14 unique different characters using sets
  for (let i = 0; i < chars.length - 13; i++) {
    const set = new Set<string>();
    for (let j = 0; j < 14; j++) {
      set.add(chars[i + j]);
    }
    if (set.size === 14) {
      return i + 14;
    }
  }
  return -1;
};
