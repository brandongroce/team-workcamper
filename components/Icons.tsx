// components/Icons.tsx
import React from "react";

export function CampIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2 1 21h22L12 2Zm0 4.84L18.93 19H5.07L12 6.84Z" />
    </svg>
  );
}

export function MusicIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9 18V5l12-2v13h-2v-9l-8 1v10a4 4 0 1 1-2-3.46Z" />
    </svg>
  );
}

export function CartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6.16 6l.84 2h11.6l-1.36 6H8.53l-.62-2H4.44L6.16 6ZM4 4h2l3.6 9h7.45l1.35-6H8.53l-.62-2H4Z" />
    </svg>
  );
}

export function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="m9.4 16.6-1.4 1.4-6-6 6-6 1.4 1.4L5.8 12l3.6 4.6Zm5.2 0L18.2 12l-3.6-4.6 1.4-1.4 6 6-6 6-1.4-1.4Z" />
    </svg>
  );
}

export function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 19.5V4a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2ZM8 4v13.5h11V4H8Z" />
    </svg>
  );
}
