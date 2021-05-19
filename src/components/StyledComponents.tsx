import styled from "@emotion/styled";
import color from "../styles/color";

export const MainContainer = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  flex-flow: column;
  margin: 0 auto;
  width: 762px;
`;

export const Header = styled.header`
  height: 60px;
  background-color: ${color.main};
  display: flex;
  justify-content: center;
  align-items: center;
`;
