import * as React from "react";
import { HashLink, NavHashLink } from "react-router-hash-link";

import Header from "./Header";
import TextBox from "./TextBox";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

export const Home = () => {
  return (
    <>
      <Header />
      <TextBox />
      <About id="about" />
      <Projects id="projects" />
    </>
  );
};
