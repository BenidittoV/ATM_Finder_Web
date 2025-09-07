import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Home, List } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  // Style helper untuk link di header (desktop)
  const desktopLinkClass = (active: boolean) => [
    'flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors',
    scrolled
      ? active
        ? 'bg-blue-50 text-blue-700'
        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
      : active
        ? 'text-white underline underline-offset-4'
        : 'text-white/90 hover:text-white'
  ].join(' ');

  // Style helper untuk link di mobile bar
  const mobileLinkClass = (active: boolean) => [
    'flex flex-col items-center py-2 px-4 rounded-md text-xs font-medium transition-colors',
    scrolled
      ? active
        ? 'bg-blue-50 text-blue-700'
        : 'text-gray-700'
      : active
        ? 'bg-white/20 text-white'
        : 'text-white/90'
  ].join(' ');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header / Navbar */}
      <header
        className={[
          'sticky top-0 z-50 transition-all duration-300 backdrop-blur-md',
          scrolled
            ? 'bg-white/90 border-b border-gray-200 shadow-sm'
            : 'bg-gradient-to-r from-blue-700/80 via-cyan-700/70 to-emerald-700/60 border-transparent'
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <Link to="/" className="flex items-center">
              <span className="inline-flex items-center justify-center rounded-full p-2 bg-white/20">
                <MapPin className={scrolled ? 'h-6 w-6 text-blue-600' : 'h-6 w-6 text-white'} />
              </span>
              <h1
                className={[
                  'ml-2 text-xl font-bold tracking-tight',
                  scrolled ? 'text-gray-900' : 'text-white'
                ].join(' ')}
              >
                ATM Tracker
              </h1>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-2">
              <Link to="/" className={desktopLinkClass(isActive('/'))}>
                <Home className={scrolled ? 'h-4 w-4' : 'h-4 w-4 text-white'} />
                <span>Beranda</span>
              </Link>
              <Link to="/atm-list" className={desktopLinkClass(isActive('/atm-list'))}>
                <List className={scrolled ? 'h-4 w-4' : 'h-4 w-4 text-white'} />
                <span>Daftar ATM</span>
              </Link>

              {/* CTA Desktop */}
              <Link
                to="/atm-list"
                className={[
                  'ml-2 inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all',
                  scrolled
                    ? 'bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white hover:opacity-95 shadow'
                    : 'bg-white text-blue-700 hover:bg-gray-100 shadow'
                ].join(' ')}
              >
                Cari ATM
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Navigation (di bawah header, ikut warna/kontras) */}
        <nav
          className={[
            'md:hidden transition-colors',
            scrolled ? 'bg-white/90 border-t border-gray-200' : 'bg-transparent'
          ].join(' ')}
        >
          <div className="flex justify-around py-2">
            <Link to="/" className={mobileLinkClass(isActive('/'))}>
              <Home className="h-5 w-5 mb-1" />
              <span>Beranda</span>
            </Link>
            <Link to="/atm-list" className={mobileLinkClass(isActive('/atm-list'))}>
              <List className="h-5 w-5 mb-1" />
              <span>Daftar ATM</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content (beri padding-top kecil kalau perlu) */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-lg font-semibold text-gray-900">ATM Tracker</span>
            </div>
            <p className="text-sm text-gray-600">
              Temukan ATM terdekat dengan status ketersediaan uang tunai dan kondisi keramaian real-time
            </p>
            <div className="mt-4 text-xs text-gray-500">
              © 2025 ATM Tracker. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
