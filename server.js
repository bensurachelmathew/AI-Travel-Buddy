import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());



app.get('/', (req, res) => res.send('OK'));
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
// Chat endpoint
app.post("/chat", async (req, res) => {
  try {
    console.log("REAHCED")
    const userMessage = req.body.message;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a friendly AI Travel Buddy that suggests destinations, itineraries, and tips." },
        { role: "user", content: userMessage }
      ],
    });
console.log(completion.choices[0].message.content)
    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
