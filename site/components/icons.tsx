// Иконки одной толщины линии (1.8), в духе табличек навигации клиники.
const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
type P = { size?: number };

export const PhoneIcon = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...s}><path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2" /></svg>
);
export const PlusIcon = ({ size = 12 }: P) => (
  <svg width={size} height={size} viewBox="0 0 12 12" aria-hidden="true"><path d="M4.5 0h3v4.5H12v3H7.5V12h-3V7.5H0v-3h4.5z" fill="currentColor" /></svg>
);
export const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" {...s}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const CloseIcon = ({ size = 20 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...s}><path d="M6 6l12 12M18 6L6 18" /></svg>
);
export const ArrowIcon = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...s}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ChevronIcon = ({ size = 20, dir = 'right' }: P & { dir?: 'left' | 'right' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...s}><path d={dir === 'right' ? 'M9 5l7 7-7 7' : 'M15 5l-7 7 7 7'} /></svg>
);
export const PinIcon = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...s}><path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const ClockIcon = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...s}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const ParkingIcon = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...s}><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><path d="M10 17V7h3.2a3 3 0 0 1 0 6H10" /></svg>
);
export const CardIcon = ({ size = 18 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...s}><rect x="3" y="5.5" width="18" height="13" rx="2.5" /><path d="M3 10h18M7 15h3" /></svg>
);
export const StarIcon = ({ size = 16 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" fill="currentColor" /></svg>
);
export const DropIcon = ({ size = 22 }: P) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5S5 10.3 5 15a7 7 0 0 0 14 0c0-4.7-7-12.5-7-12.5z" fill="currentColor" /></svg>
);

// Пиктограммы «плана клиники»
const BOARD_ICONS: Record<string, React.ReactNode> = {
  flask: <path d="M9 3h6M10 3v6L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9V3M7.5 14h9" />,
  scan: <><circle cx="12" cy="11" r="6.5" /><circle cx="12" cy="11" r="2.5" /><path d="M3 21h18" /></>,
  scope: <><path d="M5 4h7a4 4 0 0 1 4 4v5" /><path d="M16 13a3 3 0 1 0 0 6h3" /><circle cx="5" cy="4" r="1.5" /></>,
  blade: <><path d="M4 20l9-9" /><path d="M13 11l5.5-5.5a2.1 2.1 0 0 1 3 3L16 14z" /></>,
  bed: <><path d="M3 18V6M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5" /><circle cx="7" cy="11" r="2" /></>,
  pharm: <><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><path d="M12 8v8M8 12h8" /></>,
};
export const BoardIcon = ({ name, size = 22 }: { name: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...s}>{BOARD_ICONS[name]}</svg>
);
