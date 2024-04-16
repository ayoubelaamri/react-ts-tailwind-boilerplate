import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import LanguageSelector from "./atoms/LanguageSelector";
import ThemeSelector from "./atoms/ThemeSelector";
import { Dropdown } from "flowbite-react";
import AuthContext from "context/AuthContext";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const { t } = useTranslation();

  const menu = [
    {
      name: t("menu.home"),
      icon: "home",
      link: "/admin",
      end: true,
    },
    {
      name: "Dropdown",
      icon: "comments",
      link: "/admin/chat",
      end: false,
    },
    {
      name: t("menu.about"),
      icon: "circle-info",
      link: "/admin/assistant",
      end: false,
    },
    {
      name: t("menu.contact"),
      icon: "clock-rotate-left",
      link: "/contact",
      end: false,
      isAction: true,
    },
  ];

  return (
    <div className="flex items-center justify-between border-b border-white dark:border-gray-700 px-10 py-2 h-[80px]">
      <div className="flex items-center gap-3 pr-16">
        <Link to="/">
          {/* <img
            src={require("assets/images/logo.png")}
            alt="logo"
            className="h-12"
          /> */}
          <h1 className="font-bold text-xl text-primary font-poppins">
            BOILERPLATE
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        {menu.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.link}
              className={`font-semibold text-md border-primary ${
                item?.isAction
                  ? "bg-gradient-to-br from-primary1 to-primary2 text-neutral2 rounded-lg shadow-lg px-3 py-2"
                  : "hover:border-b-[3px] hover:text-primary"
              }`}
            >
              {item.name}
            </NavLink>
          );
        })}
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <ThemeSelector />
        </div>
        <div className="flex items-center gap-2 hover:text-primary duration-75">
          {!user ? (
            <Link to="/auth/sign-in" className="">
              <i className="fa fa-sign-in"></i>
            </Link>
          ) : (
            <Dropdown
              className=""
              arrowIcon={false}
              inline
              label={
                <img
                  src={require("assets/images/avatars/10.jpg")}
                  className="w-8 h-8 rounded-full shadow-lg"
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Ayoub EL AAMRI</span>
                <span className="block truncate text-sm font-medium">
                  contact@senorjob.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>
                <Link to="/profile" className="">
                  Profile
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/settings" className="">
                  Settings
                </Link>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
}
