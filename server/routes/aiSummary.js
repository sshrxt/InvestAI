import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const router = express.Router();

router.use(`/`, async (req, res) => {
  try {
    const response = await fetch("https://arcade.evl.uic.edu/llama/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs:
          `<|begin_of_text|><|start_header_id|>system<|end_header_id|>

            Cutting Knowledge Date: December 2023
            Today Date: 23 Jul 2024

            You are a helpful assistant<|eot_id|><|start_header_id|>user<|end_header_id|>

            What is the capital for France?<|eot_id|><|start_header_id|>assistant<|end_header_id|>`,
        parameters: {
          max_new_tokens: 200,
          stop: [
            "<|start_header_id|>",
            "<|end_header_id|>",
            "<|eot_id|>",
            "<|reserved_special_token>"
          ],
        },
      }),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    res.json({data: data})
  } catch (error) {
    console.error("Fetch error:", error);
  }
});

export default router;
