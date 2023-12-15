import GeneratedWord from "./components/GeneratedWord";

export default function Home() {
  const today = new Date();

  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  const currentDate = month + "/" + date + "/" + year;

  return (
    <main className="h-screen flex flex-col items-center max-w-[500px] ml-auto mr-auto mt-10 md:mt-20">
      <h1 className="font-bold text-lg">Wordle word generator</h1>
      <h2>For today&apos;s date: {currentDate}</h2>
      <GeneratedWord />
    </main>
  );
}
