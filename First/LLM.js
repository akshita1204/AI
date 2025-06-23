import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";
import readLineSync from "readline-sync"

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });
const History=[]

async function chatting(userProblem) {

 History.push({
        role:'user',
        parts:[{text:userProblem}]
    })

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: History,
    // contents:[
    //     {
    //         role:"user",
    //         parts:[{text:"Hi, I am Akshita"}]
    //     },
    //     {
    //         role:"model",
    //         parts:[{text:"Hi Akshita! It's nice to meet you.How can I help you today?"}]
    //     },
    //     {
    //         role:"user",
    //         parts:[{text:"What's my Name?"}]
    //     },
       
    //]
    
  });
   History.push({
        role:'model',
        parts:[{text:response.text}]
    })
  console.log(response.text);
}

async function main()
{
const userProblem=readLineSync.question("Ask me Anything----------->")
await chatting(userProblem)
main()

}
await main();