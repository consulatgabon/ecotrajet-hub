
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Menu, 
  X, 
  BookOpen, 
  Award, 
  Settings, 
  Calculator, 
  Users, 
  User, 
  Bell 
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-sm backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-eco-green">
            <Leaf className="h-6 w-6 transition-transform duration-500 hover:rotate-12" />
            <span className="text-xl font-semibold tracking-tight">ÉcoTrajet</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <a href="#map" className="text-sm font-medium hover:text-eco-green transition-colors">Carte</a>
              <a href="#dashboard" className="text-sm font-medium hover:text-eco-green transition-colors">Tableau de bord</a>
              <Link to="/guide" className="text-sm font-medium hover:text-eco-green transition-colors flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                Guide
              </Link>
              <Link to="/carbon-calculator" className="text-sm font-medium hover:text-eco-green transition-colors flex items-center gap-1">
                <Calculator className="h-4 w-4" />
                Calculateur
              </Link>
              <Link to="/community" className="text-sm font-medium hover:text-eco-green transition-colors flex items-center gap-1">
                <Users className="h-4 w-4" />
                Communauté
              </Link>
              <Link to="/rewards" className="text-sm font-medium hover:text-eco-green transition-colors flex items-center gap-1">
                <Award className="h-4 w-4" />
                Récompenses
              </Link>
              <Link to="/admin" className="text-sm font-medium hover:text-eco-green transition-colors flex items-center gap-1">
                <Settings className="h-4 w-4" />
                Admin
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Link to="/notifications">
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">3</span>
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/signin">
                <Button variant="ghost" className="text-sm px-4 py-2 h-9 rounded-full transition-all duration-300 hover:bg-eco-light-green hover:text-eco-green">
                  Connexion
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="text-sm px-4 py-2 h-9 rounded-full bg-eco-green hover:bg-eco-dark-green text-white transition-all duration-300">
                  Inscription
                </Button>
              </Link>
            </div>
          </div>

          <button 
            className="md:hidden flex items-center text-gray-700" 
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      <div 
        className={`fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden transition-all duration-300 ease-in-out transform ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="flex flex-col space-y-6 items-center text-center">
          <a href="#map" className="text-lg font-medium py-2 w-full border-b border-gray-100 hover:text-eco-green" onClick={toggleMobileMenu}>Carte</a>
          <a href="#dashboard" className="text-lg font-medium py-2 w-full border-b border-gray-100 hover:text-eco-green" onClick={toggleMobileMenu}>Tableau de bord</a>
          <Link to="/guide" className="text-lg font-medium py-2 w-full border-b border-gray-100 hover:text-eco-green flex items-center justify-center gap-2" onClick={toggleMobileMenu}>
            <BookOpen className="h-5 w-5" />
            Guide
          </Link>
          <Link to="/carbon-calculator" className="text-lg font-medium py-2 w-full border-b border-gray-100 hover:text-eco-green flex items-center justify-center gap-2" onClick={toggleMobileMenu}>
            <Calculator className="h-5 w-5" />
            Calculateur
          </Link>
          <Link to="/community" className="text-lg font-medium py-2 w-full border-b border-gray-100 hover:text-eco-green flex items-center justify-center gap-2" onClick={toggleMobileMenu}>
            <Users className="h-5 w-5" />
            Communauté
          </Link>
          <Link 
            to="/rewards" 
            className="text-lg font-medium py-2 w-full border-b border-gray-100 hover:text-eco-green flex items-center justify-center gap-2" 
            onClick={toggleMobileMenu}
          >
            <Award className="h-5 w-5" />
            Récompenses
          </Link>
          <Link 
            to="/profile" 
            className="text-lg font-medium py-2 w-full border-b border-gray-100 hover:text-eco-green flex items-center justify-center gap-2" 
            onClick={toggleMobileMenu}
          >
            <User className="h-5 w-5" />
            Profil
          </Link>
          <Link 
            to="/notifications" 
            className="text-lg font-medium py-2 w-full border-b border-gray-100 hover:text-eco-green flex items-center justify-center gap-2" 
            onClick={toggleMobileMenu}
          >
            <Bell className="h-5 w-5" />
            Notifications
          </Link>
          <Link 
            to="/admin" 
            className="text-lg font-medium py-2 w-full border-b border-gray-100 hover:text-eco-green flex items-center justify-center gap-2" 
            onClick={toggleMobileMenu}
          >
            <Settings className="h-5 w-5" />
            Admin
          </Link>
          
          <div className="flex flex-col w-full space-y-3 pt-4">
            <Link to="/signin" onClick={toggleMobileMenu}>
              <Button variant="ghost" className="w-full py-2 rounded-full hover:bg-eco-light-green hover:text-eco-green">
                Connexion
              </Button>
            </Link>
            <Link to="/signup" onClick={toggleMobileMenu}>
              <Button className="w-full py-2 rounded-full bg-eco-green hover:bg-eco-dark-green text-white">
                Inscription
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
