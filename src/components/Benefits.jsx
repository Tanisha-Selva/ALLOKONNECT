import React, { useState } from 'react';
import { benefits } from '../data/benefits.js';

export default function Benefits() {
  const [active, setActive] = useState(benefits[0]);

  return (
    <section className="py-24 bg-bg-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive List */}
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-dark tracking-tight">
              Platform Advantages
            </h2>
            <div className="space-y-4">
              {benefits.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActive(item)}
                  className={`w-full p-6 rounded-2xl border-2 transition-all text-left ${
                    active.id === item.id 
                      ? 'border-primary bg-primary-light/10 shadow-sm' 
                      : 'border-transparent hover:bg-bg-soft'
                  }`}
                >
                  <h3 className="font-bold text-lg text-dark">{item.title}</h3>
                  <p className="text-muted mt-1">{item.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="relative rounded-3xl bg-teal-50 p-8 shadow-inner border border-primary/10">
            <img 
              src={active.image} 
              alt={active.title}
              className="w-full h-auto rounded-xl shadow-2xl transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}