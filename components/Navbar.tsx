
import React, { useState } from 'react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, activeTab, setActiveTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'Menu', 'About', 'Contact'];

  const scrollTo = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-black border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('Home')}>
          <span className="text-2xl md:text-3xl font-brand font-black italic tracking-tighter text-white">
            TOO <span className="text-red-600">HOT</span>
          </span>
          <i className="fa fa-fire text-orange-500" style={{ fontSize: '24px' }}></i>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-red-500 ${
                activeTab === item ? 'text-red-600' : 'text-zinc-300'
              }`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {/* FIXED: Cart trigger with exact icon markup and bottom-right badge */}
          <button 
            onClick={onCartClick}
            className="relative text-white hover:text-red-500 transition-all duration-300 flex items-center justify-center p-1"
            aria-label="View Cart"
          >
            <i className="fa fa-shopping-cart" style={{ fontSize: '24px' }}></i>
            
            {cartCount > 0 && (
              <span className="absolute -bottom-1 -right-2 bg-red-600 text-white text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-sm shadow-xl z-[110] border border-black">
                {cartCount}
              </span>
            )}
          </button>

          {/* FIXED: Mobile menu trigger with exact icon markup and visibility fix */}
          <button 
            className="md:hidden text-white flex items-center justify-center p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <i className={`fa ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} style={{ fontSize: '24px' }}></i>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 py-6 px-8 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`text-left text-xl font-bold ${
                activeTab === item ? 'text-red-600' : 'text-zinc-100'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
