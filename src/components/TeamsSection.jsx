import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Edit3, Trash2 } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AdminPanel from '@/components/AdminPanel';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


const TeamsSection = ({ selectedBox, setSelectedBox, selectedCategory, setSelectedCategory, filteredTeams, isAdmin, onCreateTeam, onDeleteTeam }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-card rounded-xl p-6 md:p-8 mb-10">
        <h2 className="text-3xl md:text-4xl font-permanent-marker text-radioactive-green mb-8 text-center">
          Equipos Participantes
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <Label className="text-muted-foreground mb-2 block font-semibold font-roboto">Box CrossFit</Label>
            <Select value={selectedBox} onValueChange={setSelectedBox}>
              <SelectTrigger className="bg-input border-border text-foreground focus:ring-radioactive-green">
                <SelectValue placeholder="Selecciona un box" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border text-foreground">
                <SelectItem value="todos" className="hover:bg-accent">Todos los boxes</SelectItem>
                <SelectItem value="Do-Box fitness club" className="hover:bg-accent">Do-Box fitness club</SelectItem>
                <SelectItem value="Crossfit Torredembarra" className="hover:bg-accent">Crossfit Torredembarra</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label className="text-muted-foreground mb-2 block font-semibold font-roboto">Categoría</Label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="bg-input border-border text-foreground focus:ring-radioactive-green">
                <SelectValue placeholder="Selecciona categoría" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border text-foreground">
                <SelectItem value="todas" className="hover:bg-accent">Todas las categorías</SelectItem>
                <SelectItem value="RX" className="hover:bg-accent">RX</SelectItem>
                <SelectItem value="Scaled" className="hover:bg-accent">Scaled</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {!isAdmin && (
          <div className="text-center my-8">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSerN5IsY4LZSgX-4jktT5yNVFdWFhxMnbuVuIL2KMLw4Ft3Cw/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-radioactive-green text-black font-permanent-marker text-lg py-3 px-6 hover:bg-opacity-80 transition-colors shadow-lg hover:shadow-radioactive-green/50">
                <Edit3 className="w-5 h-5 mr-2" />
                ¿Te quieres apuntar?
              </Button>
            </a>
          </div>
        )}

        {isAdmin && <AdminPanel onCreateTeam={onCreateTeam} />}
      </div>

      {filteredTeams.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto bg-card shadow-lg rounded-lg border border-border"
        >
          <table className="team-table w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border">
                <th className="p-3 font-permanent-marker text-sm text-muted-foreground uppercase tracking-wider">Nombre del Equipo</th>
                <th className="p-3 font-permanent-marker text-sm text-muted-foreground uppercase tracking-wider">Box</th>
                <th className="p-3 font-permanent-marker text-sm text-muted-foreground uppercase tracking-wider">Categoría</th>
                <th className="p-3 font-permanent-marker text-sm text-muted-foreground uppercase tracking-wider">Integrantes</th>
                {isAdmin && <th className="p-3 font-permanent-marker text-sm text-muted-foreground uppercase tracking-wider text-center">Acciones</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredTeams.map((team, index) => (
                <motion.tr
                  key={team.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="hover:bg-accent/50 transition-colors"
                >
                  <td className="p-3 font-roboto text-foreground font-medium">{team.name}</td>
                  <td className="p-3 font-roboto text-muted-foreground">{team.box}</td>
                  <td className="p-3 font-roboto">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      team.category === 'RX' 
                        ? 'bg-red-900/30 text-red-300 border border-red-700' 
                        : 'bg-blue-900/30 text-blue-300 border border-blue-700'
                    }`}>
                      {team.category}
                    </span>
                  </td>
                  <td className="p-3 font-roboto text-muted-foreground text-sm">
                    {team.members.join(', ')}
                  </td>
                  {isAdmin && (
                    <td className="p-3 text-center">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-400 hover:bg-red-900/20">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="bg-card border-border">
                          <AlertDialogHeader>
                            <AlertDialogTitle className="text-radioactive-green">¿Estás seguro?</AlertDialogTitle>
                            <AlertDialogDescription className="text-muted-foreground">
                              Esta acción no se puede deshacer. Esto eliminará permanentemente el equipo "{team.name}" de la base de datos.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel className="text-foreground hover:bg-accent">Cancelar</AlertDialogCancel>
                            <AlertDialogAction 
                              onClick={() => onDeleteTeam(team.id, team.name)}
                              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                              Eliminar
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </td>
                  )}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground text-lg font-roboto">No hay equipos inscritos que coincidan con los filtros.</p>
          {!isAdmin && <p className="text-gray-500 font-roboto mt-2">¡Anímate a inscribir a tu equipo!</p>}
        </motion.div>
      )}
    </motion.div>
  );
};

export default TeamsSection;