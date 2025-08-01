import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv';

dotenv.config({path:'./.env'});

const GEMINI_API_KEY = process.env['GEMINI_API_KEY'];

const ai = new GoogleGenAI({apikey:GEMINI_API_KEY});

async function getAiResponse(query){

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: query
    });


   return response.text;
}


export default getAiResponse;
