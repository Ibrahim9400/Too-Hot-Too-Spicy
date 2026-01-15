
import React from 'react';
import { MenuItem } from '../types';

interface MenuGridProps {
  items: MenuItem[];
  onAddToCart: (item: MenuItem) => void;
}

const MenuGrid: React.FC<MenuGridProps> = ({ items, onAddToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="group bg-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800/50 hover:border-red-900/50 transition-all duration-300 card-shadow flex flex-col"
        >
          <div className="relative h-56 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-orange-400 border border-orange-500/30">
                {item.category}
              </span>
            </div>
          </div>
          
          <div className="p-6 flex-grow flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold leading-tight group-hover:text-red-500 transition-colors">
                {item.name}
              </h3>
            </div>
            <p className="text-zinc-500 text-sm mb-6 flex-grow">
              {item.description}
            </p>
            <div className="flex flex-col gap-4 mt-auto">
              <span className="text-2xl font-black text-white text-center md:text-left">
                <span className="text-sm text-zinc-500 font-normal mr-1">Rs.</span>
                {item.price}
              </span>
              <button 
                onClick={() => onAddToCart(item)}
                className="w-full py-3 bg-zinc-800 hover:spicy-gradient text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 active:scale-95"
              >
                <i className="fas fa-cart-plus"></i>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;
