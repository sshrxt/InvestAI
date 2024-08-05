import React from "react";
import Stat from "../ui/Stat";

const GraphSummary = ({profit, profitRate, totalDeposit, finalValue}: {profit: number, profitRate: number, totalDeposit: number, finalValue:number}) => {

    const roundedProfit = profit.toFixed(2);
    const roundedProfitRate = (profitRate * 100).toFixed(2);
    const roundedDeposit = totalDeposit.toFixed(2);
    const roundedFinalValue = finalValue.toFixed(2)

  return (
    <div className="mt-5 flex flex-col gap-5 justify-start">
      <Stat title="Total Deposit" description={`$${roundedDeposit}`} percent={0} />
      <Stat title="Final Value" description={`$${roundedFinalValue}`} percent={parseFloat(roundedProfitRate)} />
      <Stat title="Profit" description={`$${roundedProfit}`} percent={parseFloat(roundedProfitRate)} />
    </div>
  );
};

export default GraphSummary;
