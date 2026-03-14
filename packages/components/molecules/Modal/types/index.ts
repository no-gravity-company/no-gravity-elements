import { StringBoolean } from '@no-gravity-elements/types';

export interface ModalProps {
  open?: StringBoolean;
  title?: string;
  size?: 'small' | 'medium' | 'large';
  backdropDisabled?: StringBoolean;
  closeButtonDisabled?: StringBoolean;
  fullHeight?: StringBoolean;
}