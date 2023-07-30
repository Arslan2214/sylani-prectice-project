import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from './Login'
import Register from './Register'

function index() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="*"
          element={
            <h1 className="display-3 text-center mt-5">404 | Not Found</h1>
          }
        />
      </Routes>
    </>
  );
}

export default index;
