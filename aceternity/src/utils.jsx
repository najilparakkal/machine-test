import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const gradientStyle = {
  background: 'linear-gradient(to right, white, #04FFFF)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
};