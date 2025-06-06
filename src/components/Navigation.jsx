import React from 'react';
import { Info, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="nav-sticky py-3">
      <div className="container mx-auto px-4 flex justify-center items-center space-x-4 md:space-x-8">
        <Button
          variant="ghost"
          onClick={() => setActiveSection('informacion')}
          className={`font-permanent-marker text-lg px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
            ${activeSection === 'informacion' 
              ? 'bg-radioactive-green text-black shadow-lg transform scale-105' 
              : 'text-muted-foreground hover:bg-accent hover:text-foreground'
            }`}
        >
          <Info className="w-5 h-5 mr-2" />
          Información
        </Button>
        <Button
          variant="ghost"
          onClick={() => setActiveSection('equipos')}
          className={`font-permanent-marker text-lg px-6 py-3 rounded-lg transition-all duration-300 ease-in-out
            ${activeSection === 'equipos' 
              ? 'bg-radioactive-green text-black shadow-lg transform scale-105' 
              : 'text-muted-foreground hover:bg-accent hover:text-foreground'
            }`}
        >
          <List className="w-5 h-5 mr-2" />
          Equipos
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;