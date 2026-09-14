// Small inline SVG icon set (currentColor-based) so we don't pull in an icon package.
type IconProps = { size?: number; className?: string };

export const ClockIcon = ({ size = 16, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HomeIcon = ({ size = 18, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M4 11.5 12 4l8 7.5M6 10v9a1 1 0 0 0 1 1h4v-6h2v6h4a1 1 0 0 0 1-1v-9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FullscreenIcon = ({ size = 14, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M4 9V5a1 1 0 0 1 1-1h4M20 9V5a1 1 0 0 0-1-1h-4M4 15v4a1 1 0 0 0 1 1h4M20 15v4a1 1 0 0 1-1 1h-4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const WarningIcon = ({ size = 14, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 4 2 20h20L12 4Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M12 10v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="12" cy="17" r="0.9" fill="currentColor" />
  </svg>
);

export const WifiIcon = ({ size = 14, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M3 8.5a16 16 0 0 1 18 0M6.2 12a11.5 11.5 0 0 1 11.6 0M9.5 15.5a7 7 0 0 1 5 0"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <circle cx="12" cy="19" r="1.1" fill="currentColor" />
  </svg>
);

export const CheckIcon = ({ size = 12, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 12.5 9.5 18 20 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CrossIcon = ({ size = 12, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const ListIcon = ({ size = 14, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
