import React from 'react';
import { Droplets, Leaf, Award } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm">
      {icon}
      <h3 className="font-serif text-xl mt-4 text-[#4a5759]">{title}</h3>
      <p className="mt-2 text-[#4a5759]/80">{description}</p>
    </div>
  );
}

export function Features() {
  const features = [
    {
      icon: <Droplets className="h-8 w-8 text-[#4a5759]" />,
      title: 'Pure Ingredients',
      description: 'Crafted from premium organic soybeans, sourced from sustainable farms.',
    },
    {
      icon: <Leaf className="h-8 w-8 text-[#4a5759]" />,
      title: 'Sustainable',
      description: 'Eco-friendly packaging and carbon-neutral production process.',
    },
    {
      icon: <Award className="h-8 w-8 text-[#4a5759]" />,
      title: 'Award-Winning',
      description: 'Recognized for exceptional taste and quality by culinary experts.',
    },
  ];

  return (
    <section className="px-8 py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}