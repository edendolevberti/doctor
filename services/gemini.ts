
import { GoogleGenAI, Type } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for the website of Professor Yaron Rabinowitz, a world-class fertility and IVF specialist. 
Your goal is to answer questions from potential patients in a professional, empathetic, and clear manner in Hebrew.

Guidelines:
1. Speak in Hebrew only.
2. Provide information about IVF, fertility preservation, pregnancy monitoring, and general fertility questions.
3. Be clear: You are an AI assistant, not the Professor himself.
4. IMPORTANT: Always include a disclaimer that your answers are for informational purposes and do not replace a medical consultation with Professor Rabinowitz.
5. Encourage users to book a consultation through the website form.
6. Keep responses concise but informative.
7. Use medical terms correctly but explain them simply.
`;

export async function getGeminiResponse(userMessage: string, history: ChatMessage[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "מצטער, חלה שגיאה בעיבוד הבקשה. אנא נסו שוב מאוחר יותר.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "חלה שגיאה בחיבור לשרת. אנא וודאו שאתם מחוברים לאינטרנט ונסו שוב.";
  }
}
