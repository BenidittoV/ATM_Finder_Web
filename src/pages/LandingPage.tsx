import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, ArrowRight, Map, Shield, Smartphone } from 'lucide-react';
import { atmData } from '../data/mockData';

export const LandingPage: React.FC = () => {
  const availableAtms = atmData.filter(atm => atm.cashStatus === 'available').length;
  const totalAtms = atmData.length;

  return (
    <div className="relative">
      {/* Decorative background gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-blue-500/25 via-cyan-400/20 to-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-purple-400/20 to-sky-400/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-1 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-emerald-400">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-full shadow-sm">
                <MapPin className="h-12 w-12 text-blue-600" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            ATM Availability &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              Crowd Tracker
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Temukan ATM terdekat dengan informasi real-time mengenai ketersediaan uang tunai dan kondisi keramaian.
            Hemat waktu Anda dengan memilih ATM yang tepat sebelum pergi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/atm-list"
              className="inline-flex items-center px-8 py-4 font-semibold rounded-xl shadow-lg transition-all duration-200
                         bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white hover:opacity-95 hover:shadow-xl
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500"
            >
              Lihat Daftar ATM
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/60 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
            <div className="mx-auto mb-4 w-fit rounded-full p-3 bg-gradient-to-tr from-emerald-100 to-emerald-50 ring-1 ring-emerald-200/60">
              <DollarSign className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">
              {availableAtms}/{totalAtms}
            </h3>
            <p className="text-gray-600">ATM dengan uang tersedia</p>
          </div>

          <div className="group bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/60 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
            <div className="mx-auto mb-4 w-fit rounded-full p-3 bg-gradient-to-tr from-sky-100 to-sky-50 ring-1 ring-sky-200/60">
              <Clock className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">24/7</h3>
            <p className="text-gray-600">Pemantauan real-time</p>
          </div>

          <div className="group bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/60 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
            <div className="mx-auto mb-4 w-fit rounded-full p-3 bg-gradient-to-tr from-fuchsia-100 to-pink-50 ring-1 ring-fuchsia-200/60">
              <Users className="h-8 w-8 text-fuchsia-600" />
            </div>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">5+</h3>
            <p className="text-gray-600">Bank Partner</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Fitur Utama</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-500/30 via-cyan-400/30 to-emerald-400/30">
              <div className="h-full w-full rounded-2xl bg-white/80 backdrop-blur-md p-8 shadow-md border border-white/60 hover:shadow-lg transition-shadow">
                <div className="w-fit mb-6 rounded-full p-4 bg-gradient-to-tr from-sky-100 to-cyan-50 ring-1 ring-cyan-200/60">
                  <Map className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Peta Interaktif</h3>
                <p className="text-gray-600 leading-relaxed">
                  Visualisasi lokasi ATM dengan peta interaktif yang menunjukkan status ketersediaan secara real-time.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-emerald-500/30 via-teal-400/30 to-lime-400/30">
              <div className="h-full w-full rounded-2xl bg-white/80 backdrop-blur-md p-8 shadow-md border border-white/60 hover:shadow-lg transition-shadow">
                <div className="w-fit mb-6 rounded-full p-4 bg-gradient-to-tr from-emerald-100 to-lime-50 ring-1 ring-emerald-200/60">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Status Akurat</h3>
                <p className="text-gray-600 leading-relaxed">
                  Informasi ketersediaan uang tunai dan tingkat keramaian yang diperbarui secara berkala.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-fuchsia-500/30 via-purple-400/30 to-sky-400/30">
              <div className="h-full w-full rounded-2xl bg-white/80 backdrop-blur-md p-8 shadow-md border border-white/60 hover:shadow-lg transition-shadow">
                <div className="w-fit mb-6 rounded-full p-4 bg-gradient-to-tr from-fuchsia-100 to-purple-50 ring-1 ring-fuchsia-200/60">
                  <Smartphone className="h-8 w-8 text-fuchsia-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Responsif</h3>
                <p className="text-gray-600 leading-relaxed">
                  Akses mudah melalui perangkat apapun dengan desain yang responsif dan user-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Map Section — statis */}
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/60 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Peta Lokasi ATM</h2>

          <div className="relative rounded-xl overflow-hidden min-h-[420px]">
            {/* Static map background */}
            <img
              src="/images/jakarta-map.png"
              alt="Peta Jakarta"
              className="w-full h-[480px] object-cover select-none pointer-events-none"
              draggable={false}
            />

            {/* Center overlay info */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Jakarta Area</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Menampilkan {atmData?.length ?? 0} lokasi ATM
                </p>
                <Link
                  to="/atm-list"
                  className="inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200
                             bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white hover:opacity-95 shadow"
                >
                  Lihat Semua ATM
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">
          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl text-center text-white px-6 py-14">
            <h2 className="text-3xl font-extrabold mb-4">Siap Menemukan ATM Terdekat?</h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Jangan buang waktu mencari ATM yang kosong atau terlalu ramai. Gunakan ATM Tracker untuk pengalaman yang lebih efisien.
            </p>
            <Link
              to="/atm-list"
              className="inline-flex items-center px-8 py-4 rounded-xl font-semibold bg-white text-blue-700 hover:bg-gray-100 shadow-lg transition-all duration-200"
            >
              Mulai Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            {/* subtle glow */}
            <div aria-hidden className="pointer-events-none absolute -bottom-28 left-1/2 -translate-x-1/2 h-56 w-[36rem] rounded-full bg-white/20 blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
