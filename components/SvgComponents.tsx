import React from "react";

// Since this is a Next.js web application, we can remove the platform
// detection logic and hardcode it to only use web-native SVGs. This
// prevents the Next.js bundler from trying to resolve React Native dependencies.

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

// Export the Web components directly
export const Svg: React.FC<SvgProps> = WebSvg;
export const G: React.FC<GProps> = WebG;
export const Path: React.FC<PathProps> = WebPath;
