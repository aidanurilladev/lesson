import styled from "styled-components";

const Syled = styled.p`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

export const Typography = ({ variant = "p", children }) => {
  if ((variant = "p")) return <Syled>{children}</Syled>
  ;
};
