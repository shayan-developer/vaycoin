import { Link, useMatch } from "react-router-dom";
import React from "react";

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label }) => {
  const match = useMatch(to);
  const activeClass = match ? "bg-[#1c1f24] " : "";

  return (
    <div className={`text-center w-1/5 m-1 p-2 rounded-2xl text-[#85827d] ${activeClass}`}>
      <Link to={to}>
        <Icon className="w-8 h-8 mx-auto" />
        <p className="mt-1">{label}</p>
      </Link>
    </div>
  );
};

export default NavItem;
