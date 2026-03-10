import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";
console.log("hello");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
