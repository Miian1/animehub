
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white py-8 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-bold text-[#e94560] mb-4">About AnimeHub</h3>
          <p className="text-sm text-gray-400">
            Your ultimate destination for anime streaming, news, and community. Discover thousands of anime titles and join our growing community.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#e94560] mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-300 hover:text-[#e94560]">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#e94560]">Popular Anime</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#e94560]">New Releases</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#e94560] mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="text-gray-300 hover:text-[#e94560]">Help Center</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#e94560]">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-300 hover:text-[#e94560]">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex justify-center space-x-6 mt-8">
        <a href="#" className="text-gray-300 hover:text-[#e94560] text-2xl"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-gray-300 hover:text-[#e94560] text-2xl"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-gray-300 hover:text-[#e94560] text-2xl"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-gray-300 hover:text-[#e94560] text-2xl"><i className="fab fa-discord"></i></a>
      </div>
      <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} AnimeHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
