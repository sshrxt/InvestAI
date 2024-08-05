"use client";
import React, { useState, useEffect } from "react";
import { mockNewsData } from "@/data";
import NewsCard from "./NewsCard";
import { AiGenerateText } from "../ui/AiGenerateText";
import { CircularProgress } from "@nextui-org/react";
import { TextGenerateEffect } from "../ui/TextGenerate";

interface Article {
  title: string;
  url: string;
  urlToImage: string;
  description: string;
}

const NewsBox = ({ investmentType }: { investmentType: string }) => {
  const [loading, setLoading] = useState(false);
  const [newsArticles, setNewsArticles] = useState<Article[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [hasDisplayedTitle, setHasDisplayedTitle] = useState(true) 


  useEffect(() => {
    setIsClient(true);
    const fetchNews = async () => {
      setLoading(true);
      setHasDisplayedTitle(false)
      try {
        const response = await fetch(
          `http://localhost:8000/news?search=${encodeURI(investmentType)}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setNewsArticles(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if(investmentType !== "") {
      fetchNews();
    }
  }, [investmentType]);

  return (
    <div className="p-2 flex flex-col flex-wrap gap-5 items-center justify-center">
      {hasDisplayedTitle ? (
        <div className="heading font-medium text-xl">
          <AiGenerateText words={`Enter type of investment for recent news!`} />
        </div>
      ) : (
        <>
          <div className="heading font-medium text-xl">
            <TextGenerateEffect words={`Showing results: ${investmentType}`}/>
          </div>
          {loading ? (
            <CircularProgress size="lg" aria-label="Loading..." />
          ) : (
            <>
              {newsArticles.length > 0 ? ( newsArticles.map((article: Article) => (
                <div key={article.url} className="mb-11">
                  <NewsCard
                    title={article.title}
                    url={article.url}
                    description={article.description}
                    urlToImage={article.urlToImage}
                  />
                </div>
              )) ) : (
                <div className="heading text-xl font-medium">No news found</div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default NewsBox;
