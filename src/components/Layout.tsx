import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Home, List } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-600" />
              <h1 className="ml-2 text-xl font-bold text-gray-900">ATM Tracker</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Home className="h-4 w-4" />
                <span>Beranda</span>
              </Link>
              <Link
                to="/atm-list"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/atm-list') 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <List className="h-4 w-4" />
                <span>Daftar ATM</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav className="md:hidden bg-white border-b border-gray-200">
        <div className="flex justify-around py-2">
          <Link
            to="/"
            className={`flex flex-col items-center py-2 px-4 rounded-md text-xs font-medium transition-colors ${
              isActive('/') 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600'
            }`}
          >
            <Home className="h-5 w-5 mb-1" />
            <span>Beranda</span>
          </Link>
          <Link
            to="/atm-list"
            className={`flex flex-col items-center py-2 px-4 rounded-md text-xs font-medium transition-colors ${
              isActive('/atm-list') 
                ? 'bg-blue-100 text-blue-700' 
                : 'text-gray-600'
            }`}
          >
            <List className="h-5 w-5 mb-1" />
            <span>Daftar ATM</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
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