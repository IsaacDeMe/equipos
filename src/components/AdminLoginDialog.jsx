import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const AdminLoginDialog = ({ open, onOpenChange, onLogin }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onLogin(password);
    setPassword(''); 
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border text-foreground">
        <DialogHeader>
          <DialogTitle className="font-permanent-marker text-radioactive-green text-2xl">Acceso de Administrador</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div>
            <Label htmlFor="admin-password" className="text-muted-foreground font-roboto">Contraseña</Label>
            <Input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-input border-border text-foreground focus:ring-radioactive-green"
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            />
          </div>
          <Button onClick={handleSubmit} className="w-full bg-radioactive-green text-black hover:bg-opacity-80 font-permanent-marker">
            Entrar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminLoginDialog;