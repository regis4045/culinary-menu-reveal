import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { MenuItem } from '@/types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAddToCart }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.isPopular && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-orange-500/90 backdrop-blur-sm border-none">
              <Star className="w-3 h-3 mr-1 fill-white" />
              Popular
            </Badge>
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-500 transition-colors">
            {item.name}
          </h3>
          <span className="font-bold text-orange-600">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-500 text-sm line-clamp-2 mb-4">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            {item.category}
          </span>
          <Button
            size="sm"
            onClick={() => onAddToCart(item)}
            className="rounded-full w-8 h-8 p-0 bg-gray-900 hover:bg-orange-500"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};