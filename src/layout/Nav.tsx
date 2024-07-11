import React from "react";
import NavItem from "./NavItem";
import Coins from "../icons/Coins";
import Friends from "../icons/Friends";
import Mine from "../icons/Mine";
import { binanceLogo } from "../images";

const Nav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-xl bg-[#272a2f] flex justify-around items-center z-50 rounded-3xl text-xs">
      <NavItem to="/" icon={() => <img src={binanceLogo} alt="Exchange" className="w-8 h-8 mx-auto" />} label="Exchange" />
      <NavItem to="/mine" icon={Mine} label="Mine" />
      <NavItem to="/friends" icon={Friends} label="Friends" />
      <NavItem to="/earn" icon={Coins} label="Earn" />
    </div>
  );
};

export default Nav;
