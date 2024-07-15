import React from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Loader from "../components/Loader";

function RootRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default RootRouter;
