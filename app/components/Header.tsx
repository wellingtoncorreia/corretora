'use client';
import { Phone, ChevronDown, Menu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useEffect } from 'react';
import './header.css';

// Registra o plugin do GSAP apenas no lado do cliente
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollToPlugin);
}

export function Header() {

  // Função que intercepta o clique na âncora e executa o scroll suave com GSAP
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Se o destino for o topo da página (#top)
    if (targetId === '#top') {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: 0 },
        ease: 'power2.inOut',
      });
      return;
    }

    // Procura o elemento na página e faz o tween para ele
    const element = document.querySelector(targetId);
    if (element) {
      gsap.to(window, {
        duration: 1.2, // Duração em segundos (quanto maior, mais suave/lento)
        scrollTo: { 
          y: element, 
          offsetY: 80 // Compensa a altura do menu fixo para o título não ficar escondido
        },
        ease: 'power2.inOut', // Curva de aceleração elegante
      });
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={(e) => handleScrollTo(e as any, '#top')} style={{ cursor: 'pointer' }}>
          <span>DEBORAH</span>
          <span>SUMEY</span>
        </div>
        
        <nav className="nav-desktop">
          <a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="nav-item">About Us</a>
          <a href="#stats" onClick={(e) => handleScrollTo(e, '#stats')} className="nav-item">stats</a>
          <a href="#latest" onClick={(e) => handleScrollTo(e, '#latest')} className="nav-item">Property </a>
          <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="nav-item">Contact Us</a>
        </nav>

        <div className="cta-desktop">
          <div className="phone-contact">
            <Phone size={16} className="phone-icon" />
            <span>+1 352 446 7959</span>
          </div>
          <button 
            onClick={(e) => handleScrollTo(e as any, '#contact')} 
            className="btn-primary"
          >
            Get In Touch &gt;
          </button>
        </div>

        <button className="menu-mobile">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
}