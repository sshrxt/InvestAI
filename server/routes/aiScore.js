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
    const response = await fetch("https://arcade.evl.uic.edu/llama/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: `<|begin_of_text|><|start_header_id|>system<|end_header_id|>

            Cutting Knowledge Date: December 2023
            Today Date: 8 August 2024

            I am about to provide you with an invesmtent and its details including what type of investment it is. Please give me a score only (0-100) based on factors such as the type of investment which is important for market analysis and investment details such as profit returns rate etc<|eot_id|><|start_header_id|>user<|end_header_id|>

            ${searchQuery}<|eot_id|><|start_header_id|>assistant<|end_header_id|>`,
        parameters: {
          max_new_tokens: 1000,
          stop: [
            "<|start_header_id|>",
            "<|end_header_id|>",
            "<|eot_id|>",
            "<|reserved_special_token>",
          ],
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    res.json({ data: data });
  } catch (error) {
    console.error("Fetch error:", error);
  }
});

export default router;
