import React from "react";
import { Route, Routes } from "react-router-dom";
import Post from "../pages/Post";
import Login from "../pages/Login";
import Busca from "../pages/Usuarios";
import Feed from "../pages/Feed";
import Cadastro from "../pages/Cadastro";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/" element={<Feed />} />
        <Route path="/busca" element={<Busca />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
      </Routes>
    </>
  );
}
