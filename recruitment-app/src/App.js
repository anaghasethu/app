import React, { Suspense } from "react";
import "./App.css";
import Router from "./Router";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router />
    </Suspense>
  );
};

export default App;
