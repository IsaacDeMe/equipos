import React, { useState } from 'react';
import { Instagram, Phone, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdminLoginDialog from '@/components/AdminLoginDialog';
import { useToast } from '@/components/ui/use-toast';

const Footer = ({ onAdminLoginSuccess }) => {
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const { toast } = useToast();

  const handleAdminLogin = (password) => {
    if (password === 'CfnqEz23') {
      onAdminLoginSuccess();
      setShowAdminLogin(false);
    } else {
      toast({
        title: "Error de acceso",
        description: "Contraseña incorrecta.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <footer className="bg-card text-muted-foreground py-8 mt-16 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <span className="font-permanent-marker text-xl text-radioactive-green">Throwdown Solidario</span>
              <p className="text-sm mt-1 font-roboto">Diviértete por una buena causa</p>
            </div>
            
            <div className="flex items-center flex-wrap justify-center gap-4 md:gap-6">
              <a 
                href="https://instagram.com/isaaacdelfa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-radioactive-green transition-colors font-roboto"
              >
                <Instagram className="w-5 h-5" />
                <span>@isaaacdelfa</span>
              </a>
              
              <a 
                href="https://tiktok.com/@isaacdelfamedina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-radioactive-green transition-colors font-roboto"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span>@isaacdelfamedina</span>
              </a>
              
              <a 
                href="tel:642571133" 
                className="flex items-center gap-2 hover:text-radioactive-green transition-colors font-roboto"
              >
                <Phone className="w-5 h-5" />
                <span>642 571 133</span>
              </a>
            </div>
             <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setShowAdminLogin(true)}
                className="bg-input text-foreground hover:bg-accent border-border font-permanent-marker"
              >
                <Shield className="w-4 h-4 mr-2" />
                Admin
              </Button>
          </div>
        </div>
      </footer>
      <AdminLoginDialog 
        open={showAdminLogin} 
        onOpenChange={setShowAdminLogin} 
        onLogin={handleAdminLogin} 
      />
    </>
  );
};

export default Footer;