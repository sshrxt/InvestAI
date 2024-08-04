"use client";
import Graph from "./Graph";
import { Form } from "./Form";
import { useState, useEffect } from "react";
import { ReceiptPoundSterling } from "lucide-react";
import { chartData } from "@/data";
import AiSummary from "./AiSummary";
import AiScore from "./AiScore";

type FormDataType = {
  deposit: string;
  contribution: string;
  selectedFrequency: string;
  growthYears: string;
  rate: string;
  compound: string;
  investmentType?: string;
};

export type ConvertedDataType = {
  date: string;
  value: number;
};

const data: FormDataType = {
  deposit: "500",
  growthYears: "3",
  rate: "5",
  compound: "Monthly",
  contribution: "50",
  selectedFrequency: "Monthly"
};

const InvestmentPage = () => {
  const [formData, setFormData] = useState<FormDataType>();
  const [graphData, setGraphData] = useState<ConvertedDataType[]>(chartData);
  const [aiQuery, setAiQuery] = useState<string | null>(null);

  useEffect(() => {
    if (formData) {
      const converted = convertData(formData);
      setGraphData(converted);
      let contributionFrequency = formData.selectedFrequency === "Monthly" ? 12 : 1
      let contributions = ((parseFloat(formData.contribution) * contributionFrequency)) * parseFloat(formData.growthYears)
      let profit =
        calculateFutureValue(
          parseFloat(formData.deposit),
          parseFloat(formData.rate) / 100,
          getCompound(formData.compound),
          parseFloat(formData.growthYears),
          parseFloat(formData.contribution),
          formData.selectedFrequency === "Monthly" ? 12 : 1
        ) - parseFloat(formData.deposit) - contributions;
      let currAiQuery = `The investment type was ${formData?.investmentType}, intial deposit was ${formData?.deposit}, the rate of return is ${formData?.rate} which compounds ${formData?.compound} and is left for ${formData?.growthYears} years. The user contributes ${formData.contribution} dollars ${formData.selectedFrequency} into their investment. Over ${formData?.growthYears} years the total profit was ${profit} `;
      console.log(currAiQuery)
      setAiQuery(currAiQuery);
    }
  }, [formData]);

  return (
    <div className="p-2">
      <div className="h-screen grid grid-cols-9 grid-rows-9 gap-3 overflow-hidden">
        <div className="bg-black-500 col-span-3 row-start-1 row-end-6">
          {" "}
          <Form setFormData={setFormData} />
        </div>
        <div className="bg-black-500 col-span-5 row-start-1 row-end-6">
          {" "}
          <Graph formData={graphData} />{" "}
        </div>
        <div className="bg-black-500 row-start-1 row-end-3 flex items-center justify-center text-white">
          <AiScore aiQuery={aiQuery}/>
        </div>
        <div className="bg-black-500 row-start-3 row-end-6 flex justify-center">
          <div className="mt-5"></div>
        </div>
        <div className="bg-black-500 row-start-6 row-end-10 col-span-4"></div>
        <div className="bg-black-500 row-start-6 row-end-10 col-span-5 overflow-y-auto ">
          <AiSummary aiQuery={aiQuery} />
        </div>
      </div>
    </div>
  );
};

function convertData(formData: FormDataType): ConvertedDataType[] {
  const convertedData: ConvertedDataType[] = [];

  let rate = parseFloat(formData.rate);
  let deposit = parseFloat(formData.deposit);
  let compoundType = getCompound(formData.compound);
  let contribution = 0;
  if (formData.contribution) {
    contribution = parseFloat(formData.contribution);
  }
  let contributionRate = formData.selectedFrequency === "Monthly" ? 12 : 1;

  for (let i = 0; i <= parseFloat(formData.growthYears); i += 0.5) {
    let approxValue = calculateFutureValue(
      deposit,
      rate / 100,
      compoundType,
      i,
      contribution,
      contributionRate
    );

    let yDate: string;
    if (i === 0) {
      yDate = "Now";
    } else if (i === 0.5) {
      yDate = "6 Months";
    } else {
      yDate = `${i} Years`;
    }

    convertedData.push({ date: yDate, value: approxValue });
  }

  return convertedData;
}


function calculateFutureValue(
  deposit: number,
  annualRate: number,
  compound: number,
  years: number,
  contribution: number,
  contributionRate: number
) {
  const rate = annualRate / compound;
  const totalPeriods = years * compound;

  // Future value of the deposit
  const futureValuePrincipal = deposit * Math.pow(1 + rate, totalPeriods);

  if (contribution === 0) {
    return futureValuePrincipal;
  }

  // Calculate the future value of contributions
  const contributionPeriods = contributionRate * years;
  const adjustedContributionRate = annualRate / contributionRate;

  // Future value of periodic contributions
  const futureValueContributions =
    contribution * ((Math.pow(1 + adjustedContributionRate, contributionPeriods) - 1) /
    adjustedContributionRate);

  return futureValuePrincipal + futureValueContributions;
}



function getCompound(compound: string): number {
  if (compound === "Daily") {
    return 365;
  } else if (compound === "Monthly") {
    return 12;
  } else {
    return 1;
  }
}

export default InvestmentPage;
