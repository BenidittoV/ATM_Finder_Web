import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Eye, MapPin, Clock } from 'lucide-react';
import { atmData, banks } from '../data/mockData';
import { StatusBadge } from '../components/StatusBadge';

export const ATMList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBank, setSelectedBank] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredAtms = useMemo(() => {
    return atmData.filter(atm => {
      const matchesSearch = atm.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          atm.bankName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBank = selectedBank === 'all' || atm.bankName === selectedBank;
      const matchesStatus = statusFilter === 'all' || atm.cashStatus === statusFilter;
      
      return matchesSearch && matchesBank && matchesStatus;
    });
  }, [searchTerm, selectedBank, statusFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Daftar ATM</h1>
        <p className="text-gray-600">Temukan ATM dengan status ketersediaan dan keramaian real-time</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari lokasi atau bank..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Bank Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={selectedBank}
              onChange={(e) => setSelectedBank(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
            >
              <option value="all">Semua Bank</option>
              {banks.map(bank => (
                <option key={bank.id} value={bank.name}>{bank.name}</option>
              ))}
            </select>
          </div>

          {/* Status Filter */}
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
        <p className="text-gray-600">
          Menampilkan <span className="font-semibold">{filteredAtms.length}</span> dari {atmData.length} ATM
        </p>
      </div>

      {/* ATM Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAtms.map((atm) => (
          <div
            key={atm.id}
            className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            <div className="p-6">
              {/* Bank Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">
                    <img
                      src={atm.bankLogo}
                        alt={`${atm.bankName} Logo`}
                        className="w-10 h-10 object-contain"
                      />
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{atm.bankName}</h3>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-2 mb-4">
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
                <div className="flex flex-wrap gap-1">
                  {atm.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                  {atm.features.length > 2 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                      +{atm.features.length - 2} lainnya
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <Link
                to={`/atm/${atm.id}`}
                className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
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
          <div className="bg-gray-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Search className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada ATM ditemukan</h3>
          <p className="text-gray-600">Coba ubah filter pencarian Anda</p>
        </div>
      )}
    </div>
  );
};