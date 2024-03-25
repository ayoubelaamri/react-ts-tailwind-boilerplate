import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
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
    <>
      <div className="hidden md:flex flex-col items-center gap-10 h-full px-6 py-6">
        <Link to="/" className="">
          <img
            src={require("assets/images/logo.png")}
            alt="logo"
            className="w-16 rounded-lg shadow-lg"
          />
        </Link>
        <div className="grid items-center h-full">
          <div className="grid divide-y-2 divide-primary-100">
            {menu.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  end={item?.end}
                  to={item?.link || "#"}
                  // onClick={window.innerWidth < 500 ? toggleSidebar : () => {}}
                  className={({ isActive, isPending }) =>
                    `grid place-items-center gap-0 py-6 duration-75 ${
                      isActive ? "text-primary" : "hover:text-primary"
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
        <div className=""></div>
      </div>
      <div className="md:hidden flex gap-0 justify-center w-full bg-white/50 divide-x-2 divide-primary-100 py-3">
        {menu.map((item, index) => {
          return (
            <NavLink
              key={index}
              end={item?.end}
              to={item?.link || "#"}
              className={({ isActive, isPending }) =>
                `w-36 grid place-items-center gap-0 px-3 duration-75 ${
                  isActive ? "text-primary" : "hover:text-primary"
                }`
              }
            >
              {item?.icon && (
                <i className={`fa fa-${item?.icon} text-lg mr-0 mb-1 `} />
              )}
              <span className="text-center font-semibold text-xs">
                {item?.name}
              </span>
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
