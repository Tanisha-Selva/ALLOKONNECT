import React from 'react';
import { features } from '../data/features.js';

const IconSelector = ({ name }) => {
  const baseClasses = "h-6 w-6";
  switch (name) {
    case "QrCode":
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
          <path d="M7 7h.01M17 7h.01M17 17h.01M7 17h.01" />
        </svg>
      );
    case "MessageSquare":
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "Users":
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "FolderHeart":
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          <path d="M12 11.5c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1L12 16l-2.1-2.4c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0z" />
        </svg>
      );
    case "CalendarHeart":
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          <path d="M12 14c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1L12 18.5l-2.1-2.4c-.6-.6-.6-1.5 0-2.1.6-.6 1.5-.6 2.1 0z" />
        </svg>
      );
    case "Bot":
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4M8 16h.01M16 16h.01" />
        </svg>
      );
    case "CheckSquare":
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      );
    case "HardDrive":
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="12" x2="2" y2="12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /><line x1="6" y1="16" x2="6.01" y2="16" /><line x1="10" y1="16" x2="10.01" y2="16" />
        </svg>
      );
    case "Watch":
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="7" /><polyline points="12 9 12 12 14 12" /><path d="M16.51 5.49L15 2H9L7.49 5.49M7.49 18.51L9 22h6l1.51-3.51" />
        </svg>
      );
    default:
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

export default function Features() {
  const colorMap = {
    primary: {
      bg: "bg-teal-50",
      text: "text-primary",
      border: "hover:border-primary/30",
      badge: "bg-primary-light text-primary-dark"
    },
    secondary: {
      bg: "bg-indigo-50",
      text: "text-secondary",
      border: "hover:border-secondary/30",
      badge: "bg-secondary-light text-secondary"
    },
    accent: {
      bg: "bg-amber-50",
      text: "text-accent",
      border: "hover:border-accent/30",
      badge: "bg-amber-100 text-amber-800"
    }
  };

  return (
    <section id="features" className="bg-teal-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block rounded-full bg-primary-light px-3 py-1 font-mono text-xs font-semibold text-primary-dark">
            PRODUCT CAPABILITIES
          </span>
          <h2 className="font-display text-3xl font-extrabold text-dark sm:text-4xl lg:text-5xl tracking-tight">
            Comprehensive Personal Ecosystem
          </h2>
          <p className="font-body text-base text-muted max-w-2xl mx-auto">
            Discover how Allokonnect bundles communication, networking tools, document storage, and lifestyle synchronization smoothly into one integrated platform.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const variant = colorMap[feature.color] || colorMap.primary;
            const isWideCard = index === 0 || index === 5 || index === 7;

            return (
              <div 
                key={feature.id}
                className={`group relative rounded-2xl border border-border bg-white/90 p-6 shadow-sm transition-all duration-300 hover:shadow-md ${variant.border} ${
                  isWideCard ? 'sm:col-span-2' : 'sm:col-span-1'
                }`}
              >
                <div className="flex flex-col h-full justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-105 ${variant.bg} ${variant.text}`}>
                        <IconSelector name={feature.icon} />
                      </div>
                      <span className={`rounded-full px-2.5 py-0.5 font-heading text-xs font-semibold ${variant.badge}`}>
                        {feature.badge}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-heading text-xl font-bold text-dark group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="font-body text-sm leading-relaxed text-body text-justify">
                        {feature.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-dashed border-border flex items-center justify-between text-xs font-mono text-muted">
                    <span>ID: ALLOK-{feature.id.toUpperCase()}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary font-bold">
                      Active Module &rarr;
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}