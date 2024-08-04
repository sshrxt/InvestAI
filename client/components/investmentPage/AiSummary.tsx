import React, { useState, useEffect } from "react";
import { AiGenerateText } from "../ui/AiGenerateText";

const AiSummary = ({ aiQuery }: { aiQuery: string | null }) => {
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasDisplayedTitle, setHasDisplayedTitle] = useState<boolean>(false);

  const title =
    "Enter Investment details for Personalized AI Financial Insights!";

  useEffect(() => {
    const fetchAiInsight = async () => {
      setLoading(true);
      setError(null);

      if (aiQuery) {
        try {
          const response = await fetch(
            `http://localhost:8000/aiSummary?search=${encodeURI(aiQuery)}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const data = await response.json();
          setAiInsight(data.data.generated_text);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unexpected error occurred");
          }
        } finally {
          setLoading(false);
        }
      }
    };

    if (aiQuery) {
      setLoading(true);
      fetchAiInsight();
      setHasDisplayedTitle(true);
    }
  }, [aiQuery]);

  return (
    <div className="flex flex-col items-center justify-start h-full w-[90%] mx-auto p-6 lg:text-xl">
      {!hasDisplayedTitle ? (
        <div className="heading font-medium">
          <AiGenerateText words={title} />
        </div>
      ) : loading ? (
        <div className="heading">Loading...</div>
      ) : aiInsight ? (
        <AiGenerateText words={aiInsight} />
      ) : (
        <div className="heading">No insights available.</div>
      )}
    </div>
  );
};

export default AiSummary;
