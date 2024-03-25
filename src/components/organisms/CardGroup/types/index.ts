/**
 *
 * CardGroup Types
 *
 */

export type PropsType = {
  data: any[];
  handleCardPress: (data?: any) => void;
  ctaLabel?: string;
  ctaPress?: (data?: any) => void;
  showCta?: boolean;
  horizontal?: boolean;
};
