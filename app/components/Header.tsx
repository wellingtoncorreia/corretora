'use client';
import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './header.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin);
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    
    setIsMenuOpen(false);
    
    if (targetId === '#top') {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: 0 },
        ease: 'power2.inOut',
      });
      return;
    }

    const element = document.querySelector(targetId);
    if (element) {
      gsap.to(window, {
        duration: 1.2, 
        scrollTo: { 
          y: element, 
          offsetY: 80 
        },
        ease: 'power2.inOut', 
      });
    }
  };

  // A classe 'relative' no header abaixo é crucial para o menu mobile ancorar corretamente
  return (
    <header className="header relative">
      <div className="header-content">
        <div className="logo" onClick={(e) => handleScrollTo(e, '#top')} style={{ cursor: 'pointer' }}>
          <span>DEBORAH</span>
          <span>SUMEY</span>
        </div>
        
        <nav className="nav-desktop">
          <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="nav-item">About Us</a>
          <a href="#stats" onClick={(e) => handleScrollTo(e, '#stats')} className="nav-item">Stats</a>
          <a href="#latest" onClick={(e) => handleScrollTo(e, '#latest')} className="nav-item">Property</a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="nav-item">Contact Us</a>
        </nav>

        <div className="cta-desktop">
          <div className="phone-contact">
            <Phone size={16} className="phone-icon" />
            <span>+1 352 446 7959</span>
          </div>
          <button 
            onClick={(e) => handleScrollTo(e, '#contact')} 
            className="btn-primary"
          >
            Get In Touch &gt;
          </button>
        </div>

        <button 
          className="menu-mobile"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0b0f19] flex flex-col p-6 shadow-xl border-t border-gray-800 z-50 lg:hidden">
          <nav className="flex flex-col gap-6 text-white text-lg font-medium">
            <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-yellow-500 transition-colors">About Us</a>
            <a href="#stats" onClick={(e) => handleScrollTo(e, '#stats')} className="hover:text-yellow-500 transition-colors">Stats</a>
            <a href="#latest" onClick={(e) => handleScrollTo(e, '#latest')} className="hover:text-yellow-500 transition-colors">Property</a>
            <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-yellow-500 transition-colors">Contact Us</a>
            
            <div className="flex items-center gap-2 text-yellow-500 mt-4 pt-6 border-t border-gray-800">
              <Phone size={18} />
              <span>+1 352 446 7959</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}