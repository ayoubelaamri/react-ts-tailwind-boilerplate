import { Suspense, useContext } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/ui/Loading";
import Footer from "components/Footer";
import Sidebar from "components/Sidebar";
import AppContext from "context/AppContext";
import NavAdmin from "components/NavAdmin";

export default function AdminLayout() {
  const { isSidebarOpen } = useContext(AppContext);

  return (
    <div className="grid md:flex w-full h-full">
      <div
        className={`absolute md:relative bottom-8 md:bottom-0 w-full md:w-[150px] border-b-4 border-white`}
      >
        <Sidebar />
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="w-full h-[70px]">
          <NavAdmin />
        </div>
        <div className="h-full w-full p-6">
          <div className="h-[calc(100%-4em)] md:h-full">
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}
