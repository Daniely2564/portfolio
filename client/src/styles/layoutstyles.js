import styled from "styled-components";

const getBackgroundColor = (activeItem) => {
  switch (activeItem) {
    case "/":
      return "#F1433F";
    case "/education":
      return "#F7E967";
    case "/experience":
      return "#A9CF54";
    case "/project":
      return "#70B7BA";
    case "/youtube":
      return "#3D4C53";
    default:
      return "#F1433F";
  }
};

export const StyledSideNav = styled.nav`
  position: fixed;
  height: 100%;
  min-height: 100vh;
  width: 250px;
  background-color: ${(p) => getBackgroundColor(p.activeItem)};
  transition: background-color 0.9s;
  .profile-picture {
    width: 100%;
    overflow: hidden;
    height: 250px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nav-list {
    list-style: none;
    padding: 0;
    margin-top: 0;
  }
  .nav-list li {
    padding: 20px 20px;
    cursor: pointer;
    transition: background-color 1s;
    text-transform: uppercase;
  }
  .nav-list a {
    color: #fff;
  }
  a {
    text-decoration: none;
  }
  .nav-list .active {
    background-color: #fff;
    color: #333;
  }
`;
