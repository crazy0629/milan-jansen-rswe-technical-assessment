import React from 'react';
import * as TW from './index.styles'; // Import Tailwind Modules

// Define the interface for the NavItem Props
type NavItemProps = {
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  link?: string;
};

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  activeIcon,
  active,
  label,
  link = '#',
  onClick,
}) => {
  return (
    <TW.Wrapper
      href={link}
      onClick={onClick}
      active={active ? 'true' : undefined}
    >
      <span>{active ? activeIcon : icon}</span>
      <TW.Label>{label}</TW.Label>
    </TW.Wrapper>
  );
};
