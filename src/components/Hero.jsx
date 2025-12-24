import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="logo-container">
          <div className="orbit-ring"></div>
          <div className="orbit-ring orbit-ring-2"></div>
          <div className="logo-center">
            <svg viewBox="0 0 100 100" className="logo-icon">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M50 20 L50 80 M35 35 L50 50 L65 35 M35 65 L50 50 L65 65" 
                    stroke="currentColor" strokeWidth="3" fill="none"/>
            </svg>
          </div>
        </div>
        
        <h1 className="hero-title">
          <span className="title-er">ER</span>
          <span className="title-dash">-</span>
          <span className="title-torrent">Torrent</span>
        </h1>
        
        <p className="hero-subtitle">Electron Torrent Client</p>
        
        <p className="hero-description">
          A powerful, modern torrent client built with Electron and React,
          <br />
          harnessing the WebTorrent protocol for seamless P2P file sharing
        </p>
        
        <div className="hero-cta">
          <a href="#downloads" className="btn btn-primary">
            <span>Download Now</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
          </a>
          <a href="#features" className="btn btn-secondary">
            <span>Explore Features</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="hero-overlay"></div>
    </section>
  );
}

export default Hero;
