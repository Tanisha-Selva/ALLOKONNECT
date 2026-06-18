import React from 'react';
import { screenshots } from '../data/screenshots.js';

export default function Screenshots() {
  const displayScreenshots = screenshots.slice(0, 6);

  return (
    <section id="screenshots" className="bg-teal-50 py-20 border-t border-primary/20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-display text-3xl font-extrabold text-primary-dark sm:text-4xl">
            App Interface Preview
          </h2>
        </div>

        {/* max-w-5xl and gap-6 make the grid tighter */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {displayScreenshots.map((img) => (
            <div 
              key={img.id} 
              className="group overflow-hidden rounded-xl border border-primary/10 bg-white/90 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              {/* Changed aspect-ratio to 16/18 for a slimmer vertical look */}
              <img 
                src={img.src} 
                alt={img.alt} 
                className="h-full w-full object-cover aspect-[16/18] bg-bg-soft"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}