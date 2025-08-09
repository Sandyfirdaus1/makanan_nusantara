import React from "react";
import logo from "../assets/logo_utama.png";

const Navbar = ({ onCartClick, cartCount }) => (
  <nav className="flex items-center justify-between px-4 py-3 bg-white shadow-md sticky top-0 z-10">
    <div className="flex items-center gap-2">
      <img src={logo} alt="Logo" className="h-8 w-8 object-contain rounded" />
      <span className="font-bold text-lg md:text-2xl text-emerald-700">
        Rasa Nusantara
      </span>
    </div>
    <button onClick={onCartClick} className="relative">
      <span className="text-2xl">🛒</span>
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
          {cartCount}
        </span>
      )}
    </button>
  </nav>
);

export default Navbar;
