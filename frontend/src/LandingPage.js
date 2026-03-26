import React, { useState, useRef, useEffect } from 'react';
import './LandingPage.css';

const logo = process.env.PUBLIC_URL + '/logo.png';
const pic1 = process.env.PUBLIC_URL + '/pic1.png';
const pic2 = process.env.PUBLIC_URL + '/pic2.png';

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  // refs for main sections so nav can scroll to them
  const featuresRef = useRef(null);
  const howRef = useRef(null);
  const productsRef = useRef(null);
  const ctaRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  const scrollToRef = (ref) => {
    if (!ref || !ref.current) return;
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeMenu();
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Close mobile menu when resizing to large screens
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [menuOpen]);

  return (
    <div className="landing-root">
      <header className="landing-header">
        <div className="lp-header-left">
          <img src={logo} alt="GLAM logo" className="lp-top-logo" />
        </div>

        <button
          className={`nav-toggle ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span className="hamburger" aria-hidden="true"></span>
        </button>

        <nav className={`lp-nav ${menuOpen ? 'mobile-open' : ''}`} role="navigation" aria-label="Main navigation">
          <div className="nav-inner">
            <button type="button" className="nav-link" onClick={() => scrollToRef(featuresRef)}>Features</button>
            <button type="button" className="nav-link" onClick={() => scrollToRef(howRef)}>How It Works</button>
            <button type="button" className="nav-link" onClick={() => scrollToRef(productsRef)}>Products</button>
            <button type="button" className="btn signin" onClick={() => { window.location.hash = '/signin'; closeMenu(); }}>Sign In</button>
            <button type="button" className="btn primary" onClick={() => scrollToRef(ctaRef)}>Get Started</button>
          </div>
        </nav>

      </header>

      <main className="lp-hero" ref={featuresRef}>
        <section className="lp-left">
          <h1 className="lp-title">Every Mug Tells a <span>Story</span></h1>
          <p className="lp-sub">Transform ordinary mugs into extraordinary experiences. Embed videos, photos, and messages that come alive with a simple QR scan.</p>

          <div className="lp-cta">
            <button type="button" className="btn create" onClick={() => scrollToRef(ctaRef)}>Create Your Memory</button>
            <button type="button" className="btn outline" onClick={() => scrollToRef(howRef)}>See How It Works</button>
          </div>

          <div className="lp-stats">
            <div className="stat"><strong>10K+</strong><div className="label">Memories Created</div></div>
            <div className="stat"><strong>50K+</strong><div className="label">QR Scans</div></div>
            <div className="stat"><strong>4.9★</strong><div className="label">User Rating</div></div>
          </div>
        </section>

        <aside className="lp-right">
          <div className="mug-card">
            <img src={pic2} alt="card background" className="mug-bg-img" />
            <img src={pic1} alt="sample mug" className="mug-img" />
          </div>
        </aside>
      </main>

      {/* Features Section (keep ref on wrapper for accurate scroll) */}
      <section className="features-section" ref={featuresRef}>
        <div className="container">
          <h3 className="kicker">FEATURES</h3>
          <h2 className="section-title">Everything You Need to Create</h2>
          <p className="section-sub">A complete toolkit for turning physical products into portals of cherished memories.</p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎥</div>
              <h4>Video Messages</h4>
              <p>Record or upload heartfelt video messages that play instantly when scanned.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🖼️</div>
              <h4>Photo Galleries</h4>
              <p>Create beautiful photo collections that tell your story through images.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎙️</div>
              <h4>Audio Recordings</h4>
              <p>Capture your voice in personal audio messages that bring memories to life.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✉️</div>
              <h4>Digital Letters</h4>
              <p>Write meaningful letters that can be read anytime, anywhere.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔳</div>
              <h4>Unique QR Codes</h4>
              <p>Each product gets a unique QR code linking to its personalized content.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔁</div>
              <h4>Dynamic Content</h4>
              <p>Update your content anytime — the QR code stays the same, the memories evolve.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-section" ref={howRef}>
        <div className="container two-col">
          <div className="how-image">
            <img src={pic2} alt="how it works card" className="how-card-img" />
          </div>
          <div className="how-steps">
            <h3 className="kicker">HOW IT WORKS</h3>
            <h2 className="section-title">Simple as 1–2–3–4</h2>

            <ol className="steps-list">
              <li>
                <div className="step-num">01</div>
                <div className="step-body"><strong>Choose Your Product</strong><p>Select from our range of customizable mugs and products.</p></div>
              </li>
              <li>
                <div className="step-num">02</div>
                <div className="step-body"><strong>Upload Your Memories</strong><p>Add videos, photos, audio recordings, or write a personal letter.</p></div>
              </li>
              <li>
                <div className="step-num">03</div>
                <div className="step-body"><strong>Get Your QR Code</strong><p>A unique QR code is generated and linked to your content.</p></div>
              </li>
              <li>
                <div className="step-num">04</div>
                <div className="step-body"><strong>Share & Surprise</strong><p>Gift the product — scan the QR to reveal memories instantly.</p></div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" ref={ctaRef}>
        <div className="container banner-inner">
          <h2 className="banner-title">Ready to Make Memories Last Forever?</h2>
          <p className="banner-sub">Start creating personalized memory products today. No design skills needed — just your heart and your memories.</p>
          <button className="btn outline banner-btn">Get Started for Free →</button>
        </div>
      </section>

    </div>
  );
}
