import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OurProducts from './components/OurProducts';
import PifuDifference from './components/PifuDifference';
import KeyIngredients from './components/KeyIngredients';
import DailyRoutine from './components/DailyRoutine';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="pifu-app">
      {/* Sticky Premium Header */}
      <Header />

      {/* Main Campaign Landing Flow */}
      <main id="main-content">
        <HeroSection />

        {/* Our Products Section */}
        <OurProducts />

        {/* The PIFU Difference Section */}
        <PifuDifference />

        {/* Key Ingredients Section */}
        <KeyIngredients />

        {/* Your Daily Skincare Routine Section */}
        <DailyRoutine />

        {/* Stay Updated with PIFU Newsletter */}
        <Newsletter />
      </main>

      {/* Main Footer */}
      <Footer />
    </div>
  );
}



