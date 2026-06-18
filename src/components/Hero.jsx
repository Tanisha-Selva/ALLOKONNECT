import React from 'react';
import PhoneMockup from './PhoneMockup';

export default function Hero() {
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.savemom.alloconnect";

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-light/30 via-bg-soft to-primary/10 pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Decorative background mesh */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#EFF6FF_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Text Column */}
          <div className="space-y-6 lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-light px-3 py-1 font-mono text-xs font-semibold text-primary-dark">
              <span>NOW AVAILABLE ON ANDROID</span>
              <span className="h-1 w-1 rounded-full bg-primary animate-ping" />
            </div>
            
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-dark sm:text-5xl lg:text-6xl leading-[1.1]">
              Every Connection. <br />
              One Secure <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ecosystem.</span>
            </h1>
            
            <p className="font-body text-lg leading-relaxed text-body max-w-xl">
              Allokonnect bridges the gap between individuals, family networks, and daily digital resources. Manage secure profiles, organize essential records, and interact effortlessly—all from a single dashboard.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a href={playStoreLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-heading text-base font-bold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg active:scale-[0.98]">
                Get it on Google Play
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-border bg-bg-soft px-8 py-4 font-heading text-base font-semibold text-dark transition-colors hover:bg-white hover:text-primary">
                Explore Features
              </a>
            </div>
          </div>
          
          {/* Right Visual Column: Phone Mockup + 3 Aligned Cards */}
          <div className="relative mx-auto w-full lg:col-span-6 flex items-center justify-center gap-8">
            
            {/* Phone Mockup */}
            <div className="relative z-10 scale-90">
              <PhoneMockup src="/assets/screen1.png" glow />
            </div>

            {/* 3 Stacked Cards Column */}
            <div className="hidden xl:flex flex-col gap-4 w-64">
              {/* Card 1 */}
              <div className="bg-teal-50 p-5 rounded-2xl shadow-lg border border-primary/10">
                <div className="w-8 h-8 bg-primary-light rounded-lg mb-3" />
                <h4 className="font-bold text-sm text-dark">Secure Vault</h4>
                <p className="text-[11px] text-body">Encrypted record storage.</p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-teal-50 p-5 rounded-2xl shadow-lg border border-primary/10">
                <div className="w-8 h-8 bg-primary-light rounded-lg mb-3" />
                <h4 className="font-bold text-sm text-dark">Family Sync</h4>
                <p className="text-[11px] text-body">Real-time local connection.</p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-teal-50 p-5 rounded-2xl shadow-lg border border-primary/10">
                <div className="w-8 h-8 bg-primary-light rounded-lg mb-3" />
                <h4 className="font-bold text-sm text-dark">Offline Access</h4>
                <p className="text-[11px] text-body">Work without internet.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}