import React from 'react';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelect,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={cn(
            "px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
            activeCategory === category
              ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};