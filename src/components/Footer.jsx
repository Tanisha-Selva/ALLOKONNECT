import { HeartPulse } from 'lucide-react';

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TwitterIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function YouTubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function Footer() {
  const handleScrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <HeartPulse className="text-primary w-7 h-7" aria-hidden="true" />
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              AlloKonnect
            </span>
          </div>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xs">
            Every Connection. One Secure Ecosystem.</p>
          <div className="flex items-center gap-4 pt-2">
            <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="Facebook">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="Instagram">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="Twitter">
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="YouTube">
              <YouTubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading font-bold text-sm tracking-wider text-white uppercase">App</h4>
          <ul role="list" className="space-y-2 text-sm text-muted">
            <li><a href="#features" onClick={(e) => handleScrollTo(e, '#features')} className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#how-it-works" onClick={(e) => handleScrollTo(e, '#how-it-works')} className="hover:text-primary transition-colors">How It Works</a></li>
            <li><a href="#screenshots" onClick={(e) => handleScrollTo(e, '#screenshots')} className="hover:text-primary transition-colors">Screenshots</a></li>
            <li><a href="#download" onClick={(e) => handleScrollTo(e, '#download')} className="hover:text-primary transition-colors">Download</a></li>
            <li><a href="#faq" onClick={(e) => handleScrollTo(e, '#faq')} className="hover:text-primary transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading font-bold text-sm tracking-wider text-white uppercase">Company</h4>
          <ul role="list" className="space-y-2 text-sm text-muted">
            <li><a href="#about" onClick={(e) => handleScrollTo(e, '#about')} className="hover:text-primary transition-colors">About Savemom</a></li>
            <li><a href="https://savemom.in/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="https://savemom.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="mailto:admin@savemom.app" className="hover:text-primary transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading font-bold text-sm tracking-wider text-white uppercase">Contact</h4>
          <p className="text-sm text-muted leading-relaxed">
            Door No. 38, Arunachala Arcade,<br />
            TPK Road, Pasumalai, Madurai,<br />
            Tamil Nadu 625004
          </p>
          <div className="text-sm text-muted space-y-1">
            <p>
              <a href="mailto:admin@savemom.app" className="text-white hover:text-primary transition-colors">
                admin@savemom.app
              </a>
            </p>
            <p>
              <a href="tel:+918095207092" className="text-white hover:text-primary transition-colors">
                +91 80952 07092
              </a>
            </p>
            <p>
              <a href="https://savemom.in" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                savemom.in
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
        <p>© 2026 Savemom Private Limited. All rights reserved.</p>
        <p>Made with ❤️ in Madurai, India</p>
      </div>
    </footer>
  );
}
