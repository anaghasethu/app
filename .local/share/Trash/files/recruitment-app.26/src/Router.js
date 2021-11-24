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
const NamePageContainer = React.lazy(() =>
  import("./components/containers/NamePageContainer")
);
const GenderPageContainer = React.lazy(() =>
  import("./components/containers/GenderPageContainer")
);
const ContactPageContainer = React.lazy(() =>
  import("./components/containers/ContactPageContainer")
);
const LinkPageContainer = React.lazy(() =>
  import("./components/containers/LinkPageContainer")
);
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path={APP.ROUTES.LANDING} element={<MainContainer />} />
        <Route path="/resume" element={<ResumeContainer />} />
        <Route path={APP.ROUTES.RESUME} element={<ResumeContainer />} />
        <Route path="/namepage" element={<NamePageContainer />} />
        <Route path={APP.ROUTES.NAME} element={<NamePageContainer />} />
        <Route path="/genderpage" element={<GenderPageContainer />} />
        <Route path={APP.ROUTES.GENDER} element={<GenderPageContainer />} />
        <Route path="/contactpage" element={<ContactPageContainer />} />
        <Route path={APP.ROUTES.CONTACT} element={<ContactPageContainer />} />
        <Route path="/linkpage" element={<LinkPageContainer />} />
        <Route path={APP.ROUTES.LINK} element={<LinkPageContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
