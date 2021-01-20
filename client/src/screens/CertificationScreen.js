import React from "react";
import { Radar } from "react-chartjs-2";
import { StyledCertificationScreen } from "../styles/pagestyles";

const href =
  "https://www.youracclaim.com/badges/52fdef8f-1daa-4488-ae3a-defdc2c9e232?source=linked_in_profile";

const CertificationScreen = () => {
  return (
    <StyledCertificationScreen>
      <section className="header-section">
        <h1 className="title">AWS Certified Developer - Associate</h1>
        <div className="credential">
          <a href={href} target="_blank">
            View Credentials
          </a>
        </div>
      </section>
    </StyledCertificationScreen>
  );
};

export default CertificationScreen;
