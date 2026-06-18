import React from 'react';
import PhoneMockup from './PhoneMockup';
import myImage from '../assets/src.jpeg';
import { GooglePlayIcon, AppleIcon } from './AppStoreBadge';

export default function DownloadSection() {
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.savemom.alloconnect"; // Replace with your actual link

  return (
    <section id="download" className="relative bg-gradient-to-br from-primary-dark to-primary text-white py-20 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        {/* Main Punchline */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
          Your data. Your terminal. Your terms.
        </h2>

        {/* Sub-headline */}
        <p className="text-lg mb-12 text-white/90 max-w-xl mx-auto leading-relaxed">
          Download Allokonnect free — no subscription, no hidden fees. Complete, 
          caring support for your secure digital ecosystem.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 max-w-sm mx-auto mb-16">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-white text-dark rounded-full font-bold px-8 py-4 hover:bg-gray-100 transition-all shadow-lg"
          >
            <GooglePlayIcon />
            Download on Google Play
          </a>
          
          <button
            type="button"
            disabled
            className="inline-flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white rounded-full font-bold px-8 py-4 cursor-not-allowed opacity-70"
          >
            <AppleIcon />
            Coming Soon — App Store
          </button>
        </div>
        
      </div>
    </section>
  );
}