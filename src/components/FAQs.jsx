import React, { useState } from 'react';
import { faqs } from '../data/faqs.js';

export default function FAQs() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faqs" className="bg-bg-soft py-20 border-t border-border">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-extrabold text-dark sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="rounded-xl border border-primary/10 bg-white/90 shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="flex w-full items-center justify-between p-6 text-left font-heading font-bold text-dark hover:bg-white/60 transition-colors"
              >
                {faq.question}
                <span className="ml-6 flex-shrink-0">
                  {openId === faq.id ? (
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" /></svg>
                  ) : (
                    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                  )}
                </span>
              </button>
              
              {openId === faq.id && (
                <div className="px-6 pb-6 font-body text-sm text-body leading-relaxed border-t border-border pt-4 animate-in slide-in-from-top-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}