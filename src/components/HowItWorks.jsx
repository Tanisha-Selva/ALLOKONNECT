import React from 'react';
import { steps } from '../data/steps.js';

const StepIconSelector = ({ name }) => {
  const baseClasses = "h-5 w-5";
  switch (name) {
    case "Download":
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
        </svg>
      );
    case "UserCircle":
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
        </svg>
      );
    case "QrCode":
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    case "LayoutGrid":
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    case "Zap":
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    default:
      return (
        <svg className={baseClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
  }
};

export default function HowItWorks() {
  const variantMap = {
    primary: { bg: "bg-teal-50", text: "text-primary", border: "border-primary/20" },
    secondary: { bg: "bg-indigo-50", text: "text-secondary", border: "border-secondary/20" },
    accent: { bg: "bg-amber-50", text: "text-accent", border: "border-amber-200" }
  };

  return (
    <section id="how-it-works" className="bg-teal-50 py-20 border-t border-primary/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-block rounded-full bg-secondary-light px-3 py-1 font-mono text-xs font-semibold text-secondary">
            ONBOARDING WORKFLOW
          </span>
          <h2 className="font-display text-3xl font-extrabold text-dark sm:text-4xl lg:text-5xl tracking-tight">
            How Allokonnect Coordinates Your World
          </h2>
          <p className="font-body text-base text-muted max-w-2xl mx-auto">
            Get initialized with our lightweight utility stack in minutes. Follow these simple milestones to transition into an integrated profile system.
          </p>
        </div>

        <div className="relative border-l border-dashed border-border ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-5 md:gap-8 space-y-12 md:space-y-0">
          <div className="hidden md:block absolute top-4 left-0 right-0 h-[1px] bg-dashed border-t border-border -z-10" />

          {steps.map((step, idx) => {
            const variant = variantMap[step.color] || variantMap.primary;

            return (
              <div key={step.number} className="relative pl-8 md:pl-0 md:text-center group">
                <div className="absolute -left-[17px] top-0 md:relative md:left-0 md:mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary-light border border-primary/20 shadow-sm group-hover:border-primary transition-colors">
                  <span className="font-mono text-xs font-bold text-primary-dark">{step.number}</span>
                </div>

                <div className="space-y-3">
                  <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl md:mx-auto ${variant.bg} ${variant.text} border ${variant.border}`}>
                    <StepIconSelector name={step.icon} />
                  </div>
                  
                  <h3 className="font-heading text-lg font-bold text-dark tracking-tight">
                    {step.title}
                  </h3>
                  
                  <p className="font-body text-sm leading-relaxed text-body text-justify md:text-center">
                    {step.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-3 -right-4 text-border transform translate-x-1/2">
                    <svg className="h-4 w-4 text-border" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}