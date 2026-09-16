import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-[#1a1b1e] text-white pt-16 pb-8 px-6" id='contact'>
      
      {/* 1. Header do Footer (Endereço, Logo e Telefone) */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-700 pb-12 text-center md:text-left gap-8 md:gap-0">
        
        <div className="md:w-1/3">
          <p className="text-gray-400 mb-2 font-medium">Address</p>
          <p className="text-sm leading-relaxed text-gray-300">
            1234 SE 16th Ave<br />
            Building 200 Ocala, FL<br />
            34471
          </p>
        </div>
        
        <div className="md:w-1/3 flex justify-center">
          <div className="text-3xl font-serif text-yellow-500 font-bold flex flex-col leading-none text-center tracking-wider">
            <span>DEBORAH</span>
            <span>SUMEY</span>
          </div>
        </div>

        <div className="md:w-1/3 md:text-right">
          <p className="text-sm leading-relaxed text-gray-300">
            T: 352-446-7959<br />
            F: 352-446-7959<br />
            E: info@deborahsumey.com
          </p>
        </div>
      </div>

      {/* 2. Miolo do Footer (Redes Sociais, Newsletter e Copyright) */}
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <p className="mb-6 text-sm font-medium tracking-wide">Contact with us</p>
        
        {/* Redes Sociais */}
        <div className="flex space-x-6 mb-12">
          <FaFacebookF className="cursor-pointer hover:text-yellow-500 transition text-lg" />
          <FaInstagram className="cursor-pointer hover:text-yellow-500 transition text-xl" />
          <FaLinkedinIn className="cursor-pointer hover:text-yellow-500 transition text-xl" />
          <FaYoutube className="cursor-pointer hover:text-yellow-500 transition text-xl" />
        </div>

        {/* Caixa da E-newsletter (CORRIGIDA AQUI) */}
        {/* Adicionado flex-col no mobile e flex-row no sm: para o botão não quebrar a tela */}
        <div className="w-full max-w-2xl flex flex-col sm:flex-row items-center bg-[#2a2b2e] sm:rounded-full rounded-2xl p-2 mb-16 gap-3 sm:gap-0">
          
          <span className="sm:pl-4 text-sm text-gray-400 whitespace-nowrap pt-2 sm:pt-0">
            Subscribe to our E-newsletter
          </span>
          
          <input 
            type="email" 
            placeholder="E-mail" 
            className="w-full sm:flex-1 bg-transparent border-none outline-none text-white px-4 py-2 sm:py-0 text-sm text-center sm:text-left" 
          />
          
          <button className="w-full sm:w-auto bg-white text-black px-8 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
            Subscribe
          </button>
        </div>

        {/* Linha Final de Copyright */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 pt-6 border-t border-gray-800 gap-4 sm:gap-0">
          <p>Copyright © 2026 DBPL. All Rights Reserved.</p>
          <div className="space-x-6">
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}