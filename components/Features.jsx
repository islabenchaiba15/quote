'use client';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaHeart, FaShare } from 'react-icons/fa';
import FeatureCard from './featureCard';
import { Sparkles, Copy, PenTool, Palette } from 'lucide-react';

export default function Features() {
  return (
    <section className="container px-4 py-24 mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Powerful Quote Generation</h2>
      <p className="text-xl text-muted-foreground text-center mb-12">
        Create perfect quotes for your creative projects with our AI-powered generator
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <FeatureCard
          icon={<Sparkles className="w-8 h-8" />}
          title="Multiple Quotes at Once"
          description="Generate 4 unique quotes simultaneously, saving you time and providing more options for your creative projects."
        />
        <FeatureCard
          icon={<Copy className="w-8 h-8" />}
          title="One-Click Copy"
          description="Instantly copy any quote with author attribution, making it effortless to paste into your designs."
        />
        <FeatureCard
          icon={<PenTool className="w-8 h-8" />}
          title="Context-Aware Generation"
          description="Get quotes that perfectly match your needs by describing your context or theme in natural language."
        />
        <FeatureCard
          icon={<Palette className="w-8 h-8" />}
          title="Design Ready"
          description="Quotes are formatted perfectly for your creative work, ready to be styled with your favorite designs and templates."
        />
      </div>
    </section>
  );
}
