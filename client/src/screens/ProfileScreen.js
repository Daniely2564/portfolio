import React from "react";
import { Radar } from "react-chartjs-2";
import { StyledProfileScreen } from "../styles/pagestyles";

const ProfileScreen = () => {
  return (
    <StyledProfileScreen>
      <section className="header-section">
        <h1 className="title">
          Full Stack <br />
          Engineer
        </h1>
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
        <div className="who-am-i">
          <h3>Who Am I?</h3>
          <p>
            &nbsp;A passionate full stack engineer who is always trying to learn
            and improve. Love to face challenges and put the best effort to
            finish given tasks completely. Always open to feedbacks to become a
            better engineer.
          </p>
        </div>
      </section>
      <section className="skills-section">
        <h1 className="skills-title">Technical Skills</h1>
        <div className="language-fluency">
          <h2>Language Fluency</h2>
          <br />
          <div className="chart-wrapper">
            <Radar
              data={{
                labels: ["Node.js", "Python", "Typescript", "Java", "C"],
                datasets: [
                  {
                    label: "Fluency",
                    data: [10, 8, 7, 8, 5],
                    backgroundColor: ["rgba(54, 162, 235, 0.2)"],
                    borderColor: ["rgba(54, 162, 235, 1)"],
                    borderWidth: 1,
                  },
                ],
              }}
              width={100}
              height={100}
              options={{
                maintainAspectRatio: false,
                scale: {
                  angleLines: {
                    display: false,
                  },
                  pointLabels: {
                    fontSize: 12,
                  },
                  ticks: {
                    suggestedMin: 0,
                    suggestedMax: 10,
                  },
                },
                legend: {
                  labels: {
                    fontSize: 12,
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="list-wrapper">
          <h3>Web Development</h3>
          <ul>
            <li>HTML/CSS/Javascript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>GraphQL</li>
          </ul>
          <br />
          <h3>AWS Services</h3>
          <ul>
            <li>IAM</li>
            <li>EC2</li>
            <li>Load Balancer</li>
            <li>Auto Scaling Group</li>
            <li>S3 Bucket</li>
            <li>Route 53</li>
            <li>Lambda</li>
          </ul>
          <br />
          <h3>Machine Learning</h3>
          <ul>
            <li>Numpy</li>
            <li>Pandas</li>
            <li>Data Visualization</li>
            <li>Pytorch</li>
          </ul>
          <br />
          <h3>Version Control</h3>
          <ul>
            <li>Git</li>
          </ul>
          <br />
          <h3>Desktop Application</h3>
          <ul>
            <li>Electron.js</li>
            <li>Java Swing</li>
            <li>JavaFX</li>
          </ul>
        </div>
      </section>
    </StyledProfileScreen>
  );
};

export default ProfileScreen;
