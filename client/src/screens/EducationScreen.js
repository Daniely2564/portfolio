import React from "react";
import { StyledEducationPage } from "../styles/pagestyles";

const EducationScreen = () => {
  return (
    <StyledEducationPage>
      <section className="header-section">
        <h1 className="title">Education</h1>
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
        <div className="year-2017">2017</div>
        <div className="year-2019">2019</div>
        <div className="year-2021">2021</div>
        <div className="year-line"></div>
        <div className="circle-2017"></div>
        <div className="circle-2019"></div>
        <div className="circle-2021"></div>
        <div className="rutgers-school">Rutgers University - New Brunswick</div>
        <div className="mcc-school">Middlesex County College</div>
        <div className="university-card rutgers">
          <div style={{ float: "right" }}>
            <b>GPA</b> : 3.7/4.0
          </div>
          <h2>Rutgers university</h2>
          <div>
            <i>B.S. in Computer Science</i>
          </div>
          <br />
          <div>Dean's List for 2 semesters</div>
        </div>
        <div className="university-card mcc">
          <div style={{ float: "right" }}>
            <b>GPA</b> : 3.6/4.0
          </div>
          <h2>Middlesex County College</h2>
          <div>
            <i>A.S. in Computer Science</i>
          </div>
          <br />
          <div>Dean's List for 2 semesters</div>
        </div>
      </section>
    </StyledEducationPage>
  );
};

export default EducationScreen;
