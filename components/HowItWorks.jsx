'use client';
import { motion } from 'framer-motion';
import { FaMagic, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import UserTypeCard from './userTypeCard';

function HowItWorks() {
  return (
    <section className="container px-4 py-24 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          The best quote generator for all users
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <UserTypeCard
            imageSrc="/cavva.avif"
            title="For entrepreneurs"
            description="Add inspiring quotes to your promotions to connect with your buyers."
          />
          <UserTypeCard
            imageSrc="/canva2.avif"
            title="For marketing pros"
            description="Easily generate the perfect quote that resonates with every type of audience."
          />
          <UserTypeCard
            imageSrc="/canva3.avif"
            title="For content creators"
            description="Create consistent content with quotes that showcase your unique persona."
          />
        </div>
      </section>
  );
}
export default HowItWorks