
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyBGiGmUR-5uSVzmGYbhSrUi7NAdKQdpgtQ" });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    // contents: "What's my name?",
    contents:[
        {
            role:"user",
            parts:[{text:"Hi, I am Akshita"}]
        },
        {
            role:"model",
            parts:[{text:"Hi Akshita! It's nice to meet you.How can I help you today?"}]
        },
        {
            role:"user",
            parts:[{text:"What's my Name?"}]
        },
       
    ]
  });
  console.log(response.text);
}

await main();