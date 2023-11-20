export interface ButtonProps {
  text: string;
  onClick: () => void;
  type?: 'primary' | 'secondary' | 'reject' | 'accept';
  className?: string;
  style?: string;
}
