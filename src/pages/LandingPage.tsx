import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, ArrowRight, Map, Shield, Smartphone } from 'lucide-react';
import { atmData } from '../data/mockData';

export const LandingPage: React.FC = () => {
  const availableAtms = atmData.filter(atm => atm.cashStatus === 'available').length;
  const totalAtms = atmData.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-4 rounded-full">
            <MapPin className="h-12 w-12 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          ATM Availability & <span className="text-blue-600">Crowd Tracker</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Temukan ATM terdekat dengan informasi real-time mengenai ketersediaan uang tunai dan kondisi keramaian. 
          Hemat waktu Anda dengan memilih ATM yang tepat sebelum pergi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/atm-list"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Lihat Daftar ATM
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center transform hover:scale-105 transition-transform duration-200">
          <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
            <DollarSign className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{availableAtms}/{totalAtms}</h3>
          <p className="text-gray-600">ATM dengan uang tersedia</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center transform hover:scale-105 transition-transform duration-200">
          <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
          <p className="text-gray-600">Pemantauan real-time</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 text-center transform hover:scale-105 transition-transform duration-200">
          <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
            <Users className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">5+</h3>
          <p className="text-gray-600">Bank Partner</p>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Fitur Utama</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="bg-blue-100 p-4 rounded-full w-fit mb-6">
              <Map className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Peta Interaktif</h3>
            <p className="text-gray-600 leading-relaxed">
              Visualisasi lokasi ATM dengan peta interaktif yang menunjukkan status ketersediaan secara real-time.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="bg-green-100 p-4 rounded-full w-fit mb-6">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Status Akurat</h3>
            <p className="text-gray-600 leading-relaxed">
              Informasi ketersediaan uang tunai dan tingkat keramaian yang diperbarui secara berkala.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200">
            <div className="bg-purple-100 p-4 rounded-full w-fit mb-6">
              <Smartphone className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Responsif</h3>
            <p className="text-gray-600 leading-relaxed">
              Akses mudah melalui perangkat apapun dengan desain yang responsif dan user-friendly.
            </p>
          </div>
        </div>
      </div>

      {/* Mini Map Section */}
<div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 mb-16">
  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Peta Lokasi ATM</h2>

  <div className="relative rounded-lg overflow-hidden min-h-[420px]">
    {/* Peta Jakarta pakai Google Maps Embed (tanpa API key) */}
    <iframe
      title="Peta Jakarta"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9897.20991149245!2d106.807!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e3d45b7c4d%3A0x1e5866c6f8ff9a6!2sJakarta!5e0!3m2!1sid!2sid!4v0000000000000"
      className="w-full h-[480px] border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />

    {/* Info tengah */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="pointer-events-auto bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Jakarta Area</h3>
        <p className="text-sm text-gray-600 mb-4">
          Menampilkan {atmData?.length ?? 0} lokasi ATM
        </p>
        <Link
          to="/atm-list"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Lihat Semua ATM
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  </div>
</div>


      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Siap Menemukan ATM Terdekat?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Jangan buang waktu mencari ATM yang kosong atau terlalu ramai. Gunakan ATM Tracker untuk pengalaman yang lebih efisien.
        </p>
        <Link
          to="/atm-list"
          className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
        >
          Mulai Sekarang
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};