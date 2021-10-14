import * as React from "react";
import { HashLink as Link } from "react-router-hash-link";

import { Wrapper, Content } from "./Header.styles";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -260;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
};

{
  /* <NavHashLink smooth to='/#link' scroll={el => scrollWithOffset(el)}>
   Link
</NavHashLink> */
}

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link smooth to="/">
          <h1>Home</h1>
        </Link>
        <Link smooth to="/#about" scroll={(el) => scrollWithOffset(el)}>
          <h1>About Me</h1>
        </Link>
        {/* <Link smooth to="/#experience" scroll={(el) => scrollWithOffset(el)}>
          <h1>Experience</h1>
        </Link> */}
        <Link smooth to="/#projects" scroll={(el) => scrollWithOffset(el)}>
          <h1>Projects</h1>
        </Link>
        <Link smooth to="/#contact" scroll={(el) => scrollWithOffset(el)}>
          <h1>Get In Touch</h1>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Header;
