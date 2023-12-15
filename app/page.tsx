import GeneratedWord from "./components/GeneratedWord";

async function getData() {
  const wordsByDate = (await import("./data")).default;
  const today = new Date();
  const currentDate = today.toJSON().split("T")[0];
  const todaysWord = wordsByDate[currentDate];
  return todaysWord;
}

export default async function Home() {
  const todaysWord = await getData();
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = date + "/" + month + "/" + year;

  return (
    <main className="h-screen flex flex-col items-center max-w-[500px] ml-auto mr-auto mt-10 md:mt-20">
      <h1 className="font-bold text-lg">Wordle word generator</h1>
      <h2>For today&apos;s date: {currentDate}</h2>
      <GeneratedWord word={todaysWord} />
    </main>
  );
}
