import Hero from "@/components/Hero";
import InvestmentPage from "@/components/investmentPage/InvestmentPage";
import Sample from "@/components/investmentPage/Sample";
import { ChakraProvider } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className="relative bg-black-400 flex justify-center items-center flex-col  overflow-clip mx-auto sm:px-10">
      <div className="max-w-[95vw] w-full">
        <Hero />
        {/* <ChakraProvider> */}
          <InvestmentPage />
        {/* </ChakraProvider> */}
      </div>
    </main>
  );
}
