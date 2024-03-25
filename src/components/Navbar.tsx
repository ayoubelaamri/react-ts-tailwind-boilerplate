import React, { useContext } from "react";
import AccountMenu from "./atoms/menus/AccountMenu";
import NotificationsMenu from "./atoms/menus/NotificationsMenu";
import { Link } from "react-router-dom";
import AppContext from "context/AppContext";

export default function Navbar() {
  const menu = [
    {
      name: "Home",
      icon: "home",
      link: "/admin",
      end: true,
    },
    {
      name: "Chat",
      icon: "comments",
      link: "/admin/chat",
      end: false,
    },
    {
      name: "Assistant",
      icon: "circle-info",
      link: "/admin/assistant",
      end: false,
    },
    {
      name: "History",
      icon: "clock-rotate-left",
      link: "/admin/history",
      end: false,
    },
  ];

  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-6 py-2 h-[80px]">
      <div className="flex items-center gap-3">
        <Link to="/">
          <img
            src={require("assets/images/logo.png")}
            alt="logo"
            className="h-12"
          />
        </Link>
      </div>
      <div className="flex items-center gap-6 px-10">
        {menu.map((item, index) => {
          return (
            <Link
              to={item.link}
              className="font-semibold text-md hover:text-primary border-primary hover:border-b-[3px]"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
