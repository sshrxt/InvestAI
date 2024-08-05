import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const router = express.Router();


router.use(`/`, async (req, res) => {
    const searchQuery = req.query.search;
    if (!searchQuery) {
      return res.status(400).json({ msg: "Query is required" });
    }

    try {
        const response = await fetch(`https://newsapi.org/v2/everything?qInTitle=${searchQuery}&apiKey=59131e7f86d6404ab25ed5445b7284b3`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
      
        const data = await response.json();
        const articles = data.articles;
        const fiveArticles = getFiveArticles(articles);
        res.json({data : fiveArticles});
    } catch (error) {
        console.log(error)
    }


});

function getFiveArticles(articles) {
    // Create an array to hold the filtered articles
    const filteredArticles = [];

    // Iterate over the articles
    for (const article of articles) {
        // Check if the article has the required fields
        if (article.title && article.url && article.urlToImage && article.description) {
            // Add the article to the filtered list
            filteredArticles.push(article);

            // Stop once we have five articles
            if (filteredArticles.length === 5) {
                break;
            }
        }
    }

    // Return the array of five articles
    return filteredArticles;
}

export default router;