import { StringBoolean } from '@no-gravity-elements/types';

export interface CarouselProps {
  autoplay?: StringBoolean;
  autoplayInterval?: string;
  navigation?: StringBoolean;
  indicators?: StringBoolean;
  infinite?: StringBoolean;
  pauseOnHover?: StringBoolean;
  className?: string;
  style?: string;
}