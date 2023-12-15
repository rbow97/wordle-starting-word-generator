"use client";

import { useState } from "react";
import schedule, { Job } from "node-schedule";
import { generate } from "random-words";

export default function GeneratedWord() {
  const [word, setWord] = useState<string[]>([""]);

  schedule.scheduleJob("* * * * *", function () {
    setWord(generate({ minLength: 5, maxLength: 5 }));
  });

  return (
    <p>
      Today&apos;s word is <strong>{word}</strong>
    </p>
  );
}
