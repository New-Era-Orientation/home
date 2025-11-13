
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-8 md:px-12 backdrop-blur-sm bg-slate-900/50 border-b border-slate-700/50 sticky top-0 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-black tracking-widest text-white uppercase">
          NEW ERA ORIENTATION
        </h1>
        <nav>
          <a
            href="/blog/"
            className="text-base font-medium text-gray-300 hover:text-blue-400 transition-colors duration-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Tài liệu
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
