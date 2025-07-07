import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  icon?: React.ComponentType<any>;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  icon: Icon
}) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-ncrst-blue text-white hover:bg-ncrst-blue/90 focus:ring-ncrst-blue/50';
      case 'secondary':
        return 'bg-ncrst-grey text-white hover:bg-ncrst-grey/90 focus:ring-ncrst-grey/50';
      case 'outline':
        return 'border border-ncrst-blue text-ncrst-blue hover:bg-ncrst-blue hover:text-white focus:ring-ncrst-blue/50';
      case 'ghost':
        return 'text-ncrst-grey hover:bg-ncrst-grey/10 focus:ring-ncrst-grey/50';
      case 'danger':
        return 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/50';
      default:
        return 'bg-ncrst-blue text-white hover:bg-ncrst-blue/90 focus:ring-ncrst-blue/50';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'lg':
        return 'px-6 py-3 text-lg';
      default:
        return 'px-4 py-2 text-base';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center font-medium rounded-lg
        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${getVariantClasses()}
        ${getSizeClasses()}
        ${className}
      `}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {Icon && !loading && <Icon className="mr-2 h-4 w-4" />}
      {children}
    </button>
  );
}; 