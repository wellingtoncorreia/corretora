// src/hooks/useProperties.ts
'use client';
import { useState, useEffect } from 'react';

// 1. Interface para o TypeScript saber o formato dos dados
export interface IProperty {
  id: string;
  title: string;
  price: string;
  image: string;
  category: string;
  badgeType: 'Popular' | 'New House' | 'Best Deals';
}

// 2. Nossos dados mokados com imagens e preços baseados no seu layout
const mockProperties: IProperty[] = [
  // HOUSES
  { id: '1', title: 'Roselands House', price: '$ 35.000.000', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'House', badgeType: 'Popular' },
  { id: '2', title: 'The Old Lighthouse', price: '$ 44.000.000', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'House', badgeType: 'Best Deals' },
  { id: '3', title: 'Cosmo\'s House', price: '$ 22.000.000', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'House', badgeType: 'Popular' },
  { id: '4', title: 'Blue Ridge Estate', price: '$ 18.500.000', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'House', badgeType: 'New House' },
  { id: '5', title: 'Sunset Boulevard', price: '$ 28.000.000', image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'House', badgeType: 'Best Deals' },
  
  // VILLAS
  { id: '6', title: 'Woodlandside', price: '$ 20.000.000', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Villa', badgeType: 'New House' },
  { id: '7', title: 'Oceanview Villa', price: '$ 55.000.000', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Villa', badgeType: 'Popular' },
  
  // APARTMENTS
  { id: '8', title: 'Downtown Penthouse', price: '$ 12.000.000', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Apartment', badgeType: 'Popular' },
  { id: '9', title: 'Luxury Loft', price: '$ 8.500.000', image: 'https://images.unsplash.com/photo-1502672260266-1c1de2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', category: 'Apartment', badgeType: 'New House' },
];

// 3. O Hook em si
export const useProperties = () => {
  const [properties, setProperties] = useState<IProperty[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        
        // FUTURO: Quando o backend estiver pronto, você usará o axios aqui:
        // const response = await api.get('/properties');
        // setProperties(response.data);
        
        // PRESENTE: Simulando o tempo de resposta de uma API (800ms)
        setTimeout(() => {
          setProperties(mockProperties);
          setLoading(false);
        }, 800);

      } catch (error) {
        console.error("Erro ao buscar propriedades:", error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return { properties, loading };
};