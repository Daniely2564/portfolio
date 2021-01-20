import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import ProfileScreen from "./screens/ProfileScreen";
import EducationScreen from "./screens/EducationScreen";
import ExperienceScreen from "./screens/ExperienceScreen";
import ProjectScreen from "./screens/ProjectScreen";
import CertificationScreen from "./screens/CertificationScreen";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route component={ProfileScreen} path="/" exact />
          <Route component={ProfileScreen} path="/portfolio" />
          <Route component={EducationScreen} path="/education" />
          <Route component={ExperienceScreen} path="/experience" />
          <Route component={ProjectScreen} path="/project" />
          <Route component={CertificationScreen} path="/certificate" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
