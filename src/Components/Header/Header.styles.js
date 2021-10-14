import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--medGrey);
  padding: 0px 0px;
  margin: 0px 0px;
  height: 8vh;
  position: sticky;
  top: 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: left;
  justify-content: space-around;
  padding-right: 50%;

  > * {
    text-decoration: none;
  }

  h1 {
    color: var(--white);
  }
`;
