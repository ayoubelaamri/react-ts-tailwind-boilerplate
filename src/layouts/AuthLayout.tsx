import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/atoms/animations/LoadingSpin";
import ThemeSelector from "components/atoms/ThemeSelector";
import LanguageSelector from "components/atoms/LanguageSelector";

export default function AuthLayout() {
  return (
    <div className="relative grid place-items-center w-full h-full p-6">
      <div className="absolute top-0 right-10 flex items-center gap-2 py-3">
        <LanguageSelector />
        <ThemeSelector />
      </div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
