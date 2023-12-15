"use client";

export default function GeneratedWord({ word }: { word: string }): JSX.Element {
  const arrayOfChars = word.split("");

  return (
    <div className="mt-2 md:mt-4 flex flex-col gap-1 md:gap-2 justify-center items-center">
      <p>Today&apos;s word is: </p>
      <p className="flex flex-wrap justify-start gap-2">
        {arrayOfChars.map((char) => (
          <strong
            key={`index-${char}`}
            className="flex items-center justify-center border-2 border-slate-300 p-2 h-10 w-10"
          >
            {char.toUpperCase()}
          </strong>
        ))}
      </p>
    </div>
  );
}
