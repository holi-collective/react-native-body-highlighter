import React from "react";

// Platform detection
const isReactNative = (): boolean => {
  try {
    // React Native specific check
    return typeof navigator !== 'undefined' && navigator.product === 'ReactNative';
  } catch {
    return false;
  }
};

// Type definitions for SVG props
export interface SvgProps {
  viewBox: string;
  height: number;
  width: number;
  children: React.ReactNode;
}

export interface GProps {
  strokeWidth?: number;
  fill?: string;
  strokeLinecap?: "butt" | "round" | "square";
  children: React.ReactNode;
}

export interface PathProps {
  stroke?: string;
  vectorEffect?: string;
  d: string;
  fill?: string;
  onPress?: () => void;
  onClick?: () => void;
  id?: string;
  key?: string;
}

// React Native SVG Components (lazy loaded)
let RNSvg: any, RNG: any, RNPath: any;

const loadReactNativeSvg = (): void => {
  if (!RNSvg) {
    try {
      // Use dynamic import for React Native SVG
      const ReactNativeSvg = (require as any)('react-native-svg');
      RNSvg = ReactNativeSvg.default || ReactNativeSvg.Svg || ReactNativeSvg;
      RNG = ReactNativeSvg.G;
      RNPath = ReactNativeSvg.Path;
    } catch (error) {
      console.warn('react-native-svg not found. Please install it for React Native support.');
    }
  }
};

// Web SVG Components
const WebSvg: React.FC<SvgProps> = ({ viewBox, height, width, children }) => (
  React.createElement('svg', {
    viewBox,
    height,
    width,
    style: { display: 'block' }
  }, children)
);

const WebG: React.FC<GProps> = ({ strokeWidth, fill, strokeLinecap, children }) => (
  React.createElement('g', {
    strokeWidth,
    fill,
    strokeLinecap
  }, children)
);

const WebPath: React.FC<PathProps> = ({ 
  stroke, 
  vectorEffect, 
  d, 
  fill, 
  onPress, 
  onClick, 
  id, 
  ...props 
}) => (
  React.createElement('path', {
    stroke,
    vectorEffect,
    d,
    fill,
    onClick: onPress || onClick,
    id,
    style: { cursor: onPress || onClick ? 'pointer' : 'default' },
    ...props
  })
);

// Cross-platform components
export const Svg: React.FC<SvgProps> = (props) => {
  if (isReactNative()) {
    loadReactNativeSvg();
    if (RNSvg) {
      return React.createElement(RNSvg, props);
    }
    throw new Error('react-native-svg is required for React Native platform');
  }
  return React.createElement(WebSvg, props);
};

export const G: React.FC<GProps> = (props) => {
  if (isReactNative()) {
    loadReactNativeSvg();
    if (RNG) {
      return React.createElement(RNG, props);
    }
    throw new Error('react-native-svg is required for React Native platform');
  }
  return React.createElement(WebG, props);
};

export const Path: React.FC<PathProps> = (props) => {
  if (isReactNative()) {
    loadReactNativeSvg();
    if (RNPath) {
      return React.createElement(RNPath, props);
    }
    throw new Error('react-native-svg is required for React Native platform');
  }
  return React.createElement(WebPath, props);
}; 