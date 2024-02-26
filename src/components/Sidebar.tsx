import AppContext from "context/AppContext";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  const menu = [
    {
      name: "Home",
      icon: "home",
      link: "/admin",
      end:true
    },
    {
      name: "Chat",
      icon: "comments",
      link: "/admin/chat",
      end:false
    },
    {
      name: "Assistant",
      icon: "circle-info",
      link: "/admin/assistant",
      end:false
    },
    {
      name: "History",
      icon: "clock-rotate-left",
      link: "/admin/history",
      end:false
    },
  ];

  return (
    <>
      <div className="hidden md:flex flex-col items-center gap-10 h-full rounded-l-3xl px-6 py-6 border-r-2 border-white">
        <Link to="/" className="">
          <img
            src={require("assets/images/logo.png")}
            alt="logo"
            className="w-16"
          />
        </Link>
        <div className="grid items-center h-full">
          <div className="grid gap-10">
            {menu.map((item) => {
              return (
                <NavLink
                  end={item?.end}
                  to={item?.link || "#"}
                  // onClick={window.innerWidth < 500 ? toggleSidebar : () => {}}
                  className={({ isActive, isPending }) =>
                    `grid place-items-center gap-0 px-3 py-3 border border-neutral2 shadow-md rounded-xl hover:bg-neutral2 duration-75 ${
                      isActive
                        ? "bg-neutral2 text-primary"
                        : "hover:text-primary"
                    }`
                  }
                >
                  {item?.icon && (
                    <i className={`fa fa-${item?.icon} text-lg mr-0 mb-1 `} />
                  )}
                  <span className="text-center font-semibold">
                    {item?.name}
                  </span>
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="h-24"></div>
      </div>
      <div className="md:hidden flex gap-0 justify-center w-full">
        {menu.map((item) => {
          return (
            <NavLink
              end={item?.end}
              to={item?.link || "#"}
              className={({ isActive, isPending }) =>
                `w-36 grid place-items-center gap-0 px-3 py-3 rounded-t-xl hover:bg-neutral2 duration-75 ${
                  isActive ? "bg-neutral2 text-primary" : "hover:text-primary"
                }`
              }
            >
              {item?.icon && (
                <i className={`fa fa-${item?.icon} text-lg mr-0 mb-1 `} />
              )}
              <span className="text-center font-semibold text-xs">{item?.name}</span>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
