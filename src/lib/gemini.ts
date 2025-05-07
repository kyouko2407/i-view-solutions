import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');

// Get the model
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

export async function generateAIResponse(prompt: string) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating AI response:', error);
    throw error;
  }
}

// For chat conversations
export async function startChat() {
  const chat = model.startChat({
    history: [],
    generationConfig: {
      maxOutputTokens: 1000,
      temperature: 0.7,
    },
  });
  return chat;
}

// For image analysis (if needed)
const visionModel = genAI.getGenerativeModel({ model: 'gemini-pro-vision' });

export async function analyzeImage(imageData: string, prompt: string) {
  try {
    const result = await visionModel.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: 'image/jpeg',
          data: imageData
        }
      }
    ]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error analyzing image:', error);
    throw error;
  }
} 