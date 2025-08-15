import { ArrowLeft, Clock, CreditCard, DollarSign, MapPin, Star, Users, Wifi } from 'lucide-react';
import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { StatusBadge } from '../components/StatusBadge';
import { atmData } from '../data/mockData';

export const ATMDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const atm = atmData.find(a => a.id === id);

  if (!atm) {
    return <Navigate to="/atm-list" replace />;
  }

  const getFeatureIcon = (feature: string) => {
    if (feature.includes('Tanpa Kartu')) return CreditCard;
    if (feature.includes('Setor')) return DollarSign;
    if (feature.includes('Valuta')) return DollarSign;
    return Star;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          to="/atm-list"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke Daftar ATM
        </Link>
      </div>

      {/* ATM Header - versi foto full terlihat, teks di bawah */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-8">
        {/* ATM Image */}
        <figure className="relative">
          <img
            src={atm.image}
            alt={`ATM ${atm.bankName} di ${atm.location}`}
            className="w-full aspect-[16/9] object-cover"
            loading="lazy"
          />
          {/* Optional: scrim halus supaya tepi bawah foto lebih elegan (tidak untuk teks) */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />
        </figure>

        {/* Info di bawah gambar */}
        <div className="p-4 md:p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-lg ring-1 ring-gray-200 bg-white overflow-hidden flex items-center justify-center">
              <img
                src={atm.bankLogo}
                alt={`${atm.bankName} Logo`}
                className="h-10 w-10 object-contain"
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = 'hidden'; }}
              />
            </div>
            <div className="min-w-0">
              <h1 className="text-2xl font-bold text-gray-900 truncate">{atm.bankName}</h1>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="truncate">{atm.location}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <StatusBadge type="cash" status={atm.cashStatus} />
            <StatusBadge type="crowd" status={atm.crowdStatus} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-blue-600" />
              Informasi Lokasi
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-700 mb-1">Alamat Lengkap</p>
                <p className="text-gray-900">{atm.fullAddress}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-700">Jam Operasional</p>
                  <p className="text-gray-900">{atm.operatingHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Fitur Tersedia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {atm.features.map((feature, index) => {
                const FeatureIcon = getFeatureIcon(feature);
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <FeatureIcon className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-900 font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Informasi Tambahan</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Wifi className="h-5 w-5 text-green-600" />
                  <span className="text-gray-900 font-medium">Koneksi Internet</span>
                </div>
                <span className="text-green-600 font-medium">Tersedia</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-900 font-medium">Aksesibilitas</span>
                </div>
                <span className="text-blue-600 font-medium">Ramah Disabilitas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status Overview */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Status Saat Ini</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Ketersediaan Uang</span>
                </div>
                <StatusBadge type="cash" status={atm.cashStatus} className="w-full justify-center py-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Tingkat Keramaian</span>
                </div>
                <StatusBadge type="crowd" status={atm.crowdStatus} className="w-full justify-center py-2" />
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Aksi Cepat</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200">
                <MapPin className="h-4 w-4 mr-2" />
                Buka di Maps
              </button>
              <button className="w-full flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <Star className="h-4 w-4 mr-2" />
                Simpan Favorit
              </button>
            </div>
          </div>

          {/* Last Updated */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <p className="text-xs text-gray-600 text-center">
              Terakhir diperbarui: <br />
              <span className="font-medium">Hari ini, 14:30 WIB</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};