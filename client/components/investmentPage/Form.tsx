"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

export const Form = ({setFormData}: {setFormData: any}) => {
  const [deposit, setDeposit] = useState<number | string>("");
  const [contribution, setContribution] = useState<number | string>("");
  const [selectedFrequency, setSelectedFrequency] = useState<string | null>(
    null
  );
  const [growthYears, setGrowthYears] = useState<number | string>("");
  const [rate, setRate] = useState<number | string>("");
  const [investmentType, setInvestmentType] = useState<number | string>("");
  const [compound, setCompound] = useState<string>("Monthly");


  const handleValueChange = (compound: string) => {
    setCompound(compound);
    console.log(compound);
  };

  

  const handleFrequencyClick = (frequency: string) => {
    setSelectedFrequency(frequency);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const formData = {
      deposit,
      contribution,
      selectedFrequency,
      growthYears,
      rate,
      compound,
      investmentType,
    };
    setFormData(formData)
    console.log('Form submitted with data:', formData);
  };


  const isSelected = (frequency: string) => selectedFrequency === frequency;

  return (
    <div className="p-4 md:p-8 mt-4 ">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to InvestAI
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Input your investment details below
      </p>

      <form className="my-8 flex flex-col gap-1" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="deposit">Initial deposit</Label>
          <Input
            id="deposit"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            placeholder="$5000"
            type="text"
            prefix="$"
            required
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="contribution">Contribution amount</Label>
          <Input
            id="contribution"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
            placeholder="$50"
            type="text"
          />
        </LabelInputContainer>
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="frequency">Contribution Frequency</Label>
          <div className="flex flex-row justify-between gap-3">
            <div
              onClick={() => handleFrequencyClick("Monthly")}
              className={`relative h-12 w-[50%] overflow-hidden rounded-lg p-[1px] cursor-pointer ${
                selectedFrequency === "Monthly" ? "ring-2 ring-green" : " "
              }`}
            >
              <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-zinc-800 px-5 py-1 text-lg text-white backdrop-blur-3xl">
                Monthly
              </span>
            </div>
            <div
              onClick={() => handleFrequencyClick("Annually")}
              className={`relative h-12 w-[50%] overflow-hidden rounded-lg p-[1px] cursor-pointer ${
                selectedFrequency === "Annually" ? "ring-2 ring-green" : ""
              }`}
            >
              <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-zinc-800 px-5 py-1 text-lg text-white backdrop-blur-3xl">
                Annually
              </span>
            </div>
          </div>
        </LabelInputContainer>
      </div>
      
      <LabelInputContainer className="mb-4">
        <Label htmlFor="growth">Years of Growth</Label>
        <div className="flex items-center">
          <div className="relative w-full">
            <Input
              id="growth"
              value={growthYears}
              onChange={(e) => setGrowthYears(e.target.value)}
              placeholder="5"
              type="number"
              min={1}
              max={50}
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-8 text-gray-400">
              Years
            </span>
          </div>
        </div>
      </LabelInputContainer>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="rate">Estimated rate of return</Label>
        <div className="flex items-center">
          <div className="relative w-full">
            <Input
              id="rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="0%"
              type="number"
              required
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-8 text-gray-400">
              %
            </span>
          </div>
        </div>
      </LabelInputContainer>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 gap-2">
        <LabelInputContainer>
          <Label htmlFor="type">Type of Investment</Label>
          <Input
            id="type"
            value={investmentType}
            onChange={(e) => setInvestmentType(e.target.value)}
            placeholder="Real Estate"
            type="text"
            required
          />
        </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="dropdown">Select Compound</Label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className=" flex flex-row items-center justify-between bg-zinc-800 rounded-lg h-[2.6rem] p-5">
              {compound}
              <IoIosArrowDropdown />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[25vw] mt-1 text-lg bg-black-200">
            <DropdownMenuLabel className="text-[1.5rem] md:text-[1rem] lg:text-xl">
              Select Your Mode
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={compound}
              onValueChange={setCompound}
              className="text-lg"
            >
              <DropdownMenuRadioItem
                value="Daily"
                className="text-[1.5rem] md:text-[1rem] lg:text-xl"
              >
                Daily
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="Monthly"
                className="text-[1.5rem] md:text-[1rem] lg:text-xl"
              >
                Monthly
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem
                value="Yearly"
                className="text-[1.5rem] md:text-[1rem] lg:text-xl"
              >
                Yearly
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </LabelInputContainer>
      </div>
      <button
        className="bg-gradient-to-br mt-2 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        Submit &rarr;
        <BottomGradient />
      </button>
    </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-green to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
