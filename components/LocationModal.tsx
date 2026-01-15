
import React, { useState } from 'react';
import { LocationData } from '../types';

interface LocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: LocationData) => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tempCoords, setTempCoords] = useState<{lat: number, lng: number} | null>(null);

  if (!isOpen) return null;

  const handleAutoFill = () => {
    setIsLoading(true);
    setError(null);
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setTempCoords(coords);
        setAddress(`Verified Coordinates: ${coords.lat.toFixed(4)}, ${coords.lng.toFixed(4)}`);
        setIsLoading(false);
      },
      (err) => {
        setError("Location access denied. Please enter address manually.");
        setIsLoading(false);
      },
      { enableHighAccuracy: true }
    );
  };

  const handleManualConfirm = () => {
    onConfirm({
      address: address,
      coords: tempCoords || undefined,
      isAutoFilled: !!tempCoords
    });
  };

  const handleSkip = () => {
    onConfirm({
      address: '',
      isAutoFilled: false
    });
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-lg bg-zinc-900 rounded-[2.5rem] p-8 md:p-12 border border-zinc-800">
        <div className="text-center space-y-4 mb-8">
          <div className="w-16 h-16 spicy-gradient rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-500/20">
            <i className="fa fa-map-marker-alt text-2xl text-white"></i>
          </div>
          <h2 className="text-3xl font-brand italic font-bold text-white">Where's the heat going?</h2>
          <p className="text-zinc-400">Share your location to help our riders find you faster.</p>
        </div>

        <div className="space-y-4">
          <button 
            onClick={handleAutoFill}
            disabled={isLoading}
            className={`w-full py-4 font-bold rounded-2xl flex flex-col items-center justify-center gap-1 transition-all duration-300 disabled:opacity-50 ${
              tempCoords ? 'bg-green-600 text-white' : 'bg-white text-black hover:bg-zinc-200'
            }`}
          >
            <div className="flex items-center gap-3">
              {isLoading ? (
                <i className="fa fa-spinner fa-spin"></i>
              ) : (
                <i className={`fa ${tempCoords ? 'fa-check-circle' : 'fa-location-arrow text-blue-600'}`}></i>
              )}
              {tempCoords ? 'LOCATION CONFIRMED' : 'AUTO-FILL MY LOCATION'}
            </div>
            {tempCoords && (
              <span className="text-[10px] font-normal opacity-90">
                {tempCoords.lat.toFixed(6)}, {tempCoords.lng.toFixed(6)}
              </span>
            )}
          </button>

          <div className="relative">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-zinc-800"></div>
            <span className="relative z-10 mx-auto w-12 text-center block bg-zinc-900 text-xs font-bold text-zinc-600 tracking-widest uppercase">OR</span>
          </div>

          <textarea
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              if (tempCoords) setTempCoords(null); // Reset auto-fill if user edits manually
            }}
            placeholder="Enter delivery address manually..."
            className="w-full h-32 bg-black border border-zinc-800 rounded-2xl p-4 text-white placeholder-zinc-600 focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all resize-none"
          ></textarea>

          {error && <p className="text-red-500 text-center text-sm font-medium">{error}</p>}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <button 
              onClick={handleManualConfirm}
              className={`py-4 font-bold rounded-2xl transition-all duration-300 ${
                address.length > 5 ? 'spicy-gradient text-white scale-[1.02]' : 'bg-zinc-800 text-zinc-400'
              }`}
            >
              CONTINUE TO WHATSAPP
            </button>
            <button 
              onClick={handleSkip}
              className="py-4 text-zinc-500 font-bold rounded-2xl hover:text-white transition-colors border border-transparent hover:border-zinc-800"
            >
              SKIP LOCATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
