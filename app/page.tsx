import GeneratedWord from "./components/GeneratedWord";
import wordsByDate from "./data";

export default async function Home() {
  const today = new Date();

  const currentDate = today.toJSON().split("T")[0];
  const todaysWord = wordsByDate[currentDate];

  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDateFormatted = date + "/" + month + "/" + year;

  return (
    <main className="h-screen flex flex-col items-center max-w-[500px] ml-auto mr-auto mt-10 md:mt-20 font-ibm px-5 text-center">
      <h1 className="font-bold text-lg mb-2 md:mb-4">
        Wordle starting word generator
      </h1>
      <h2>For today&apos;s date: {currentDateFormatted}</h2>
      <GeneratedWord word={todaysWord} />
    </main>
  );
}
