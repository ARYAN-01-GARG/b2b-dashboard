import React from "react";
import { BADGE_COLORS } from "@/constants";

interface BadgeProps {
  label: string;
  variant?: keyof typeof BADGE_COLORS;
  color?: string;
  getColor?: (value: string) => string;
  className?: string;
}

const defaultGetColor = () => {
  // Default color mapping for unknown values
  return "bg-gray-100 text-gray-800";
};

export const Badge: React.FC<BadgeProps> = ({ 
  label, 
  variant, 
  color, 
  getColor, 
  className 
}) => {
  let badgeColor = color;
  
  if (!badgeColor) {
    if (variant && BADGE_COLORS[variant]) {
      badgeColor = BADGE_COLORS[variant][label as keyof typeof BADGE_COLORS[typeof variant]] || defaultGetColor();
    } else if (getColor) {
      badgeColor = getColor(label);
    } else {
      badgeColor = defaultGetColor();
    }
  }

  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${badgeColor} ${className || ""}`}>
      {label}
    </span>
  );
};

export default Badge;
