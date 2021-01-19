import React from "react";
import { StyledExperiencePage } from "../styles/pagestyles";
import hr_logo from "../img/hr_logo.png";
import structure from "../img/structure.png";
import profile from "../img/profile.png";
import progress from "../img/progress.PNG";
import analysis from "../img/analysis.PNG";
import quiz from "../img/quiz.png";

const ExperienceScreen = () => {
  return (
    <StyledExperiencePage>
      <section className="header-section">
        <img src={hr_logo} alt="Honors Review" className="logo" />
        <div className="header-card">
          <div className="card-name">Daniel Yoo</div>
          <div>
            <i class="fas fa-phone-square-alt"></i> 908-356-2278
          </div>
          <div>
            <i class="fas fa-envelope-square"></i> danielyoo132@gmail.com
          </div>
          <br />
          <div>
            <i class="fab fa-internet-explorer"></i> www.google.com
          </div>
        </div>
        <img src={structure} alt="structure.png" id="structure" />
      </section>
      <section className="body-section">
        <div className="flex-box body">
          <div className="flex-5 image-wrapper">
            <img src={profile} alt="profile" className="section-image" />
          </div>
          <div className="flex-2 explanation">
            <span className="number">01</span>
            <br />
            <b>Student Profile</b>
            <br />
            <br />
            <div className="explanation-detail">
              &nbsp;Stores student/parents information, important note about the
              student and emergency contact. Can add/remove courses. Keeps track
              of student's test results and transactions.
            </div>
          </div>
        </div>
      </section>
      <section className="body-section">
        <div className="flex-box body">
          <div className="flex-2 explanation">
            <span className="number">02</span>
            <br />
            <b>Student Progress</b>
            <br />
            <br />
            <div className="explanation-detail">
              &nbsp;Shows how well the student is doing on the given type of
              test over the time.
            </div>
          </div>
          <div className="flex-5 image-wrapper">
            <img src={progress} alt="profile" className="section-image" />
          </div>
        </div>
      </section>
      <section className="body-section">
        <div className="flex-box body">
          <div className="flex-5 image-wrapper">
            <img src={analysis} alt="profile" className="section-image" />
          </div>
          <div className="flex-2 explanation">
            <span className="number">03</span>
            <br />
            <b>Analysis on the test</b>
            <br />
            <br />
            <div className="explanation-detail">
              &nbsp;Displays how well a student did and detailed analysis on
              which part student needs to work on.
            </div>
          </div>
        </div>
      </section>
      <section className="body-section">
        <div className="flex-box body">
          <div className="flex-5 image-wrapper">
            <img src={quiz} alt="profile" className="section-image" />
          </div>
          <div className="flex-2 explanation">
            <span className="number">04</span>
            <br />
            <b>Quizzes</b>
            <br />
            <br />
            <div className="explanation-detail">
              &nbsp;Students can take quizzes and these quizzes can be made by
              teachers/administrators.
            </div>
          </div>
        </div>
      </section>
    </StyledExperiencePage>
  );
};

export default ExperienceScreen;
