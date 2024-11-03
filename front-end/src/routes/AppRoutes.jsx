import React from "react";
import { Route, Routes } from "react-router-dom";
import Post from "../pages/Post";
import Login from "../pages/Login";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/post/:id" element={<Post />}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}
