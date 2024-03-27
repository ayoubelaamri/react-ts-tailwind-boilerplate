import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/atoms/animations/LoadingSpin";

export default function AuthLayout() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
