import styled from "styled-components";

export const Wrapper = styled.div`
  height: 92vh;

  display: grid;
  grid-template-columns: 45% 45%;
  grid-column-gap: 10%;
  padding: 0% 5% 10% 5%;
  background-color: var(--white);

  p {
    color: var(--darkGrey);
    font-size: 25px;
  }

  #photo {
    width: 200px;
    margin: 100px 0 0 60px;
  }

  #pictureOfMe {
    text-align: center;
    padding-top: 20%;
  }
`;
export const Content = styled.div`
  text-align: center;
  vertical-align: middle;
  padding-top: 50%;

  h1 {
    font-size: 50px;
  }
`;

export const Picture = styled.img`
  border: var(--darkGrey);
  border-width: 10px;
  border-radius: 10px;
  height: 600px;
  text-align: center;
`;
