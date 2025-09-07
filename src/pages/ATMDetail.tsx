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
    if (feature.toLowerCase().includes('tanpa kartu')) return CreditCard;
    if (feature.toLowerCase().includes('setor')) return DollarSign;
    if (feature.toLowerCase().includes('valuta')) return DollarSign;
    return Star;
  };

  return (
    <div className="relative">
      {/* Decorative background gradients */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-purple-400/10 to-sky-400/10 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/atm-list"
            className="inline-flex items-center font-medium rounded-lg
                       text-blue-700 hover:text-blue-800
                       hover:underline underline-offset-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Daftar ATM
          </Link>
        </div>

        {/* ATM Header */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-white/60 bg-white/80 backdrop-blur-md mb-8">
          {/* Image */}
          <figure className="relative">
            <img
              src={atm.image}
              alt={`ATM ${atm.bankName} di ${atm.location}`}
              className="w-full aspect-[16/9] object-cover"
              loading="lazy"
            />
            {/* Gradient scrim */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
            {/* Floating bank pill */}
            <div className="absolute left-4 bottom-4 flex items-center gap-3">
              <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600">
                <div className="h-12 w-12 rounded-[10px] bg-white/90 backdrop-blur-md flex items-center justify-center overflow-hidden">
                  <img
                    src={atm.bankLogo}
                    alt={`${atm.bankName} Logo`}
                    className="h-10 w-10 object-contain"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.visibility = 'hidden'; }}
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="px-3 py-2 rounded-lg bg-white/90 backdrop-blur-md border border-white/60 shadow-sm">
                  <p className="text-sm font-semibold text-gray-900">{atm.bankName}</p>
                  <p className="text-xs text-gray-600 flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-blue-600" />
                    <span className="truncate max-w-[220px] sm:max-w-[280px]">{atm.location}</span>
                  </p>
                </div>
              </div>
            </div>
          </figure>

          {/* Info bawah gambar (mobile & badges) */}
          <div className="p-4 md:p-6">
            <div className="sm:hidden mb-4">
              <h1 className="text-xl font-bold text-gray-900">{atm.bankName}</h1>
              <p className="text-gray-600 flex items-center gap-1">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="truncate">{atm.location}</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <StatusBadge type="cash" status={atm.cashStatus} />
              <StatusBadge type="crowd" status={atm.crowdStatus} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Lokasi */}
            <div className="rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="inline-flex items-center justify-center mr-2 p-2 rounded-lg bg-gradient-to-tr from-blue-100 to-cyan-50 ring-1 ring-blue-200/60">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </span>
                Informasi Lokasi
              </h2>
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Alamat Lengkap</p>
                  <p className="text-gray-900">{atm.fullAddress}</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <Clock className="h-4 w-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Jam Operasional</p>
                    <p className="text-gray-900">{atm.operatingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fitur */}
            <div className="rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Fitur Tersedia</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {atm.features.map((feature, index) => {
                  const FeatureIcon = getFeatureIcon(feature);
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl border border-white/60 bg-gradient-to-r from-blue-50 to-cyan-50"
                    >
                      <div className="p-2 rounded-lg bg-white ring-1 ring-blue-200/60">
                        <FeatureIcon className="h-5 w-5 text-cyan-700" />
                      </div>
                      <span className="text-gray-900 font-medium">{feature}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Informasi Tambahan */}
            <div className="rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Informasi Tambahan</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/60 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-50 ring-1 ring-emerald-200/60">
                      <Wifi className="h-5 w-5 text-emerald-600" />
                    </div>
                    <span className="text-gray-900 font-medium">Koneksi Internet</span>
                  </div>
                  <span className="text-emerald-700 font-semibold">Tersedia</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/60 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 ring-1 ring-blue-200/60">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-gray-900 font-medium">Aksesibilitas</span>
                  </div>
                  <span className="text-blue-700 font-semibold">Ramah Disabilitas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status Overview */}
            <div className="rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md shadow-md p-6">
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
            <div className="rounded-2xl border border-white/60 bg-white/80 backdrop-blur-md shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Aksi Cepat</h3>
              <div className="space-y-3">
                <button
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-all duration-200
                             bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white hover:opacity-95 shadow"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Buka di Maps
                </button>
                <button
                  className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-all duration-200
                             bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white hover:opacity-95 shadow"
                >
                  <Star className="h-4 w-4 mr-2" />
                  Simpan Favorit
                </button>
              </div>
            </div>

            {/* Last Updated */}
            <div className="rounded-2xl p-4 border border-white/60 bg-white/70 backdrop-blur-md text-center">
              <p className="text-xs text-gray-700">
                Terakhir diperbarui: <br />
                <span className="font-semibold text-gray-900">Hari ini, 14:30 WIB</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
