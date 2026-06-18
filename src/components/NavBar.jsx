import React, { useState } from 'react';
import logo from '../assets/my logo.jpeg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.savemom.alloconnect";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-3">
            <img 
              src={logo}
              alt="AlloKonnect Logo"
              className="h-10 w-10 object-cover rounded-lg" 
            />
            <div className="font-display text-2xl font-bold text-dark tracking-tight">
              Allo<span className="text-primary">konnect</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-5 font-heading text-sm font-medium">
            <a href="#features" className="text-dark transition-colors hover:text-primary">Features</a>
            <a href="#how-it-works" className="text-dark transition-colors hover:text-primary">How it works</a>
            <a href="#screenshots" className="text-dark transition-colors hover:text-primary">Preview</a>
            <a href="#faqs" className="text-dark transition-colors hover:text-primary">FAQ</a>
            
            <a 
              href={playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full bg-primary px-5 py-2 text-white transition-all hover:bg-primary-dark"
            >
              Download
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-dark transition-colors hover:bg-bg-soft"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="border-t border-border bg-white px-4 py-4 md:hidden font-heading text-base font-semibold space-y-2 shadow-inner">
          <a href="#features" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-dark">Features</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-dark">How it works</a>
        
          <a href="#screenshots" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-dark">Preview</a>
          <a href="#faqs" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-dark">FAQ</a>
          <a href={playStoreLink} className="block mt-4 text-center rounded-xl bg-primary py-3 text-white">Download</a>
        </div>
      )}
    </nav>
  );
}