import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/ui/Loading";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function HomeLayout() {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <div className="grid place-items-center h-full w-full p-6">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}
