
import React from 'react';
import { CartItem } from '../types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ 
  isOpen, onClose, items, onUpdateQuantity, onRemove, onCheckout 
}) => {
  if (!isOpen) return null;

  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Sidebar */}
      <div className="relative w-full max-w-md bg-zinc-950 h-full flex flex-col border-l border-zinc-800 transition-transform transform duration-300 ease-in-out">
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
          <h2 className="text-2xl font-brand italic font-bold text-white">Your Cart 🔥</h2>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white">
            <i className="fa fa-times text-xl"></i>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 scrollbar-hide">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
              <i className="fa fa-shopping-basket text-6xl text-zinc-700"></i>
              <p className="text-lg text-white">Your cart is empty.</p>
              <button 
                onClick={onClose}
                className="text-red-500 font-bold hover:underline"
              >
                Go find something spicy!
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map(item => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start text-white">
                      <h4 className="font-bold text-lg leading-tight">{item.name}</h4>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-zinc-600 hover:text-red-500 transition-colors"
                      >
                        <i className="fa fa-trash text-xs"></i>
                      </button>
                    </div>
                    <p className="text-zinc-500 text-sm mb-2">Rs. {item.price}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center bg-zinc-900 rounded-lg p-1 text-white">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-zinc-800 rounded-md transition-colors"
                        >
                          <i className="fa fa-minus text-xs"></i>
                        </button>
                        <span className="w-8 text-center font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-zinc-800 rounded-md transition-colors"
                        >
                          <i className="fa fa-plus text-xs"></i>
                        </button>
                      </div>
                      <span className="font-bold ml-auto text-white">Rs. {item.price * item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-zinc-800 bg-zinc-900/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-zinc-400 font-medium">Subtotal</span>
              <span className="text-2xl font-black italic text-white">Rs. {total}</span>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full py-4 spicy-gradient rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform flex items-center justify-center gap-3 shadow-lg shadow-red-900/20 text-white"
            >
              PROCEED TO CHECKOUT
              <i className="fab fa-whatsapp text-2xl"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
