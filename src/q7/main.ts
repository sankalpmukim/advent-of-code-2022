interface Folder {
  [folderName: string]: number;
}

class Stack<T> {
  private data: T[] = [];

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
      if (typeof folderData[currentFolder] === "undefined") {
        folderData[currentFolder] = 0;
      }
    } else if (line.startsWith("$ ls")) {
      i++;
      while (i < lines.length && !lines[i].startsWith("$")) {
        if (lines[i].startsWith("dir")) {
          i++;
          continue;
        } else {
          folderData[folderStack.peek()] += Number(lines[i].split(" ")[0]);
          i++;
        }
      }
      i--;
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
          folderData[folderStack2.peek()] += folderData[lines[i].split(" ")[1]];
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

  return lines.length;
};

export const q7b = (input: string): number => {
  const lines = input.split("\n");

  return lines.length;
};
