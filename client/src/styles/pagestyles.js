import styled from "styled-components";
import ytImg from "../img/youtube_cover.PNG";

export const StyledProfileScreen = styled.div`
  background-color: #dadada;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 300px;
  padding-top: 100px;

  .header-section {
    width: 80%;
    height: 80vh;
    background-color: #f3f3f3;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 3px 3px 18px rgba(0, 0, 0, 0.5);
    position: relative;
    margin-bottom: 300px;
  }
  .title {
    position: absolute;
    top: 10%;
    left: 10%;
    font-size: 3rem;
    text-transform: uppercase;
  }
  .header-card {
    position: absolute;
    right: 10%;
    top: 10%;
    width: 260px;
    border-left: 3px solid #000;
    padding: 10px 20px;
    padding-right: 0;
  }
  .card-name {
    line-height: 2rem;
    font-size: 1.5rem;
  }
  .who-am-i {
    position: absolute;
    bottom: 10%;
    left: 10%;
    width: 300px;
  }
  .skills-section {
    width: 80%;
    height: 80vh;
    background-color: #f3f3f3;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 3px 3px 18px rgba(0, 0, 0, 0.5);
    position: relative;
  }
  .skills-title {
    position: absolute;
    top: 10%;
    left: 10%;
    font-size: 2.3rem;
    text-transform: uppercase;
  }
  .language-fluency {
    width: 50%;
    position: absolute;
    text-align: center;
    bottom: 20%;
  }
  .chart-wrapper {
    width: 80%;
    height: 38vh;
    margin-left: auto;
    margin-right: auto;
  }
  .list-wrapper {
    position: absolute;
    width: 50%;
    left: 55%;
    top: 10%;
  }
`;

export const StyledEducationPage = styled.div`
  background-color: #dadada;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 300px;
  padding-top: 100px;
  .header-section {
    width: 80%;
    height: 80vh;
    background-color: #f3f3f3;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 3px 3px 18px rgba(0, 0, 0, 0.5);
    position: relative;
    margin-bottom: 300px;
  }
  .title {
    position: absolute;
    top: 10%;
    left: 10%;
    font-size: 3rem;
    text-transform: uppercase;
  }
  .header-card {
    position: absolute;
    right: 10%;
    top: 10%;
    width: 260px;
    border-left: 3px solid #000;
    padding: 10px 20px;
    padding-right: 0;
  }
  .card-name {
    line-height: 2rem;
    font-size: 1.5rem;
  }
  .year-2017 {
    position: absolute;
    top: 200px;
    left: 80px;
  }
  .year-2019 {
    position: absolute;
    top: 250px;
    left: 80px;
  }
  .year-2021 {
    position: absolute;
    top: 300px;
    left: 80px;
  }
  .year-line {
    position: absolute;
    height: 180px;
    left: 140px;
    top: 170px;
    border: 1px solid black;
  }
  .circle-2017 {
    border: 5px solid black;
    position: absolute;
    left: 136px;
    top: 204px;
    border-radius: 50%;
  }
  .circle-2019 {
    border: 5px solid black;
    position: absolute;
    left: 136px;
    top: 254px;
    border-radius: 50%;
  }
  .circle-2021 {
    border: 5px solid black;
    position: absolute;
    left: 136px;
    top: 304px;
    border-radius: 50%;
  }
  .rutgers-school {
    position: absolute;
    left: 160px;
    top: 280px;
  }
  .mcc-school {
    position: absolute;
    left: 160px;
    top: 230px;
  }
  .university-card {
    position: absolute;
    width: 42.5%;
    border-radius: 8px;
    height: 20%;
    bottom: 10%;
    border: 1px solid #000;
    padding: 25px;
  }
  .rutgers {
    left: 5%;
  }
  .mcc {
    right: 5%;
  }
`;

export const StyledExperiencePage = styled.div`
  background-color: #dadada;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 300px;
  padding-top: 100px;
  .header-section {
    width: 80%;
    height: 80vh;
    background-color: #f3f3f3;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 3px 3px 18px rgba(0, 0, 0, 0.5);
    position: relative;
    margin-bottom: 300px;
  }
  .title {
    position: absolute;
    top: 10%;
    left: 10%;
    font-size: 3rem;
    text-transform: uppercase;
  }
  .header-card {
    position: absolute;
    right: 10%;
    top: 10%;
    width: 260px;
    border-left: 3px solid #000;
    padding: 10px 20px;
    padding-right: 0;
  }
  .card-name {
    line-height: 2rem;
    font-size: 1.5rem;
  }
  .logo {
    width: 25%;
    max-width: 300px;
    position: absolute;
    top: 10%;
    left: 10%;
  }
  #structure {
    width: 50%;
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
  .body-section {
    width: 80%;
    height: 80vh;
    background-color: #f3f3f3;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 3px 3px 18px rgba(0, 0, 0, 0.5);
    position: relative;
    margin-bottom: 300px;
  }
  .section-image {
    width: 100%;
    max-height: 80%;
  }
  .body {
    position: absolute;
    top: 5%;
    width: 100%;
  }
  .image-wrapper {
    max-height: 80%;
  }
  .explanation {
    padding: 0px 60px 0px 20px;
  }
  .number {
    font-size: 2rem;
    color: #33854b;
    font-weight: bold;
  }
  .explanation-detail {
    letter-spacing: 0.04rem;
  }
`;

export const StyledProjectScreen = styled.div`
  background-color: #dadada;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 300px;
  padding-top: 100px;

  .header-section {
    width: 80%;
    height: 80vh;
    background-color: #f3f3f3;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 3px 3px 18px rgba(0, 0, 0, 0.5);
    position: relative;
    margin-bottom: 300px;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.8)
      ),
      url(${ytImg});
    background-size: cover;
  }
  .title {
    position: absolute;
    top: 10%;
    left: 10%;
    font-size: 3rem;
    text-transform: uppercase;
  }
  .header-card {
    position: absolute;
    right: 10%;
    top: 10%;
    width: 260px;
    border-left: 3px solid #000;
    padding: 10px 20px;
    padding-right: 0;
  }
  .card-name {
    line-height: 2rem;
    font-size: 1.5rem;
  }
  .body-section {
    width: 80%;
    height: 80vh;
    background-color: #f3f3f3;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 3px 3px 18px rgba(0, 0, 0, 0.5);
    position: relative;
    margin-bottom: 300px;
  }
  .section-image {
    width: 100%;
    max-height: 80%;
  }
  .body {
    position: absolute;
    top: 5%;
    width: 100%;
  }
  .image-wrapper {
    max-height: 80%;
  }
  .explanation {
    padding: 0px 60px 0px 20px;
  }
  .number {
    font-size: 2rem;
    color: #33854b;
    font-weight: bold;
  }
  .explanation-detail {
    letter-spacing: 0.04rem;
  }
`;
