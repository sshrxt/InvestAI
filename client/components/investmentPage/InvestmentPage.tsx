import Graph from "./Graph";
import {SignupFormDemo} from './Form'

const InvestmentPage = () => {
  return (
    <div className="p-2">
      <div className="h-screen grid grid-cols-9 grid-rows-9 gap-3 overflow-hidden">
        <div className="bg-black-500 col-span-3 row-start-1 row-end-6"> <SignupFormDemo></SignupFormDemo></div>
        <div className="bg-black-500 col-span-5 row-start-1 row-end-6"> <Graph /> </div>
        <div className="bg-black-500 row-start-1 row-end-3"></div>
        <div className="bg-black-500 row-start-3 row-end-6"></div>
        <div className="bg-black-500 row-start-6 row-end-10 col-span-4"></div>
        <div className="bg-black-500 row-start-6 row-end-10 col-span-5"></div>
      </div>
    </div>
  );
};

export default InvestmentPage;
