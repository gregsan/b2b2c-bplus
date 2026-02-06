import React from 'react';
import { JSX } from 'react/jsx-runtime';

export function ImagePlaceholder({ pattern = 1, className = '' }: { pattern?: number; className?: string }) {
  const patterns = {
    1: (
      <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#F7F7F9"/>
        <path d="M0 0L400 300M0 300L400 0" stroke="#797875" strokeOpacity="0.1" strokeWidth="2"/>
        {Array.from({ length: 20 }).map((_, i) => (
          <line key={i} x1={i * 20} y1="0" x2={i * 20} y2="300" stroke="#797875" strokeOpacity="0.05" strokeWidth="1"/>
        ))}
      </svg>
    ),
    2: (
      <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#F7F7F9"/>
        {Array.from({ length: 80 }).map((_, i) => (
          <circle key={i} cx={(i % 10) * 40 + 20} cy={Math.floor(i / 10) * 40 + 20} r="4" fill="#797875" fillOpacity="0.1"/>
        ))}
      </svg>
    ),
    3: (
      <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#F7F7F9"/>
        {[50, 100, 150, 200].map((r) => (
          <circle key={r} cx="200" cy="150" r={r} stroke="#797875" strokeOpacity="0.08" strokeWidth="2" fill="none"/>
        ))}
      </svg>
    ),
    4: (
      <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#F7F7F9"/>
        <path d="M0 150Q100 100 200 150T400 150M0 200Q100 150 200 200T400 200" stroke="#797875" strokeOpacity="0.1" strokeWidth="3"/>
      </svg>
    ),
    5: (
      <svg className={className} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#F7F7F9"/>
        {Array.from({ length: 30 }).map((_, i) => (
          <rect key={i} x={Math.random() * 350} y={Math.random() * 250} width="50" height="50" fill="#797875" fillOpacity="0.06"/>
        ))}
      </svg>
    ),
  }
  
  return patterns[pattern as keyof typeof patterns] || patterns[1]
}

export function ServiceIcon({ service, size = 80 }: { service: string; size?: number }) {
  const icons: Record<string, JSX.Element> = {
    spotify: (
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="40" fill="#1DB954"/>
        <path d="M52 35C45 31 35 31 28 35M50 42C44 39 36 39 30 42M48 49C43 47 37 47 32 49" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    ),
    netflix: (
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        <rect width="80" height="80" rx="8" fill="#E50914"/>
        <text x="40" y="55" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle">N</text>
      </svg>
    ),
    youtube: (
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        <rect width="80" height="80" rx="12" fill="#FF0000"/>
        <path d="M32 28L54 40L32 52V28Z" fill="white"/>
      </svg>
    ),
    chatgpt: (
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        <path d="M40 0L73.2 20V60L40 80L6.8 60V20L40 0Z" fill="#10A37F"/>
        <circle cx="30" cy="38" r="4" fill="white"/>
        <circle cx="50" cy="38" r="4" fill="white"/>
        <path d="M28 48Q40 54 52 48" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    notion: (
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        <rect width="80" height="80" rx="8" fill="white"/>
        <rect width="80" height="80" rx="8" stroke="#000" strokeWidth="2"/>
        <path d="M25 25L55 25L55 55L25 55Z" fill="none" stroke="#000" strokeWidth="3"/>
      </svg>
    ),
    'apple-music': (
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="40" fill="#FC3C44"/>
        <path d="M50 25V45C50 48 47 50 45 50C43 50 40 48 40 45C40 42 43 40 45 40C46 40 47 40.5 48 41V30L38 33V50C38 53 35 55 33 55C31 55 28 53 28 50C28 47 31 45 33 45C34 45 35 45.5 36 46V28L50 25Z" fill="white"/>
      </svg>
    ),
    disney: (
      <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
        <rect width="80" height="80" rx="12" fill="#113CCF"/>
        <path d="M40 15L47 35H68L51 48L58 68L40 55L22 68L29 48L12 35H33L40 15Z" fill="white"/>
      </svg>
    ),
  }
  
  return icons[service] || icons.spotify
}

export function PartnerIcon({ partner, size = 60 }: { partner: string; size?: number }) {
  const icons: Record<string, JSX.Element> = {
    rozetka: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <rect width="60" height="60" rx="8" fill="#8BC53F"/>
        <path d="M20 25H40V35H35L30 45H20V25Z" fill="white"/>
      </svg>
    ),
    comfy: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <rect width="60" height="60" rx="8" fill="#FF6B00"/>
        <rect x="15" y="20" width="30" height="20" rx="2" fill="white"/>
      </svg>
    ),
    silpo: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="30" fill="#EA0029"/>
        <text x="30" y="40" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">S</text>
      </svg>
    ),
    atb: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <rect width="60" height="60" rx="4" fill="#0066CC"/>
        <text x="30" y="40" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">ATБ</text>
      </svg>
    ),
    varus: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <rect width="60" height="60" rx="8" fill="#00A651"/>
        <path d="M30 15C25 20 20 25 20 32C20 38 25 42 30 42C35 42 40 38 40 32C40 25 35 20 30 15Z" fill="white"/>
      </svg>
    ),
    apteka: (
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="30" fill="#00B050"/>
        <rect x="28" y="15" width="4" height="30" fill="white"/>
        <rect x="15" y="28" width="30" height="4" fill="white"/>
      </svg>
    ),
  }
  
  return icons[partner] || icons.rozetka
}

export function AvatarPlaceholder({ initial = 'U', size = 40 }: { initial?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="20" fill="#FACE00"/>
      <text x="20" y="27" fontSize="18" fontWeight="600" fill="#0E0C00" textAnchor="middle">{initial}</text>
    </svg>
  )
}
