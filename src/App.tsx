import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Route as RouteName } from "./constants/route";
import NotFoundPage from "./pages/not-found/404";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteName.MAIN} element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
