"use client";

import { FC, useEffect } from "react";
import { themeChange } from "theme-change";

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          Veo Company Structure
        </a>
      </div>
    </div>
  );
};

export default Navbar;
