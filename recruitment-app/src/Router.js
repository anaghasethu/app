import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { APP } from "./constants/index";

// Code splitting using React.lazy
const MainContainer = React.lazy(() =>
  import("./components/containers/MainContainer")
);
const ResumeContainer = React.lazy(() =>
  import("./components/containers/ResumeContainer")
);
const PersonalDetailsContainer = React.lazy(() =>
  import("./components/containers/PersonalDetailsContainer")
);
const GenderPageContainer = React.lazy(() =>
  import("./components/containers/GenderPageContainer")
);

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path={APP.ROUTES.LANDING} element={<MainContainer />} />
        <Route path="/resume" element={<ResumeContainer />} />
        <Route path={APP.ROUTES.RESUME} element={<ResumeContainer />} />
        <Route path="/personaldetails" element={<PersonalDetailsContainer />} />
        <Route
          path={APP.ROUTES.PERSONAL}
          element={<PersonalDetailsContainer />}
        />
        <Route path="/genderpage" element={<GenderPageContainer />} />
        <Route path={APP.ROUTES.PERSONAL} element={<GenderPageContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
