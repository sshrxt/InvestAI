import React from "react";
import { PinContainer } from "../ui/3d-pin";

const NewsCard = ({
  title,
  description,
  url,
  urlToImage,
}: {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
}) => {
  return (
    <div className="flex items-center justify-center my-5">
      <PinContainer title={url} href={url} className="w-full">
        <div className="w-[600px] h-[400px] mx-auto rounded-xl shadow-lg bg-black-600 p-3">
          <div className="w-full h-[60%] overflow-hidden rounded-t-xl">
            <img
              src={urlToImage}
              alt="News"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default NewsCard;
