import { generate } from "random-words";
import fs from "fs";
import path from "path";

generate({ minLength: 5, maxLength: 5 });
const words: Record<string, string> = {};

let today = new Date();
const dayInMilliseconds = 86400000;

for (let i = 0; i < 365; i++) {
  const currentDate = today.toJSON().split("T")[0];
  words[currentDate] = generate({
    minLength: 5,
    maxLength: 5,
    join: "",
    exactly: 1,
  });

  today = new Date(today.getTime() + dayInMilliseconds);
}

const rootDir = path.resolve(__dirname, "..");
const filePath = path.resolve(rootDir, "app/data.ts");

fs.writeFileSync(
  filePath,
  `export const wordsByDate: Record<string, string> = ${JSON.stringify(
    words,
    null,
    2
  )}`
);
