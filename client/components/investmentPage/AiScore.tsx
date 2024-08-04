import React from "react";
import { CircularProgress, Card, CardBody, CardFooter, Chip } from "@nextui-org/react";
import { useEffect, useState } from "react";

const AiScore = ({aiQuery}: {aiQuery: string | null}) => {
  const [score, setScore] = useState<any>(50);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchAiScore = async () => {
      setLoading(true);
      if(aiQuery) {
        try {
          const response = await fetch(
            `http://localhost:8000/aiScore?search=${encodeURI(aiQuery)}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          console.log(extractNumberFromScoreString(data.data.generated_text))
          setScore(extractNumberFromScoreString(data.data.generated_text));
        } catch (err) {
          console.log(err)
        } finally {
          setLoading(false);
        }
      }
    }

    if (aiQuery) {
      setLoading(true);
      fetchAiScore();
    }
  }, [aiQuery])

  return (
    <Card className="h-full w-full border-none bg-gradient-to-br from-black-500 to-black-500 rounded-none">
      <CardBody className="flex justify-center items-center pb-0">
        <CircularProgress
          aria-label="AI Score Progress"
          classNames={{
            svg: "w-48 h-48 drop-shadow-md", // Increase size of the circle
            indicator: "stroke-green",
            track: "stroke-white/10",
            value: "text-5xl font-semibold text-white", // Increase font size of the number
          }}
          value={score}
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

function extractNumberFromScoreString(str: string) {
  // Use regular expression to find the number following "Score: "
  const regex = /Score:\s*(\d+(\.\d+)?)/;
  const match = str.match(regex);

  // If a match is found, return the number part, otherwise return null
  return match ? parseFloat(match[1]) : null;
}

export default AiScore;
