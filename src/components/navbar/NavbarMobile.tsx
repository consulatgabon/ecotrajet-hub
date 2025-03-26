
import React from 'react';
import NavLink from './NavLink';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { 
  X, Menu, MapPin, BarChart, Users, Trophy, BarChart2, 
  Calculator, BookOpen, LogOut, UserCircle, Bell
} from 'lucide-react';

interface NavbarMobileProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  isAuthenticated: boolean;
  handleMapClick: (e: React.MouseEvent) => void;
  handleDashboardClick: (e: React.MouseEvent) => void;
  handleCommunityClick: (e: React.MouseEvent) => void;
  handleRewardsClick: (e: React.MouseEvent) => void;
  handleProfileClick: (e: React.MouseEvent) => void;
  handleNotificationsClick: (e: React.MouseEvent) => void;
  handleTripPlannerClick: (e: React.MouseEvent) => void;
  handleStatisticsClick: (e: React.MouseEvent) => void;
  handleChallengesClick: (e: React.MouseEvent) => void;
  handleLogout: () => void;
}

const NavbarMobile = ({
  mobileMenuOpen,
  toggleMobileMenu,
  isAuthenticated,
  handleMapClick,
  handleDashboardClick,
  handleCommunityClick,
  handleRewardsClick,
  handleProfileClick,
  handleNotificationsClick,
  handleTripPlannerClick,
  handleStatisticsClick,
  handleChallengesClick,
  handleLogout
}: NavbarMobileProps) => {
  return (
    <div className="md:hidden">
      <Sheet open={mobileMenuOpen} onOpenChange={toggleMobileMenu}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-0">
          <div className="flex flex-col h-full">
            <div className="p-4 flex justify-between items-center">
              <span className="text-lg font-semibold">Menu</span>
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="p-4 flex-1">
              <h3 className="font-medium mb-3 text-sm text-gray-500">Explorer</h3>
              <nav className="space-y-2 mb-6">
                <MobileNavItem 
                  href="/map" 
                  icon={<MapPin className="h-5 w-5 text-eco-green" />} 
                  label="Carte interactive" 
                  onClick={(e) => { 
                    handleMapClick(e); 
                    toggleMobileMenu(); 
                  }}
                />
                <MobileNavItem 
                  href="/trip-planner" 
                  icon={<MapPin className="h-5 w-5 text-eco-blue" />} 
                  label="Planificateur d'itinéraires" 
                  onClick={(e) => { 
                    handleTripPlannerClick(e); 
                    toggleMobileMenu(); 
                  }}
                />
                <MobileNavItem 
                  href="/dashboard" 
                  icon={<BarChart className="h-5 w-5 text-eco-green" />} 
                  label="Tableau de bord" 
                  onClick={(e) => { 
                    handleDashboardClick(e); 
                    toggleMobileMenu(); 
                  }}
                />
                <MobileNavItem 
                  href="/statistics" 
                  icon={<BarChart2 className="h-5 w-5 text-eco-blue" />} 
                  label="Statistiques" 
                  onClick={(e) => { 
                    handleStatisticsClick(e); 
                    toggleMobileMenu(); 
                  }}
                />
                <MobileNavItem 
                  href="/carbon-calculator" 
                  icon={<Calculator className="h-5 w-5 text-eco-green" />} 
                  label="Calculateur d'empreinte" 
                  onClick={toggleMobileMenu}
                />
              </nav>
              
              <Separator className="my-4" />
              
              <h3 className="font-medium mb-3 text-sm text-gray-500">Communauté</h3>
              <nav className="space-y-2 mb-6">
                <MobileNavItem 
                  href="/community" 
                  icon={<Users className="h-5 w-5 text-eco-green" />} 
                  label="Forum" 
                  onClick={(e) => { 
                    handleCommunityClick(e); 
                    toggleMobileMenu(); 
                  }}
                />
                <MobileNavItem 
                  href="/challenges" 
                  icon={<Trophy className="h-5 w-5 text-yellow-500" />} 
                  label="Défis écologiques" 
                  onClick={(e) => { 
                    handleChallengesClick(e); 
                    toggleMobileMenu(); 
                  }}
                />
                <MobileNavItem 
                  href="/rewards" 
                  icon={<Trophy className="h-5 w-5 text-eco-blue" />} 
                  label="Récompenses" 
                  onClick={(e) => { 
                    handleRewardsClick(e); 
                    toggleMobileMenu(); 
                  }}
                />
                <MobileNavItem 
                  href="/guide" 
                  icon={<BookOpen className="h-5 w-5 text-eco-green" />} 
                  label="Guide écologique" 
                  onClick={toggleMobileMenu}
                />
              </nav>
            </div>
            
            <div className="mt-auto p-4 border-t border-gray-100">
              {isAuthenticated ? (
                <div className="space-y-3">
                  <MobileNavItem 
                    href="/profile" 
                    icon={<UserCircle className="h-5 w-5 text-eco-green" />}
                    label="Profil" 
                    onClick={(e) => { 
                      handleProfileClick(e); 
                      toggleMobileMenu(); 
                    }}
                  />
                  <MobileNavItem 
                    href="/notifications"
                    icon={<Bell className="h-5 w-5 text-eco-green" />}
                    label="Notifications" 
                    onClick={(e) => { 
                      handleNotificationsClick(e); 
                      toggleMobileMenu(); 
                    }}
                  />
                  <Button 
                    variant="outline" 
                    className="w-full mt-3 flex items-center justify-center"
                    onClick={() => {
                      handleLogout();
                      toggleMobileMenu();
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Déconnexion
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Button asChild variant="outline" className="w-full">
                    <NavLink to="/signin" onClick={toggleMobileMenu}>
                      Connexion
                    </NavLink>
                  </Button>
                  <Button asChild className="w-full">
                    <NavLink to="/signup" onClick={toggleMobileMenu}>
                      Inscription
                    </NavLink>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

interface MobileNavItemProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

const MobileNavItem = ({ href, label, icon, onClick }: MobileNavItemProps) => (
  <NavLink 
    to={href} 
    className="flex items-center p-3 rounded-md hover:bg-gray-100 transition-colors" 
    onClick={onClick}
  >
    {icon && <span className="mr-3">{icon}</span>}
    <span>{label}</span>
  </NavLink>
);

export default NavbarMobile;
