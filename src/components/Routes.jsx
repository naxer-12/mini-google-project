import React from "react";
import { Routes, Route } from "react-router-dom";
import { Search } from "./Search";
import { Results } from "./Results";
export const Router = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Search />}></Route>

        {["/search", "/image", "/news", "/video"].map((path) => (
          <Route
            key="Home" // optional: avoid full re-renders on route changes
            path={path}
            element={<Results />}
          />
        ))}
      </Routes>
    </div>
  );
};
