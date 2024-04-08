import React, { useContext } from "react";
import AccountMenu from "./atoms/menus/AccountMenu";
import NotificationsMenu from "./atoms/menus/NotificationsMenu";
import { Link } from "react-router-dom";
import AppContext from "context/AppContext";

export default function NavAdmin() {
  return (
    <div className="flex items-center justify-between border-b border-white dark:border-gray-700 px-6 py-2">
      <div className="flex items-center gap-3 md:hidden">
        <Link to="/">
          <img
            src={require("assets/images/logo.png")}
            alt="logo"
            className="w-10"
          />
        </Link>
      </div>
      <div className=""></div>
      <div className="flex items-center gap-6">
        <NotificationsMenu />
        <AccountMenu />
      </div>
    </div>
  );
}
