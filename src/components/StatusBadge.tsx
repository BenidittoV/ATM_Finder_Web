import React from 'react';
import { CheckCircle, AlertCircle, XCircle, Users } from 'lucide-react';

interface StatusBadgeProps {
  type: 'cash' | 'crowd';
  status: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ type, status, className = '' }) => {
  const getCashStatusConfig = (status: string) => {
    switch (status) {
      case 'available':
        return {
          icon: CheckCircle,
          text: 'Tersedia',
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          iconColor: 'text-green-600'
        };
      case 'low':
        return {
          icon: AlertCircle,
          text: 'Hampir Habis',
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800',
          iconColor: 'text-yellow-600'
        };
      case 'empty':
        return {
          icon: XCircle,
          text: 'Kosong',
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          iconColor: 'text-red-600'
        };
      default:
        return {
          icon: AlertCircle,
          text: 'Unknown',
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          iconColor: 'text-gray-600'
        };
    }
  };

  const getCrowdStatusConfig = (status: string) => {
    switch (status) {
      case 'sepi':
        return {
          icon: Users,
          text: 'Sepi',
          bgColor: 'bg-green-100',
          textColor: 'text-green-800',
          iconColor: 'text-green-600'
        };
      case 'sedang':
        return {
          icon: Users,
          text: 'Sedang',
          bgColor: 'bg-yellow-100',
          textColor: 'text-yellow-800',
          iconColor: 'text-yellow-600'
        };
      case 'ramai':
        return {
          icon: Users,
          text: 'Ramai',
          bgColor: 'bg-red-100',
          textColor: 'text-red-800',
          iconColor: 'text-red-600'
        };
      default:
        return {
          icon: Users,
          text: 'Unknown',
          bgColor: 'bg-gray-100',
          textColor: 'text-gray-800',
          iconColor: 'text-gray-600'
        };
    }
  };

  const config = type === 'cash' ? getCashStatusConfig(status) : getCrowdStatusConfig(status);
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bgColor} ${config.textColor} ${className}`}>
      <Icon className={`w-3 h-3 mr-1 ${config.iconColor}`} />
      {config.text}
    </span>
  );
};