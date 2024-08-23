// src/components/Header.jsx
import React from 'react';
import logo from '/assets/brightlogo.svg'

export default function Header() {
  return (
    <header className="px-4 py-2 bg-transparent shadow-md fixed w-full top-0 z-50">
      <div className="container flex justify-between items-center">
        <img className=" h-9 text-sm font-bold text-gray-800" src={logo} alt="" />
        <nav className=" space-x-4">
          <a href="#hero" className="text-071d3e hover:text-orange-500">Home</a>
          <a href="#about" className="text-071d3e hover:text-orange-500">About</a>
          <a href="#services" className="text-071d3e hover:text-orange-500">Services</a>
          <a href="#contact" className="text-071d3e hover:text-orange-500">Contact</a>
        </nav>
      </div>
    </header>
  );
}
