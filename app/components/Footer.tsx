import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="bg-[#1a1b1e] text-white pt-16 pb-8 px-6" id='contact'>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-700 pb-12">
        <div className="text-center md:text-left mb-8 md:mb-0">
          <p className="text-gray-400 mb-2">Address</p>
          <p className="text-sm">1234 SE 16th Ave<br />Building 200 Ocala, FL<br />34471</p>
        </div>
        
        <div className="text-3xl font-serif text-yellow-500 font-bold flex flex-col leading-none text-center">
          <span>DEBORAH</span>
          <span>SUMEY</span>
        </div>

        <div className="text-center md:text-right mt-8 md:mt-0">
          <p className="text-sm">T: 352-446-7959<br />F: 352-446-7959<br />E: info@deborahsumey.com</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="mb-4 text-sm font-medium">Contact with us</p>
        <div className="flex space-x-6 mb-10">
          <FaFacebookF className="cursor-pointer hover:text-yellow-500 transition text-lg" />
          <FaInstagram className="cursor-pointer hover:text-yellow-500 transition text-xl" />
          <FaLinkedinIn className="cursor-pointer hover:text-yellow-500 transition text-xl" />
          <FaYoutube className="cursor-pointer hover:text-yellow-500 transition text-xl" />
        </div>

        <div className="w-full max-w-2xl flex items-center bg-[#2a2b2e] rounded-full p-2 mb-12">
          <span className="pl-4 text-sm text-gray-400 whitespace-nowrap">Subscribe to our E-newsletter</span>
          <input type="email" placeholder="E-mail" className="flex-1 bg-transparent border-none outline-none text-white px-4 text-sm" />
          <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition">
            Subscribe
          </button>
        </div>

        <div className="w-full flex justify-between text-xs text-gray-500">
          <p>Copyright © 2026 DBPL. All Rights Reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}