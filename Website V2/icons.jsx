// icons.jsx — minimal stroke icon set for Social Limits
const Icon = ({ children, size = 24, stroke = 'currentColor', fill = 'none', sw = 1.6 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const IconLock = (p) => <Icon {...p}><rect x="4.5" y="10.5" width="15" height="10" rx="2.5"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></Icon>;
const IconShoe = (p) => <Icon {...p}><path d="M3 16c0-1.5 1-2.5 3-3l3-1 2-3 4 .5c2 .3 3.5 1 5 3l1.5 2v3.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2Z"/><path d="M9 12.5l1.5 1.5M13 11l1 1.5M17 11.5l1 1.5"/></Icon>;
const IconBolt = (p) => <Icon {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></Icon>;
const IconBell = (p) => <Icon {...p}><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z"/><path d="M10 19a2 2 0 0 0 4 0"/></Icon>;
const IconMoon = (p) => <Icon {...p}><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"/></Icon>;
const IconSpark = (p) => <Icon {...p}><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="3"/></Icon>;
const IconFocus = (p) => <Icon {...p}><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></Icon>;
const IconHeart = (p) => <Icon {...p}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z"/></Icon>;
const IconShield = (p) => <Icon {...p}><path d="M12 3 4.5 5.5v6c0 5 3.5 8 7.5 9.5 4-1.5 7.5-4.5 7.5-9.5v-6L12 3Z"/></Icon>;
const IconRoutine = (p) => <Icon {...p}><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/></Icon>;
const IconApple = (p) => <Icon {...p} fill="currentColor" stroke="none"><path d="M17.05 12.5c-.02-2.16 1.77-3.2 1.85-3.25-1-1.47-2.56-1.67-3.12-1.7-1.33-.13-2.6.78-3.27.78-.69 0-1.71-.76-2.82-.74-1.45.02-2.79.85-3.54 2.15-1.5 2.6-.39 6.46 1.08 8.58.72 1.04 1.58 2.2 2.69 2.16 1.08-.05 1.49-.7 2.8-.7s1.68.7 2.83.68c1.17-.02 1.91-1.05 2.62-2.1.83-1.2 1.17-2.37 1.19-2.43-.03-.01-2.28-.88-2.3-3.43Zm-2.16-6.32c.6-.72 1-1.72.89-2.72-.86.03-1.9.57-2.51 1.29-.55.63-1.04 1.65-.91 2.63.95.07 1.93-.49 2.53-1.2Z"/></Icon>;
const IconCheck = (p) => <Icon {...p}><path d="M4 12.5 9 17.5 20 6.5"/></Icon>;
const IconArrowRight = (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>;
const IconStep = (p) => <Icon {...p}><path d="M8 4c-1 2-1 4 0 6s2 2 2 4-1 3-3 3-3-1-3-3M14 8c1-2 2-3 3.5-3S20 6 20 8s-1 3-3 4-3 1-3 3 1 4 3 4"/></Icon>;
const IconQuote = (p) => <Icon {...p} fill="currentColor" stroke="none"><path d="M7 7h4v4H8a3 3 0 0 0-1 6V19a6 6 0 0 1 0-12Zm9 0h4v4h-3a3 3 0 0 0-1 6V19a6 6 0 0 1 0-12Z"/></Icon>;
const IconStar = (p) => <Icon {...p} fill="currentColor" stroke="none"><path d="m12 3 2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.5 6.7 19.2l1.1-5.9L3.5 9.2l5.9-.8L12 3Z"/></Icon>;
const IconPlus = (p) => <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>;
const IconMenu = (p) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16"/></Icon>;

Object.assign(window, {
  IconLock, IconShoe, IconBolt, IconBell, IconMoon, IconSpark, IconFocus,
  IconHeart, IconShield, IconRoutine, IconApple, IconCheck, IconArrowRight,
  IconStep, IconQuote, IconStar, IconPlus, IconMenu,
});
