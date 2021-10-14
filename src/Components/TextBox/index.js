import React from "react";

import { Wrapper, Content, Picture } from "./TextBox.styles";

import myPicture from "../Public/forResumePhoto.png";

const TextBox = (props) => {
  return (
    <Wrapper id={props.id}>
      <Content>
        <h1 className="firstone">Jacob Martin</h1>

        <h2>Technical Support Engineer / Web Developer</h2>
        {/* <p id="first">
          I love building and fixing applications. I currently work as a Tier 3
          Support Engineer for Azure App Services, Azure Functions, and Azure
          Static Web Apps. I'm on the Development/Open Source Software team, so
          I spend a lot of time working with deployments and pipelines (Github
          Actions and Azure DevOps), and also providing architectural
          advice/support for people building web apps and APIs in various
          langugages, like node.js, python, php, and java.
        </p>
        <br />
        <br />
        <p id="second">
          I've worked at my current company for about 2 years. Before that, I
          lived and worked for 3 and a half years in Democratic Republic of
          Congo. I worked as a teacher, and accompanied various organizations
          that were working for peace and development around the country. During
          my time there, I was frustrated by the lack of economic opportunity,
          which I believed was a central driver of all the other problems. I
          then became interested in technology, because I believe it's one of
          the central drivers of economic opportunity in our world today.
        </p> */}
      </Content>
      <div id="pictureOfMe">
        <Picture src={myPicture} />
        {/* <p id="photo">
          A photo hiking just outside Nairobi a few years ago. I like to spend
          time outside in my off hours, and hiking is one of my favorite
          activites.{" "}
        </p> */}
      </div>
    </Wrapper>
  );
};

export default TextBox;
