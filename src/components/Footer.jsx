import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">ER-Torrent</h3>
            <p className="footer-description">
              A modern, open-source torrent client built with Electron and React
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#downloads">Downloads</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#">Documentation</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Community</h4>
            <ul className="footer-links">
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Report Issues</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">License</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 ER-Torrent. Built with ❤️ by the ER-Torrent Team</p>
          <p className="footer-tech">Powered by Electron • React • WebTorrent</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
