export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
  padding?: string;
}