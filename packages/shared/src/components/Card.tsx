import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface CardProps {
  title: string;
  description: string;
  icon?: IconType;
  onClick?: () => void;
  badge?: string;
  variant?: 'default' | 'gold' | 'grey';
  children?: ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  onClick,
  badge,
  variant = 'default',
  children
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'gold':
        return 'bg-amber-50 border-amber-200 hover:border-amber-300';
      case 'grey':
        return 'bg-gray-50 border-gray-200 hover:border-gray-300';
      default:
        return 'bg-white border-gray-200 hover:border-gray-300';
    }
  };

  return (
    <div
      className={`rounded-lg border p-6 transition-all cursor-pointer ${getVariantClasses()}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            {Icon && <Icon className="w-5 h-5 text-gray-600" />}
            <h3 className="font-semibold text-gray-900">{title}</h3>
            {badge && (
              <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                {badge}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}; 