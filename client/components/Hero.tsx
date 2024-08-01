"use client";

import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerate";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

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

import { Button } from "@/components/ui/button";
import { useState } from "react";

const Hero = () => {
  const [position, setPosition] = useState("Investing");

  const handleValueChange = (position: string) => {
    setPosition(position);
    console.log(position);
  };

  return (
    <div className="py-10 bg-black-400">
      <div className="flex flex-col sm:flex-row lg:flex-row sm:items-center items-center justify-between sm:justify-between lg:gap-10">

          <RoughNotation
            type="underline"
            key={position} // Force re-render on `position` change
            show={true}
            animationDelay={1000}
          >
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words={`${position} made Simple.`}
            />
          </RoughNotation>

        <div className="focus:outline-none mt-10 sm:mt-0 sm:w-[15%] min-w-[200px] flex items-center justify-end mr-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild >
              <button className="relative h-14 w-[50%] min-w-[275px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-0 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="focus:outline-none absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A5D6A7_0%,#66BB6A_50%,#A5D6A7_100%)]" />
                <span className="focus:outline-none inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-5 py-1 font-medium text-lg text-white backdrop-blur-3xl">
                  {position} Mode
                </span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[20rem] mt-4 text-lg bg-black-200">
              <DropdownMenuLabel className="text-[1.5rem] md:text-[2rem] lg:text-xl">
                Select Your Mode
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={position}
                onValueChange={setPosition}
                className="text-lg"
              >
                <DropdownMenuRadioItem
                  value="Investing"
                  className="text-[1.5rem] md:text-[2rem] lg:text-xl"
                >
                  Investment
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Stocks"
                  className="text-[1.5rem] md:text-[2rem] lg:text-xl"
                >
                  Stock
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Portfolios"
                  className="text-[1.5rem] md:text-[2rem] lg:text-xl"
                >
                  Personal Portfolio
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* <div className="flex justify-center relative mb-10 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-row justify-center">
            <RoughNotation
              type="underline"
              key={position} // Force re-render on `position` change
              show={true}
              animationDelay={1000}
            >
              <TextGenerateEffect
                className="text-center text-[40px] md:text-5xl lg:text-6xl"
                words={`${position} made Simple.`}
              />
            </RoughNotation>

            <div className="w-full h-full flex items-center justify-center mt-10">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="relative inline-flex h-14 w-[50%] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-0 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="focus:outline-none absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A5D6A7_0%,#66BB6A_50%,#A5D6A7_100%)]" />
                    <span className="focus:outline-none inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1  font-medium text-lg text-white backdrop-blur-3xl">
                      {position} Mode
                    </span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[20rem] mt-4 text-lg bg-black-200">
                  <DropdownMenuLabel className="text-[1.5rem] md:text-[2rem] lg:text-xl">
                    Select Your Mode
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup
                    value={position}
                    onValueChange={setPosition}
                    className="text-lg"
                  >
                    <DropdownMenuRadioItem
                      value="Investing"
                      className="text-[1.5rem] md:text-[2rem] lg:text-xl"
                    >
                      Investment
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem
                      value="Stocks"
                      className="text-[1.5rem] md:text-[2rem] lg:text-xl"
                    >
                      Stock
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem
                      value="Portfolios"
                      className="text-[1.5rem] md:text-[2rem] lg:text-xl"
                    >
                      Personal Portfolio
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
      </div> */}
    </div>
  );
};

export default Hero;
