import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OurProducts from './components/OurProducts';
import PifuDifference from './components/PifuDifference';
import './App.css';

export default function App() {
  return (
    <div className="pifu-app">
      {/* Sticky Premium Header */}
      <Header />

      {/* Main Campaign Hero Section */}
      <main id="main-content">
        <HeroSection />

        {/* Our Products Section */}
        <OurProducts />

        {/* The PIFU Difference Section */}
        <PifuDifference />
      </main>
    </div>
  );
}

