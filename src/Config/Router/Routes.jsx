import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../../Pages/NotFound";
import Home from "../../Pages/Home";
import ProtectedRoutes from "./ProtectedRoutes";
import AddQuestions from "../../Pages/AddQuestions";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoutes component={Home} />} />
        <Route
          path="/add-questions"
          element={<ProtectedRoutes component={AddQuestions} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
