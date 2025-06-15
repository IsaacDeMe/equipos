import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const AdminPanel = ({ onCreateTeam }) => {
  const [newTeam, setNewTeam] = useState({
    name: '',
    category: '',
    members: ['', '', '']
  });
  const { toast } = useToast();

  const handleMemberChange = (index, value) => {
    const updatedMembers = [...newTeam.members];
    updatedMembers[index] = value;
    setNewTeam({ ...newTeam, members: updatedMembers });
  };

  const handleCreateTeamSubmit = async () => {
    if (!newTeam.name || !newTeam.category || newTeam.members.some(member => !member.trim())) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos del equipo.",
        variant: "destructive",
      });
      return;
    }
    await onCreateTeam({
      name: newTeam.name,
      category: newTeam.category,
      members: newTeam.members.filter(member => member.trim())
    });
    setNewTeam({ name: '', category: '', members: ['', '', ''] }); 
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      transition={{ duration: 0.3 }}
      className="admin-panel p-6 rounded-lg mb-8"
    >
      <h3 className="text-2xl font-permanent-marker text-radioactive-green mb-6 flex items-center gap-3">
        <Plus className="w-6 h-6" />
        Crear Nuevo Equipo
      </h3>

      <div className="mb-4">
        <Label className="text-muted-foreground mb-1 block font-roboto">Nombre del Equipo</Label>
        <Input
          value={newTeam.name}
          onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
          className="bg-input border-border text-foreground focus:ring-radioactive-green"
          placeholder="Nombre del equipo"
        />
      </div>

      <div className="mb-4">
        <Label className="text-muted-foreground mb-1 block font-roboto">Categoría</Label>
        <Select value={newTeam.category} onValueChange={(value) => setNewTeam({ ...newTeam, category: value })}>
          <SelectTrigger className="bg-input border-border text-foreground focus:ring-radioactive-green">
            <SelectValue placeholder="Selecciona categoría" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border text-foreground">
            <SelectItem value="RX" className="hover:bg-accent">RX</SelectItem>
            <SelectItem value="Scaled" className="hover:bg-accent">Scaled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mb-6">
        <Label className="text-muted-foreground mb-1 block font-roboto">Integrantes del Equipo (3)</Label>
        <div className="grid gap-3">
          {newTeam.members.map((member, index) => (
            <Input
              key={index}
              value={member}
              onChange={(e) => handleMemberChange(index, e.target.value)}
              className="bg-input border-border text-foreground focus:ring-radioactive-green"
              placeholder={`Integrante ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Button onClick={handleCreateTeamSubmit} className="w-full bg-radioactive-green text-black hover:bg-opacity-80 font-permanent-marker text-lg py-3">
        <Plus className="w-5 h-5 mr-2" />
        Crear Equipo
      </Button>
    </motion.div>
  );
};

export default AdminPanel;
