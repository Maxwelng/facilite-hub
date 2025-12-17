import React from 'react';
import { ButtonProps } from './Button.types';
import { theme } from '@/styles/theme';

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
}) => {
  const styles: React.CSSProperties = {
    backgroundColor: variant === 'primary' ? theme.colors.primary : theme.colors.secondary,
    color: theme.colors.white,
    border: 'none',
    padding: size === 'large' ? '1.2rem 3rem' : size === 'small' ? '0.7rem 1.5rem' : '0.9rem 2.5rem',
    fontSize: size === 'large' ? '1.1rem' : size === 'small' ? '0.85rem' : '0.95rem',
    fontFamily: theme.fonts.body,
    fontWeight: 500,
    borderRadius: '50px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: theme.shadows.md,
    opacity: disabled ? 0.6 : 1,
  };

  return (
    <button onClick={onClick} disabled={disabled} style={styles}>
      {children}
    </button>
  );
};