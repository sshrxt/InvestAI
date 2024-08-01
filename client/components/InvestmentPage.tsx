import React from "react";

const InvestmentPage = () => {
  return (
    <section className="h-screen grid grid-cols-[1fr_2fr_.5fr] lg:grid-cols-[1fr_2fr_.5fr] md:grid-cols-[1fr_2fr] gap-4 p-4 rounded-xl">
      <div className="bg-black-500 p-4 lg:col-span-1 md:col-span-1 sm:col-span-1 rounded-xl">
        Item 1
      </div>
      <div className="bg-black-500 p-4 lg:col-span-1 md:col-span-2 sm:col-span-2 rounded-xl">Item 2</div>
      <div className="grid lg:grid-rows-2 grid-cols-2 lg:grid-cols-1 gap-4 col-span-3 lg:col-span-1">
        <div className="bg-black-500 p-4 rounded-xl">Item 4</div>
        <div className="bg-black-500 p-4 rounded-xl">Item 5</div>
      </div>

      <div className="col-span-3 grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4">
        <div className="bg-black-500 p-4 rounded-xl">Item 4</div>
        <div className="bg-black-500 p-4 rounded-xl">Item 5</div>
      </div>
    </section>
  );
};

export default InvestmentPage;
