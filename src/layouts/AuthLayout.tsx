import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../components/ui/Loading";

export default function AuthLayout() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}
