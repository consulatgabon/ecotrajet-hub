
/**
 * Composant AdminSidebar
 * 
 * Ce composant représente la barre latérale du panneau d'administration.
 * Il utilise le composant de navigation AdminNavigation pour afficher les liens
 * et permet de basculer entre les états étendu et réduit.
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  ChevronLeft, 
  LogOut, 
  Moon, 
  Sun,
  Leaf
} from "lucide-react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar/sidebar-content";
import { Button } from "@/components/ui/button";
import AdminNavigation from "./AdminNavigation";

interface AdminSidebarProps {
  sidebarOpen: boolean;
  darkMode: boolean;
  toggleSidebar: () => void;
  toggleDarkMode: () => void;
  handleLogout: () => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({
  sidebarOpen,
  darkMode,
  toggleSidebar,
  toggleDarkMode,
  handleLogout,
}) => {
  const navigate = useNavigate();

  return (
    <Sidebar 
      className={`${sidebarOpen ? 'w-64' : 'w-16'} duration-300 transition-width bg-white dark:bg-gray-900 z-50`}
      data-state={sidebarOpen ? "open" : "collapsed"}
    >
      <SidebarContent>
        {/* Logo et titre */}
        <div className="flex items-center justify-between h-16 px-3.5">
          <div className="flex items-center">
            <Leaf className="h-6 w-6 text-eco-green" />
            {sidebarOpen && (
              <span className="ml-2 font-semibold text-lg">ÉcoTrajet Admin</span>
            )}
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="hidden md:flex"
            aria-label={sidebarOpen ? "Réduire le menu" : "Étendre le menu"}
          >
            <ChevronLeft className={`h-5 w-5 transition-transform ${sidebarOpen ? '' : 'rotate-180'}`} />
          </Button>
        </div>

        {/* Navigation principale */}
        <div className="px-3 mt-3">
          <AdminNavigation isSidebarCollapsed={!sidebarOpen} />
        </div>

        {/* Pied de la sidebar avec contrôles */}
        <div className="mt-auto px-3 mb-4">
          <div className="space-y-2">
            <Button 
              variant="ghost" 
              className={`w-full ${sidebarOpen ? 'justify-start' : 'justify-center'}`} 
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <>
                  <Sun className="h-5 w-5" />
                  {sidebarOpen && <span className="ml-2">Mode clair</span>}
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5" />
                  {sidebarOpen && <span className="ml-2">Mode sombre</span>}
                </>
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              className={`w-full ${sidebarOpen ? 'justify-start' : 'justify-center'}`} 
              onClick={handleLogout}
            >
              <LogOut className="h-5 w-5" />
              {sidebarOpen && <span className="ml-2">Déconnexion</span>}
            </Button>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
};

export default AdminSidebar;
