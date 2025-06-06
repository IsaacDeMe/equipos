import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import TeamsSection from '@/components/TeamsSection';
import Footer from '@/components/Footer';
import InfoSection from '@/components/InfoSection';
import { supabase } from '@/lib/supabaseClient';

function App() {
  const [selectedBox, setSelectedBox] = useState('todos');
  const [selectedCategory, setSelectedCategory] = useState('todas');
  const [isAdmin, setIsAdmin] = useState(false);
  const [teams, setTeams] = useState([]);
  const [activeSection, setActiveSection] = useState('informacion');
  const [showNav, setShowNav] = useState(false);
  const { toast } = useToast();
  const mainContentAnchorRef = useRef(null);

  const fetchTeams = async () => {
    try {
      const { data, error } = await supabase
        .from('competiciones')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }
      setTeams(data || []);
    } catch (error) {
      console.error('Error fetching teams:', error);
      toast({
        title: "Error al cargar equipos",
        description: "No se pudieron cargar los equipos desde la base de datos.",
        variant: "destructive",
      });
      setTeams([]);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

 


  const filteredTeams = teams.filter(team => {
    const boxMatch = selectedBox === 'todos' || team.box === selectedBox;
    const categoryMatch = selectedCategory === 'todas' || team.category === selectedCategory;
    return boxMatch && categoryMatch;
  });

  const handleAdminLoginSuccess = () => {
    setIsAdmin(true);
    toast({
      title: "¡Acceso concedido!",
      description: "Has entrado como administrador.",
      className: "bg-radioactive-green text-black",
    });
  };

  const handleCreateTeam = async (newTeamData) => {
    try {
      const { data, error } = await supabase
        .from('competiciones')
        .insert([newTeamData])
        .select();

      if (error) {
        throw error;
      }

      if (data && data.length > 0) {
        setTeams(prevTeams => [data[0], ...prevTeams]);
        toast({
          title: "¡Equipo creado exitosamente!",
          description: `El equipo "${newTeamData.name}" ha sido guardado en la base de datos.`,
          className: "bg-radioactive-green text-black",
        });
      } else {
         throw new Error("No data returned after insert");
      }
    } catch (error) {
      console.error('Error creating team:', error);
      toast({
        title: "Error al crear equipo",
        description: `No se pudo guardar el equipo. ${error.message}`,
        variant: "destructive",
      });
    }
  };

  const handleDeleteTeam = async (teamId, teamName) => {
    try {
      const { error } = await supabase
        .from('competiciones')
        .delete()
        .match({ id: teamId });

      if (error) {
        throw error;
      }

      setTeams(prevTeams => prevTeams.filter(team => team.id !== teamId));
      toast({
        title: "Equipo eliminado",
        description: `El equipo "${teamName}" ha sido eliminado correctamente.`,
        className: "bg-radioactive-green text-black",
      });
    } catch (error) {
      console.error('Error deleting team:', error);
      toast({
        title: "Error al eliminar equipo",
        description: `No se pudo eliminar el equipo. ${error.message}`,
        variant: "destructive",
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground font-roboto overflow-x-hidden">
      <Header />
      
      <div ref={mainContentAnchorRef} style={{ height: '1px', marginTop: '-1px' }}></div>
      
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      
      <main className="container mx-auto px-4 py-12">
        {activeSection === 'informacion' && <InfoSection />}
        
        {activeSection === 'equipos' && (
          <TeamsSection
            selectedBox={selectedBox}
            setSelectedBox={setSelectedBox}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            filteredTeams={filteredTeams}
            isAdmin={isAdmin}
            onCreateTeam={handleCreateTeam}
            onDeleteTeam={handleDeleteTeam}
          />
        )}
      </main>

      <Footer onAdminLoginSuccess={handleAdminLoginSuccess} />
      <Toaster />
    </div>
  );
}

export default App;