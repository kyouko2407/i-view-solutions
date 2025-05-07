import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const SYSTEM_PROMPT = `You are an AI assistant specialized in helping users find and compare English learning centers. 
You can provide information about:
- English learning centers and their programs
- Language proficiency tests (IELTS, TOEFL, etc.)
- Learning resources and study materials
- Cost comparisons and budgeting
- Learning strategies and tips

Always be helpful, accurate, and professional in your responses.`;

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { message, isNewChat } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    let response;
    if (isNewChat) {
      // Start a new chat with system prompt
      const chat = model.startChat({
        history: [
          {
            role: 'user',
            parts: [{ text: SYSTEM_PROMPT }],
          },
          {
            role: 'model',
            parts: [{ text: "I understand. I'm ready to help you with any questions about English learning centers and language education." }],
          },
        ],
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.7,
        },
      });
      response = await chat.sendMessage(message);
    } else {
      // Continue existing conversation
      response = await model.generateContent(message);
    }

    const responseText = await response.response.text();
    return NextResponse.json({ response: responseText });
  } catch (error) {
    console.error('AI chat error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 