import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/button';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 bg-orange-50 px-3 py-1 rounded-full text-orange-600 text-sm font-medium mb-6">
              <Star className="w-4 h-4 fill-orange-500" />
              <span>Rated #1 Gastronomy Experience in Town</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
              Flavor in Every <span className="text-orange-500">Bite,</span> Story in Every Meal.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Experience the art of fine dining with our curated menu of international cuisines, 
              crafted with the freshest ingredients and culinary passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="h-12 px-8 text-base bg-orange-500 hover:bg-orange-600">
                View Menu
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="h-12 px-8 text-base border-gray-200">
                Book a Table
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};