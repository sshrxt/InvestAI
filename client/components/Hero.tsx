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
    <div className="py-10">
      <div className="flex justify-center relative mb-10 z-10">
        <RoughNotationGroup show={true}>
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <RoughNotation
              type="underline"
              key={position} // Force re-render on `position` change
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
                    <span className="focus:outline-none inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-lg text-white backdrop-blur-3xl">
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
        </RoughNotationGroup>
      </div>
    </div>
  );
};

export default Hero;
