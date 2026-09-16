'use client';
import { useState, useRef } from 'react';
import { useProperties } from '../src/hooks/useProperties';
import { FaHome, FaBuilding, FaRegBuilding, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './latestListings.css';

export function LatestListings() {
  const { properties, loading } = useProperties();
  
  // 1. Estado para o Filtro Ativo
  const [activeFilter, setActiveFilter] = useState('House');
  
  // 2. Referência para o Carrossel
  const carouselRef = useRef<HTMLDivElement>(null);

  // 3. Lógica do Filtro
  const filteredProperties = properties.filter(item => item.category === activeFilter);

  // 4. Lógica de transição do Carrossel (Setas)
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 350; // Distância aproximada de um card para rolar
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const getBadgeClass = (type: string) => {
    if (type === 'Popular') return 'popular';
    if (type === 'New House') return 'new-house';
    return 'best-deals';
  };

  return (
    <section className="w-full py-20 px-6 bg-[#f8f9fc]" id='latest'>
      <div className="max-w-7xl mx-auto overflow-hidden">
        
        <h2 className="title-main text-4xl font-bold text-center mb-12">
          Latest Listings
        </h2>

        <div className="flex flex-col xl:flex-row justify-between items-end mb-10 gap-6 xl:gap-0">
          
          <div className="w-full xl:w-auto">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-[1px] bg-yellow-500"></div>
              <p className="subtitle-recommendation font-medium text-sm">Our Recommendation</p>
            </div>
            <h3 className="title-main text-3xl font-bold">Featured {activeFilter}</h3>
          </div>
          
          {/* Botões de Filtro com Funcionalidade */}
          <div className="flex space-x-4">
            <button 
              onClick={() => setActiveFilter('House')}
              className={`filter-btn flex items-center gap-2 ${activeFilter === 'House' ? 'active' : 'inactive'}`}
            >
              <FaHome size={16} /> <span>House</span>
            </button>
            <button 
              onClick={() => setActiveFilter('Villa')}
              className={`filter-btn flex items-center gap-2 ${activeFilter === 'Villa' ? 'active' : 'inactive'}`}
            >
              <FaBuilding size={16} /> <span>Villa</span>
            </button>
            <button 
              onClick={() => setActiveFilter('Apartment')}
              className={`filter-btn flex items-center gap-2 ${activeFilter === 'Apartment' ? 'active' : 'inactive'}`}
            >
              <FaRegBuilding size={16} /> <span>Apartment</span>
            </button>
          </div>
          
          {/* Setas do Carrossel com Funcionalidade */}
          <div className="flex w-full xl:w-auto justify-end space-x-4">
            <button onClick={() => scroll('left')} className="nav-btn prev">
              <FaChevronLeft size={16} />
            </button>
            <button onClick={() => scroll('right')} className="nav-btn next gold-metallic-gradient">
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <p className="text-gray-500 font-medium">Buscando imóveis...</p>
          </div>
        ) : (
          /* Container do Carrossel */
          <div 
            ref={carouselRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar py-4"
          >
            {filteredProperties.length > 0 ? (
              filteredProperties.map((item) => {
                const badgeTheme = getBadgeClass(item.badgeType);

                return (
                  <div 
                    key={item.id} 
                    /* Largura fixa do Card para o Carrossel funcionar */
                    className="property-card cursor-pointer flex flex-col snap-start min-w-[280px] lg:min-w-[300px] flex-shrink-0"
                  >
                    
                    <div className="property-img-wrapper relative mb-5">
                      <img src={item.image} alt={item.title} />
                      
                      <div className="absolute bottom-4 left-4">
                        <span className={`badge flex items-center gap-1.5 ${badgeTheme}`}>
                          <span className="badge-dot"></span>
                          {item.badgeType}
                        </span>
                      </div>
                    </div>

                    <h3 className="property-title font-bold mb-1">{item.title}</h3>
                    <p className="property-price font-medium">{item.price}</p>
                    
                  </div>
                );
              })
            ) : (
              <div className="w-full text-center py-10">
                <p className="text-gray-500 font-medium">Nenhum imóvel disponível nesta categoria no momento.</p>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}