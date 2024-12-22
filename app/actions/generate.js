'use server'

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function generateQuote(prompt) {
  try {
    console.log('API Key in production:', process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(`Generate 4 different inspirational quotes based on this context: ${prompt}. 
    The response should include the quotes and their authors in this format:
    1. {quote1} - {author1}
    2. {quote2} - {author2}
    3. {quote3} - {author3}
    4. {quote4} - {author4}
    Make sure each quote is meaningful, impactful, and relevant to the context.`);
    const response = result.response;
    const text = response.text();
    
    // Split the response into individual quotes
    const quotes = text.split('\n')
      .filter(line => line.trim() && line.includes('.'))
      .map(line => {
        const [, quoteWithAuthor] = line.split('. ');
        const [quote, author] = quoteWithAuthor.split(' - ').map(str => str.trim());
        return {
          quote,
          author: author || 'Unknown'
        };
      });
    
    return {
      quotes,
      error: null
    };
  } catch (error) {
    console.error('Error generating quotes:', error);
    return {
      quotes: null,
      error: 'Failed to generate quotes. Please try again.'
    };
  }
}
