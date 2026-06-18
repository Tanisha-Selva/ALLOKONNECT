import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Screenshots from './components/Screenshots';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Benefits from './components/Benefits';
import Downloads from './components/Download';

function App() {
  return (
    <div className="min-h-screen bg-bg-soft text-body selection:bg-primary-light selection:text-primary-dark">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Interactive Network Banner */}
      <Hero />
      
      {/* 3. The 9-Module Bento Grid */}
      <Features />
      
      {/* 4. Progressive Onboarding Timeline */}
      <HowItWorks />
      <Benefits />
      
      {/* 5. Mobile Interface Gallery */}
      <Screenshots />
      
      {/* 6. Frequently Asked Questions */}
      <FAQs />
      <Downloads />

      {/* 7. Footer */}
      <Footer />
    </div>
  );
}

export default App;