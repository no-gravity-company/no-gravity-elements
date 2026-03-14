import { StringBoolean } from '@no-gravity-elements/types';

export interface Tab {
  label: string;
  content: string;
  disabled?: StringBoolean;
}

export interface TabsProps {
  tabs: Tab[];
  activeIndex?: number;
  variant?: 'primary' | 'secondary';
  orientation?: 'horizontal' | 'vertical';
  size?: 'small' | 'medium' | 'large';
  disabled?: StringBoolean;
}