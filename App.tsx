
import React, { useState, useEffect, useCallback } from 'react';
import { MenuItem, CartItem, LocationData } from './types';
import { MENU_ITEMS, RESTAURANT_NAME, RESTAURANT_PHONE, LOCATION_DETAILS } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import CartModal from './components/CartModal';
import LocationModal from './components/LocationModal';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  // Persistence
  useEffect(() => {
    const savedCart = localStorage.getItem('thts-cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to load cart", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('thts-cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsLocationModalOpen(true);
  };

  const finalizeOrder = (location: LocationData) => {
    const orderDetails = cart.map(item => `- ${item.name} (x${item.quantity}) - Rs. ${item.price * item.quantity}`).join('\n');
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    
    let locationText = "Delivery Address: Not provided";
    if (location.isAutoFilled && location.coords) {
      locationText = `Delivery Location: https://www.google.com/maps?q=${location.coords.lat},${location.coords.lng}`;
    } else if (location.address.trim()) {
      locationText = `Delivery Address: ${location.address}`;
    }

    const message = `🔥 *${RESTAURANT_NAME} Order* 🔥\n\n*Items:*\n${orderDetails}\n\n*Total: Rs. ${total}*\n\n📍 ${locationText}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_PHONE.replace('+', '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsLocationModalOpen(false);
    // Optional: Clear cart after checkout
    // setCart([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      
      <main className="flex-grow pt-20">
        <section id="home">
          <Hero />
        </section>

        <section id="menu" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-brand font-bold mb-4 italic">Our Fiery Menu</h2>
            <div className="h-1 w-24 spicy-gradient mx-auto rounded-full"></div>
          </div>
          <MenuGrid items={MENU_ITEMS} onAddToCart={addToCart} />
        </section>

        <section id="about" className="py-20 bg-zinc-900/50">
           <div className="max-w-4xl mx-auto px-6 text-center">
             <h2 className="text-3xl font-brand italic mb-6">About Too Hot Too Spicy</h2>
             <p className="text-zinc-400 text-lg leading-relaxed">
               Born from a passion for bold flavors and high heat, "Too Hot Too Spicy" is Lahore's destination for those who crave a culinary thrill. We specialize in fusion pizzas, signature burgers, and authentic street flavors, all served with our secret blend of spices that'll leave you wanting more.
             </p>
           </div>
        </section>
      </main>

      <Footer details={LOCATION_DETAILS} name={RESTAURANT_NAME} />

      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onCheckout={handleCheckout}
      />

      <LocationModal 
        isOpen={isLocationModalOpen}
        onClose={() => setIsLocationModalOpen(false)}
        onConfirm={finalizeOrder}
      />
    </div>
  );
};

export default App;
