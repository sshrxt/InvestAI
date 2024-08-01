import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-400 flex justify-center items-center flex-col  overflow-clip mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
