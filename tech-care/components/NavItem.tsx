import React from "react";
import Image from "next/image";

interface NavItemProps {
  icon: string;
  iconWidth?: number;
  iconHeight?: number;
  label: string;
  onClick?: () => void;
}

export default function NavItem({
  icon,
  iconWidth,
  iconHeight,
  label,
  onClick,
}: NavItemProps) {
  return (
    <button
      className={`
        flex items-center gap-2 px-4 py-2
        transition-colors duration-200
        rounded-[41px]
        hover:bg-[#01F0D0]
      `}
      style={{ color: "#072635" }}
      aria-label={`Navigate to ${label}`}
      onClick={onClick}
    >
      <Image
        src={icon}
        alt=""
        width={iconWidth || 20}
        height={iconHeight || 20}
        style={{ filter: "invert(0) sepia(0) saturate(0) hue-rotate(0deg)" }}
        aria-hidden="true"
      />
      <span className="nav-item-text">{label}</span>
    </button>
  );
}
