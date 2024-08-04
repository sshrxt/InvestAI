import React from "react";
import { CircularProgress, Card, CardBody, CardFooter, Chip } from "@nextui-org/react";

const AiScore = ({aiQuery}: {aiQuery: string | null}) => {

  return (
    <Card className="h-full w-full border-none bg-gradient-to-br from-black-500 to-black-500 rounded-none">
      <CardBody className="flex justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-48 h-48 drop-shadow-md", // Increase size of the circle
            indicator: "stroke-green",
            track: "stroke-white/10",
            value: "text-5xl font-semibold text-white", // Increase font size of the number
          }}
          value={50}
          formatOptions={{ style: "decimal" }} // Ensure this only formats the number
          strokeWidth={2} // Increase stroke width
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="flex justify-center items-center pt-0">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-base font-semibold",
          }}
          variant="bordered"
        >
          InvestAI Score
        </Chip>
      </CardFooter>
    </Card>
  );
};

export default AiScore;
