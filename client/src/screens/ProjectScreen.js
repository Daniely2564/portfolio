import React from "react";
import { Radar } from "react-chartjs-2";
import { StyledProjectScreen } from "../styles/pagestyles";
import mern from "../img/MERN.png";
import nodejs from "../img/nodejs.png";
import javaswing from "../img/javaswing.png";
import react from "../img/react.png";

const ProjectScreen = () => {
  return (
    <StyledProjectScreen>
      <section className="header-section">
        <h1 className="title">Youtube Content Creator</h1>
      </section>
      <section className="body-section">
        <div className="flex-box body">
          <div className="flex-5 image-wrapper">
            <img src={mern} alt="profile" className="section-image" />
          </div>
          <div className="flex-2 explanation">
            <span className="number">01</span>
            <br />
            <b>
              Log In Application using MERN Stack(MongoDB + Express + React +
              Node.js)
            </b>
            <br />
            <br />
            <div className="explanation-detail">
              &nbsp;Teaches how to build a MERN stack application using Node.js,
              React.js and MongoDB. Node.js as a restful api, MongoDB as a
              database to store user information and React.js for user
              interface. Teaches how to use cookies and JWT token and verify
              users with JWT tokens. Additionally, teaches how to log in using
              Google accounts.
            </div>
          </div>
        </div>
      </section>
      <section className="body-section">
        <div className="flex-box body">
          <div className="flex-2 explanation-left">
            <span className="number">02</span>
            <br />
            <b>Vocabulary Application with Handlebars + Express + Node.js</b>
            <br />
            <br />
            <div className="explanation-detail">
              &nbsp;Teaches how to build a multiple page application using
              node.js, express and handlebars. Used JSON file to store and
              retrieve vocabulary words to mimic the MongoDB database. Teaches
              how to load pages and deal with custom 404 page, layout and so on.
            </div>
          </div>
          <div className="flex-5 image-wrapper">
            <img src={nodejs} alt="profile" className="section-image" />
          </div>
        </div>
      </section>
      <section className="body-section">
        <div className="flex-box body">
          <div className="flex-5 image-wrapper">
            <img src={javaswing} alt="profile" className="section-image" />
          </div>
          <div className="flex-2 explanation">
            <span className="number">03</span>
            <br />
            <b>
              Application to store/retrieve customer infomation using Java and
              MYSQL
            </b>
            <br />
            <br />
            <div className="explanation-detail">
              &nbsp;Teaches how to create a desktop application using Java Swing
              and connect, store and retrieve information from MYSQL database.
              Also teaches how to build the UI more easily by using Windows
              Builder and handle buttons or other component click/type events.
            </div>
          </div>
        </div>
      </section>
      <section className="body-section">
        <div className="flex-box body">
          <div className="flex-2 explanation-left">
            <span className="number">04</span>
            <br />
            <b>Portfolio React.js application</b>
            <br />
            <br />
            <div className="explanation-detail">
              &nbsp;Teaches how to use React.js and create react components and
              how to use state and handle events. Also teaches how to use
              Semantic-UI CSS framework. The application is fully responsive and
              interactive.
            </div>
          </div>
          <div className="flex-5 image-wrapper">
            <img src={react} alt="profile" className="section-image" />
          </div>
        </div>
      </section>
    </StyledProjectScreen>
  );
};

export default ProjectScreen;
