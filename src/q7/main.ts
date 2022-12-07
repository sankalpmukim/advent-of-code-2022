interface Folder {
  [folderName: string]: number;
}

class Stack<T> {
  readonly data: T[] = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.pop();
  }

  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }
}

export const q7a = (input: string) => {
  const lines = input.split("\n");

  const folderData: Folder = {};
  const folderStack = new Stack<string>();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("$ cd")) {
      const currentFolder = line.split(" ")[2];
      console.log(`currentFolder`, currentFolder);
      if (currentFolder === "..") {
        folderStack.pop();
        continue;
      }
      folderStack.push(currentFolder);
      folderData[currentFolder] = 0;
    } else if (line.startsWith("$ ls")) {
      i++;
      while (i < lines.length && !lines[i].startsWith("$")) {
        if (!lines[i].startsWith("dir")) {
          folderData[folderStack.peek()] += Number(lines[i].split(" ")[0]);
        }
        i++;
      }
      i--;
    } else {
      console.log(`line`, line);
    }
  }

  console.log(folderData);

  // new folder stack
  const folderStack2 = new Stack<string>();

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("$ cd")) {
      const currentFolder = line.split(" ")[2];
      console.log(`currentFolder2`, currentFolder);
      if (currentFolder === "..") {
        folderStack2.pop();
        continue;
      }
      folderStack2.push(currentFolder);
    } else if (line.startsWith("$ ls")) {
      i++;
      while (i < lines.length && !lines[i].startsWith("$")) {
        if (lines[i].startsWith("dir")) {
          // iterate over folderStack2, add folderData to each folder
          let folderStack2Copy = folderStack2.data.slice();
          while (folderStack2Copy.length > 0) {
            const folder = folderStack2Copy.pop();
            if (folder) {
              folderData[folder] += folderData[lines[i].split(" ")[1]];
            }
          }

          i++;
        } else {
          i++;
          continue;
        }
      }
      i--;
    }
  }
  console.log(folderData);

  // iterate over all the values of folderData and find the sum of all the values that are <= 100000
  let sum = 0;
  for (const key in folderData) {
    if (folderData[key] <= 100000) {
      sum += folderData[key];
    }
  }

  return sum;
};

export const q7b = (input: string): number => {
  const lines = input.split("\n");

  return lines.length;
};
