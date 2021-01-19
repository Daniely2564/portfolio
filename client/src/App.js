import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import ProfileScreen from "./screens/ProfileScreen";
import EducationScreen from "./screens/EducationScreen";
import ExperienceScreen from "./screens/ExperienceScreen";
import ProjectScreen from "./screens/ProjectScreen";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route component={ProfileScreen} path="/" exact />
          <Route component={EducationScreen} path="/education" />
          <Route component={ExperienceScreen} path="/experience" />
          <Route component={ProjectScreen} path="/project" />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
