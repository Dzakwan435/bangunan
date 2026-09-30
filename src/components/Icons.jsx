import React from 'react';

// Arrow diagonal up-right
export function ArrowUpRight({ className = "w-4 h-4", strokeWidth = 1.5 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 17L17 7M17 7H7M17 7V17"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Arrow diagonal down-right
export function ArrowDownRight({ className = "w-4 h-4", strokeWidth = 1.5 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 7L17 17M17 17H7M17 17V7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Service 01: Perencanaan & Desain (Compass / Drafting Tool)
export function DraftingCompassIcon({ className = "w-7 h-7", strokeWidth = 1.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M12.99 6.74L14.92 10.18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M11.02 6.74L3 21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M18.84 17.16L21 21" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M4.865 12C7.549 14.994 10.121 14.994 12 14.994C14.684 14.994 17.256 13.915 19.136 12"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

// Service 02: Konstruksi (Crane / Trowel / Beam Architecture Tool)
export function ConstructionIcon({ className = "w-7 h-7", strokeWidth = 1.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15 12L5.627 21.373C4.799 22.202 3.455 22.202 2.627 21.373C1.798 20.545 1.798 19.202 2.626 18.373L12 9"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 15L22 11" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
      <path
        d="M21.5 11.5L19.586 9.586C19.211 9.211 19 8.702 19 8.172V7.828C19 7.298 18.789 6.789 18.414 6.414L16.757 4.757C15.632 3.632 14.107 3 12.516 3H9L10.243 4.243C11.368 5.368 12 6.894 12 8.485V10L14 12H15.172C15.702 12 16.211 12.211 16.586 12.586L18.5 14.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Service 03: Pengembangan Kawasan (Architectural Building Grid)
export function BuildingIcon({ className = "w-7 h-7", strokeWidth = 1.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M8 6H8.01M12 6H12.01M16 6H16.01" stroke="currentColor" strokeWidth={strokeWidth * 1.5} strokeLinecap="round" />
      <path d="M8 10H8.01M12 10H12.01M16 10H16.01" stroke="currentColor" strokeWidth={strokeWidth * 1.5} strokeLinecap="round" />
      <path d="M8 14H8.01M12 14H12.01M16 14H16.01" stroke="currentColor" strokeWidth={strokeWidth * 1.5} strokeLinecap="round" />
      <path d="M9 22V19C9 18.448 9.448 18 10 18H14C14.552 18 15 18.448 15 19V22" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

// Service 04: Manajemen Properti (Key & Care Shield)
export function PropertyManagementIcon({ className = "w-7 h-7", strokeWidth = 1.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.586 17.414C2.211 17.789 2 18.298 2 18.828V21C2 21.553 2.448 22 3 22H6C6.552 22 7 21.553 7 21V20C7 19.448 7.448 19 8 19H9C9.552 19 10 18.553 10 18V17C10 16.448 10.448 16 11 16H11.172C11.702 16 12.211 15.789 12.586 15.414L13.4 14.6C16.262 15.597 19.434 14.484 21.044 11.916C22.655 9.349 22.278 6.009 20.134 3.866C17.991 1.723 14.651 1.345 12.084 2.956C9.516 4.567 8.403 7.738 9.4 10.6L2.586 17.414Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}

// Contact: Location Pin
export function LocationIcon({ className = "w-5 h-5", strokeWidth = 1.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 10C18 15.5 12 21 12 21C12 21 6 15.5 6 10C6 6.686 8.686 4 12 4C15.314 4 18 6.686 18 10Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
}

// Contact: Phone
export function PhoneIcon({ className = "w-5 h-5", strokeWidth = 1.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.832 16.568C14.257 16.763 14.761 16.637 15.045 16.265L15.4 15.8C15.778 15.296 16.37 15 17 15H20C21.105 15 22 15.895 22 17V20C22 21.105 21.105 22 20 22C10.059 22 2 13.941 2 4C2 2.895 2.895 2 4 2H7C8.105 2 9 2.895 9 4V7C9 7.63 8.704 8.222 8.2 8.6L7.732 8.951C7.353 9.24 7.231 9.756 7.44 10.184C8.807 12.96 11.054 15.205 13.832 16.568Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Contact: Email
export function MailIcon({ className = "w-5 h-5", strokeWidth = 1.25 }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth={strokeWidth} />
      <path d="M2 7L11.009 12.727C11.63 13.088 12.397 13.088 13.018 12.727L22 7" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}
