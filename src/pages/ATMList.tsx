import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Eye, MapPin, Clock, ChevronDown } from 'lucide-react';
import { atmData, banks } from '../data/mockData';
import { StatusBadge } from '../components/StatusBadge';

export const ATMList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBank, setSelectedBank] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredAtms = useMemo(() => {
    return atmData.filter(atm => {
      const q = searchTerm.toLowerCase();
      const matchesSearch =
        atm.location.toLowerCase().includes(q) ||
        atm.bankName.toLowerCase().includes(q) ||
        (atm.fullAddress || '').toLowerCase().includes(q);
      const matchesBank = selectedBank === 'all' || atm.bankName === selectedBank;
      const matchesStatus = statusFilter === 'all' || atm.cashStatus === statusFilter;
      return matchesSearch && matchesBank && matchesStatus;
    });
  }, [searchTerm, selectedBank, statusFilter]);

  return (
    <div className="relative">
      {/* Decorative bg */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-purple-400/10 to-sky-400/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 mb-2">
            Daftar ATM
          </h1>
          <p className="text-gray-600">
            Temukan ATM dengan status ketersediaan dan keramaian real-time
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/60 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Cari lokasi, bank, atau alamat…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder:text-gray-400"
              />
            </div>

            {/* Bank Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
                className="w-full pl-10 pr-8 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none bg-white/90"
              >
                <option value="all">Semua Bank</option>
                {banks.map(bank => (
                  <option key={bank.id} value={bank.name}>{bank.name}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-4 pr-8 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-transparent appearance-none bg-white/90"
              >
                <option value="all">Semua Status</option>
                <option value="available">Tersedia</option>
                <option value="low">Hampir Habis</option>
                <option value="empty">Kosong</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-700">
            Menampilkan <span className="font-semibold">{filteredAtms.length}</span> dari {atmData.length} ATM
          </p>
        </div>

        {/* ATM Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAtms.map((atm) => (
            <div
              key={atm.id}
              className="group bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 shadow-sm hover:shadow-lg transition-all duration-200"
            >
              <div className="p-6">
                {/* Bank Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center overflow-hidden">
                      <img
                        src={atm.bankLogo}
                        alt={`${atm.bankName} Logo`}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">{atm.bankName}</h3>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-2 mb-3">
                  <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{atm.location}</p>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-2">{atm.fullAddress}</p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-center space-x-2 mb-4">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{atm.operatingHours}</span>
                </div>

                {/* Status Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <StatusBadge type="cash" status={atm.cashStatus} />
                  <StatusBadge type="crowd" status={atm.crowdStatus} />
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-xs font-medium text-gray-700 mb-2">Fitur:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {atm.features.slice(0, 2).map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded-md text-xs bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-700 border border-blue-100"
                      >
                        {feature}
                      </span>
                    ))}
                    {atm.features.length > 2 && (
                      <span className="px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-600 border border-gray-200">
                        +{atm.features.length - 2} lainnya
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={`/atm/${atm.id}`}
                  className="w-full inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-200
                             bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 text-white hover:opacity-95 shadow"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAtms.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-sm">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada ATM ditemukan</h3>
            <p className="text-gray-600">Coba ubah filter pencarian Anda</p>
          </div>
        )}
      </div>
    </div>
  );
};
