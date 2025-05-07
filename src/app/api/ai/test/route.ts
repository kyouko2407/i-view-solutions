import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function GET() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = 'Say "Hello! The API is working correctly!"';
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return NextResponse.json({ 
      success: true,
      message: response.text()
    });
  } catch (error) {
    console.error('API test error:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to connect to Google AI API'
    }, { status: 500 });
  }
} 