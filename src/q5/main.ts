const moveSlicesBetweenStacks = (
  stacks: string[][],
  fromStackIndex: number,
  toStackIndex: number,
  countToMove: number
): string[][] => {
  // first remove slice from fromStack
  const fromStack = stacks[fromStackIndex];
  const removedSlices = fromStack.splice(fromStack.length - countToMove);

  // then add slice to toStack
  const toStack = stacks[toStackIndex];
  toStack.push(...removedSlices);

  return stacks;
};

const parseIntoStacks = (input: string): string[][] => {
  const lines = input.split("\n");
  const stacks: string[][] = [];
  const countColumns = Number(lines[lines.length - 1]);

  const stackPortionIndex = lines.findIndex((line) => line === "") - 1;

  for (let i = 0; i < countColumns; i++) {
    stacks.push([]);
  }

  const stacksRawText = lines.slice(0, stackPortionIndex);
  for (let i = stacksRawText.length - 1; i >= 0; i--) {
    const stack = stacksRawText[i];
    for (let j = 0; j < stack.length; j += 4) {
      if (stack[j + 1] === " ") continue;
      stacks[j / 4].push(stack[j + 1]);
    }
  }
  return stacks;
};

export const q5a = (input: string): string => {
  const lines = input.split("\n");
  let str = "";
  let stacks = parseIntoStacks(input);
  console.log(stacks);

  const stackPortionIndex = lines.findIndex((line) => line === "") + 1;

  const moves = lines.slice(stackPortionIndex, lines.length - 1);

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    const tokens = move.split(" ");
    const fromStackIndex = Number(tokens[3]) - 1;
    const toStackIndex = Number(tokens[5]) - 1;
    const countToMove = Number(tokens[1]);

    for (let index = 0; index < countToMove; index++) {
      stacks = moveSlicesBetweenStacks(stacks, fromStackIndex, toStackIndex, 1);
    }
  }

  // str += top element of each stack
  stacks.forEach((stack) => {
    str += stack[stack.length - 1];
    // console.log(stack);
  });

  return str;
};

export const q5b = (input: string): string => {
  const lines = input.split("\n");
  let str = "";

  const stacks = parseIntoStacks(input);

  const stackPortionIndex = lines.findIndex((line) => line === "") + 1;

  const moves = lines.slice(stackPortionIndex, lines.length - 1);

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    const tokens = move.split(" ");
    const fromStackIndex = Number(tokens[3]) - 1;
    const toStackIndex = Number(tokens[5]) - 1;
    const countToMove = Number(tokens[1]);

    moveSlicesBetweenStacks(stacks, fromStackIndex, toStackIndex, countToMove);
  }

  // str += top element of each stack
  stacks.forEach((stack) => {
    str += stack[stack.length - 1];
    // console.log(stack);
  });

  return str;
};
