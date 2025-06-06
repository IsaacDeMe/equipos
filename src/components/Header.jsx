import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const inscriptionLink = "https://docs.google.com/forms/d/e/1FAIpQLSerN5IsY4LZSgX-4jktT5yNVFdWFhxMnbuVuIL2KMLw4Ft3Cw/viewform";
  const backgroundImage = "https://storage.googleapis.com/hostinger-horizons-assets-prod/8250bbc7-f285-468d-b2c6-2580471f40cb/9f63b832e3183f5ae4313a6857fd7394.png";

  return (
    <header 
      className="hero-bg py-16 md:py-20 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="hero-content container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-radioactive-green font-permanent-marker text-lg md:text-xl mb-2 tracking-wider">AYÚDAME A IR A GAMES</p>
          <h1 className="throwdown-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4">
            THROWDOWN<br />SOLIDARIO
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-6 font-roboto">Diviértete por una buena causa</p>
          <p className="text-gray-300 font-permanent-marker text-base md:text-lg tracking-wider mb-8">EQUIPOS DE 3 PERSONAS MIXTOS</p>
          <a href={inscriptionLink} target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className="bg-radioactive-green text-black font-permanent-marker text-xl py-3 px-8 hover:bg-opacity-80 transition-colors shadow-lg hover:shadow-radioactive-green/50"
            >
              <Edit3 className="w-6 h-6 mr-3" />
              Inscribirse Aquí
            </Button>
          </a>
        </motion.div>
      </div>
      <div className="scroll-down-arrow cursor-default"> {/* Removed onClick, added cursor-default */}
        <ChevronDown className="w-10 h-10 text-radioactive-green" />
      </div>
    </header>
  );
};

export default Header;