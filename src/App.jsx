import React, { useEffect, useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import Downloads from './components/Downloads';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars for background
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 150; i++) {
        starArray.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 2 + 1,
          animationDelay: Math.random() * 3,
        });
      }
      setStars(starArray);
    };
    generateStars();
  }, []);

  return (
    <div className="app">
      <div className="stars-container">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.animationDelay}s`,
            }}
          />
        ))}
      </div>
      
      <Hero />
      <Features />
      <Downloads />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
