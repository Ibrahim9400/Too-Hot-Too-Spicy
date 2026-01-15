
import React from 'react';

interface FooterProps {
  name: string;
  details: {
    address: string;
    plusCode: string;
    coords: string;
    status: string;
  };
}

const Footer: React.FC<FooterProps> = ({ name, details }) => {
  // Using the exact coordinates provided: 31.62351922729357, 74.28883317021581
  const lat = 31.62351922729357;
  const lng = 74.28883317021581;
  // Use www.google.com for better trust validation on iOS Safari
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1000!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1234567890`;

  return (
    <footer id="contact" className="bg-black border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-brand italic font-black">
            {name.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? 'text-red-600' : ''}>{word} </span>
            ))}
          </h2>
          <p className="text-zinc-500 max-w-xs">
            Bringing the fiercest flavors to the heart of Shahdara. Our kitchen is always roaring.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-red-600 transition-colors">
              <i className="fab fa-facebook-f text-white"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-red-600 transition-colors">
              <i className="fab fa-instagram text-white"></i>
            </a>
            <a href="https://wa.me/923054319696" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-green-600 transition-colors">
              <i className="fab fa-whatsapp text-white"></i>
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-widest text-zinc-400">Our Precise Location</h4>
          <div className="rounded-2xl overflow-hidden h-48 border border-zinc-800 shadow-xl shadow-red-900/10">
            <iframe 
              src={mapEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="flex gap-3 text-zinc-500 text-sm">
            <i className="fas fa-map-marker-alt text-red-600"></i>
            <span>{details.address}</span>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-lg font-bold uppercase tracking-widest text-zinc-400">Contact</h4>
          <div className="space-y-4">
            <div className="flex gap-3 text-zinc-500">
              <i className="fas fa-phone text-red-600 mt-1"></i>
              <a href="tel:03054319696" className="text-xl font-bold text-white hover:text-red-500 transition-colors">03054319696</a>
            </div>
            <div className="flex gap-3 text-zinc-500">
              <i className="fab fa-whatsapp text-green-500 mt-1"></i>
              <a href="https://wa.me/923054319696" target="_blank" className="text-lg font-bold text-white hover:text-green-500 transition-colors">03054319696</a>
            </div>
            <div className="flex gap-3 items-center pt-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-zinc-300 font-semibold">{details.status}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-10 border-t border-zinc-900 text-center text-zinc-700 text-sm">
        <p>© 2024 {name}. All rights reserved. Crafted for heat seekers.</p>
      </div>
    </footer>
  );
};

export default Footer;
