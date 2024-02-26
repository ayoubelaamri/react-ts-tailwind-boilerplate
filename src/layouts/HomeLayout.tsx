import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/ui/Loading";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function HomeLayout() {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <div className="h-full w-full p-6 overflow-auto">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
