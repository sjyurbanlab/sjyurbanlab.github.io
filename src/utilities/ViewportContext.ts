import { createContext } from 'react';

export type Viewport = {
  width: number;
  height: number;
  isMobile: boolean;
  isMobileLandscape: boolean;
};

const defaultViewport: Viewport = {
  width: 0,
  height: 0,
  isMobile: false,
  isMobileLandscape: false,
};

const tailwindSmBreakpoint = 640;

export const generateViewport = (window: Window): Viewport => ({
  width: window.innerWidth,
  height: window.innerHeight,
  isMobile: window.innerWidth < tailwindSmBreakpoint,
  isMobileLandscape: window.innerHeight < 450,
});

export const ViewportContext = createContext<Viewport>(defaultViewport);
