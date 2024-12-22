'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Form } from './ui/form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { DotPattern } from './ui/dot-pattern';
import { generateQuote } from '@/app/actions/generate';

export default function Hero() {
  const [quotes, setQuotes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const form = useForm({
    defaultValues: {
      prompt: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const result = await generateQuote(data.prompt);
      
      if (result.error) {
        setError(result.error);
        return;
      }

      setQuotes(result.quotes);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async (quote, author, index) => {
    try {
      await navigator.clipboard.writeText(`${quote} - ${author}`);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="relative">
      <DotPattern className="-z-10" />
      <div className="container px-4 py-12 mx-auto text-center relative">
        <h1 className="text-6xl font-bold tracking-tighter mb-4">AI Quote Generator</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
          Instantly generate inspiring quotes for your designs. Perfect for social media,
          presentations, or any creative project that needs a touch of wisdom.
        </p>
        
        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input 
                  {...form.register('prompt')}
                  placeholder="Generate quotes that offer words of encouragement for new parents"
                  className="h-16 px-6 text-lg rounded-full border-gray-300 focus:outline-none focus:border focus:border-purple-500 transition-all duration-200 placeholder:bg-gradient-to-r placeholder:from-[#0F94AE] placeholder:to-purple-500 placeholder:bg-clip-text placeholder:text-transparent"
                />
              </div>
              <Button 
                type="submit"
                disabled={isLoading}
                className="h-12 px-8 text-lg rounded-full bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:opacity-90 transition-opacity duration-200"
              >
                {isLoading ? 'Generating...' : 'Generate Quotes'}
              </Button>
            </form>
          </Form>

          {error && (
            <div className="mt-6 p-4 text-red-500 bg-red-50 rounded-lg">
              {error}
            </div>
          )}

          {quotes.length > 0 && (
            <div className="mt-8 space-y-6">
              {quotes.map((quote, index) => (
                <div key={index} className="p-6 flex flex-col items-start bg-white/50 backdrop-blur-sm rounded-xl shadow-lg">
                  <p className="text-xl font-medium mb-2 text-start">{quote.quote}</p>
                  <div className="w-full flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">- {quote.author}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopy(quote.quote, quote.author, index)}
                      className="text-purple-600 hover:text-purple-700 border border-purple-200"
                    >
                      {copiedIndex === index ? 'Copied!' : 'Copy Quote'}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
