import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Route as RouteName } from "./constants/route";
import Layout from "./components/base/Layout";
import NotFoundPage from "./pages/not-found/404";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Writing from "./pages/Writing";
import MLArchives from "./pages/ML_Archives";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={RouteName.HOME} element={<Home />} />
          <Route path={RouteName.PROJECTS} element={<Projects />} />
          <Route path={RouteName.WRITING} element={<Writing />} />
          <Route path={RouteName.ML_ARCHIVES} element={<MLArchives />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
