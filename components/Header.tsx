'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCTAClick = () => {
    window.open('https://tr.ee/ezLrPu6yQI', '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className={`text-xl md:text-2xl font-bold transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              마이중개사
            </h1>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-all font-medium ${
                isScrolled
                  ? 'text-gray-900 hover:text-primary'
                  : 'text-white hover:text-white hover:scale-105 hover:drop-shadow-lg'
              }`}
            >
              서비스 소개
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className={`transition-all font-medium ${
                isScrolled
                  ? 'text-gray-900 hover:text-primary'
                  : 'text-white hover:text-white hover:scale-105 hover:drop-shadow-lg'
              }`}
            >
              진행 과정
            </button>
            <button
              onClick={() => scrollToSection('credentials')}
              className={`transition-all font-medium ${
                isScrolled
                  ? 'text-gray-900 hover:text-primary'
                  : 'text-white hover:text-white hover:scale-105 hover:drop-shadow-lg'
              }`}
            >
              전문성
            </button>
            <button
              onClick={() => scrollToSection('area')}
              className={`transition-all font-medium ${
                isScrolled
                  ? 'text-gray-900 hover:text-primary'
                  : 'text-white hover:text-white hover:scale-105 hover:drop-shadow-lg'
              }`}
            >
              서비스 지역
            </button>
          </div>

          {/* CTA Button */}
          <div>
            <button
              onClick={handleCTAClick}
              className={`text-sm md:text-base py-2 md:py-3 px-4 md:px-6 font-bold rounded-soft transition-all duration-200 hover:scale-105 ${
                isScrolled
                  ? 'bg-primary hover:bg-primary-dark text-white shadow-soft'
                  : 'bg-white hover:bg-gray-50 text-primary shadow-lg hover:shadow-xl'
              }`}
            >
              무료 상담 신청
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
