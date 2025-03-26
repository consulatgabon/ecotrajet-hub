
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Users, 
  FileText, 
  Award, 
  BarChart, 
  Bell, 
  LogOut, 
  Menu, 
  X, 
  Sun, 
  Moon,
  Home
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
  handleLogout
}) => {
  const location = useLocation();

  const menuItems = [
    { path: "/admin/dashboard", icon: BarChart3, label: "Tableau de bord" },
    { path: "/admin/users", icon: Users, label: "Utilisateurs" },
    { path: "/admin/content", icon: FileText, label: "Contenu" },
    { path: "/admin/challenges", icon: Award, label: "Défis & Récompenses" },
    { path: "/admin/analytics", icon: BarChart, label: "Analyse" },
    { path: "/admin/notifications", icon: Bell, label: "Notifications" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      className={`fixed inset-y-0 left-0 transform ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } z-20 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col ${
        sidebarOpen ? "w-64" : "w-0 md:w-16"
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
        {sidebarOpen && (
          <Link to="/admin/dashboard" className="text-lg font-bold text-eco-green dark:text-white">
            Admin ÉcoTrajet
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="md:hidden"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>
      <div className="flex flex-col flex-1 py-4 overflow-y-auto">
        <nav className="flex-1 px-2 space-y-1">
          {menuItems.map((item) => (
            <TooltipProvider key={item.path}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={item.path}
                    className={`flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive(item.path)
                        ? "bg-eco-light-green text-eco-green dark:bg-eco-dark-green/20 dark:text-eco-light-green"
                        : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    } ${!sidebarOpen && "justify-center"}`}
                  >
                    <item.icon
                      className={`flex-shrink-0 ${
                        sidebarOpen ? "mr-3 h-5 w-5" : "h-6 w-6"
                      }`}
                    />
                    {sidebarOpen && <span>{item.label}</span>}
                  </Link>
                </TooltipTrigger>
                {!sidebarOpen && (
                  <TooltipContent side="right">
                    <p>{item.label}</p>
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          ))}
        </nav>
        <div className="px-2 mt-4 space-y-2">
          <Separator className="my-2 dark:bg-gray-800" />
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size={sidebarOpen ? "default" : "icon"}
                  onClick={toggleDarkMode}
                  className={`w-full justify-${sidebarOpen ? "start" : "center"} text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800`}
                >
                  {darkMode ? (
                    <Sun className={`${sidebarOpen ? "mr-2" : ""} h-5 w-5`} />
                  ) : (
                    <Moon className={`${sidebarOpen ? "mr-2" : ""} h-5 w-5`} />
                  )}
                  {sidebarOpen && <span>Mode {darkMode ? "clair" : "sombre"}</span>}
                </Button>
              </TooltipTrigger>
              {!sidebarOpen && (
                <TooltipContent side="right">
                  <p>Mode {darkMode ? "clair" : "sombre"}</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link to="/">
                  <Button
                    variant="ghost"
                    size={sidebarOpen ? "default" : "icon"}
                    className={`w-full justify-${sidebarOpen ? "start" : "center"} text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800`}
                  >
                    <Home className={`${sidebarOpen ? "mr-2" : ""} h-5 w-5`} />
                    {sidebarOpen && <span>Retour au site</span>}
                  </Button>
                </Link>
              </TooltipTrigger>
              {!sidebarOpen && (
                <TooltipContent side="right">
                  <p>Retour au site</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size={sidebarOpen ? "default" : "icon"}
                  onClick={handleLogout}
                  className={`w-full justify-${sidebarOpen ? "start" : "center"} text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20`}
                >
                  <LogOut className={`${sidebarOpen ? "mr-2" : ""} h-5 w-5`} />
                  {sidebarOpen && <span>Déconnexion</span>}
                </Button>
              </TooltipTrigger>
              {!sidebarOpen && (
                <TooltipContent side="right">
                  <p>Déconnexion</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
