"use client";
import Graph from "./Graph";
import { Form } from "./Form";
import { useState, useEffect } from "react";
import { ReceiptPoundSterling } from "lucide-react";
import { chartData } from "@/data";

type FormDataType = {
  deposit: string;
  contribution?: string;
  selectedFrequency?: string;
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
  deposit: "200",
  growthYears: "3",
  rate: "5",
  compound: "Monthly",
};

const InvestmentPage = () => {
  const [formData, setFormData] = useState<FormDataType>();
  const [graphData, setGraphData] = useState<ConvertedDataType[]>(chartData);

  useEffect(() => {
    if (formData) {
      const converted = convertData(formData);
      setGraphData(converted);
      let profit = calculateFutureValue(parseFloat(formData.deposit), parseFloat(formData.rate) / 100, getCompound(formData.compound) ,parseFloat(formData.growthYears)) - parseFloat(formData.deposit)
      let aiQuery = `I am about to provide you with an invesmtent and its details including what type of investment it is. Please give me a response that explains whether this investment is good considering the investment type the user declares and other stuff like total profit and etc. The investment type was ${formData?.investmentType}, intial deposit was ${formData?.deposit}, the rate of return is ${formData?.rate} which compounds ${formData?.compound} and is left for ${formData?.growthYears} years. Over ${formData?.growthYears} years the total profit was ${profit} `;
      console.log(aiQuery);
    }
  }, [formData]);

  return (
    <div className="p-2">
      <div className="h-screen grid grid-cols-9 grid-rows-9 gap-3 overflow-hidden">
        <div className="bg-black-200 col-span-3 row-start-1 row-end-6">
          {" "}
          <Form setFormData={setFormData} />
        </div>
        <div className="bg-black-200 col-span-5 row-start-1 row-end-6">
          {" "}
          <Graph formData={graphData} />{" "}
        </div>
        <div className="bg-black-200 row-start-1 row-end-3 flex items-center justify-center text-white"></div>
        <div className="bg-black-200 row-start-3 row-end-6 flex justify-center">
          <div className="mt-5"></div>
        </div>
        <div className="bg-black-200 row-start-6 row-end-10 col-span-4"></div>
        <div className="bg-black-200 row-start-6 row-end-10 col-span-5"></div>
      </div>
    </div>
  );
};

function convertData(formData: FormDataType): ConvertedDataType[] {
  const convertedData: ConvertedDataType[] = [];

  let rate = parseFloat(formData.rate);
  let deposit = parseFloat(formData.deposit);
  let compoundType = getCompound(formData.compound);

  for (let i = 0; i <= parseFloat(formData.growthYears); i += 0.5) {
    let approxValue = calculateFutureValue(
      deposit,
      rate / 100,
      compoundType,
      i
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
  years: number
) {
  const monthlyRate = annualRate / compound;
  const totalPeriods = years * compound;
  const futureValuePrincipal =
    deposit * Math.pow(1 + monthlyRate, totalPeriods);
  return futureValuePrincipal;
}


function getCompound(compound: string): number {
  if (compound === "Daily") {
    return 30;
  } else if (compound === "Monthly") {
    return 12;
  } else {
    return 1;
  }
}

export default InvestmentPage;
