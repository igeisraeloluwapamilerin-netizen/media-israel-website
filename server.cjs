
const express = require("express");
const path = require("path");
require("dotenv").config();

const OpenAI = require("openai");

const app = express();
const PORT = process.env.PORT || 3000;

if (!process.env.OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY. Check your .env file.");
  process.exit(1);
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.json({ limit: "20kb" }));

// Serve your existing website files.
app.use(
  express.static(process.cwd(), {
    dotfiles: "deny",
    index: false,
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "index.html"));
});

// Receive a visitor's question and ask the AI.
app.post("/api/chat", async (req, res) => {
  try {
    const message = req.body?.message;

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "Please enter a question.",
      });
    }

    if (message.length > 4000) {
      return res.status(400).json({
        error: "Please keep your question under 4,000 characters.",
      });
    }

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      instructions: `You are Media Israel Assistant, a helpful technical
support assistant for livestreaming and media production.

Help users with vMix, OBS Studio, cameras, video capture cards,
audio mixers, microphones, livestreaming, internet settings,
video editing, Premiere Pro, and budget-friendly production setups.

Give clear, practical, step-by-step instructions for beginners.
Ask a short clarifying question when important details are missing.
Consider affordable equipment and solutions available in Nigeria.
Never claim to have changed settings or operated equipment yourself.
Stay focused on media production and related technical questions.`,
      input: message.trim(),
    });

    res.json({
      reply: response.output_text || "Please try asking your question again.",
    });
  } catch (error) {
    console.error("AI request failed:", error.message);

    res.status(500).json({
      error: "The assistant could not respond. Please try again.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Media Israel server running at http://localhost:${PORT}`);
});
