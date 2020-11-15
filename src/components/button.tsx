import styled from "styled-components";
import { Color } from "../constants/theme";
import React from "react";
import { Image } from "./image";

export const Button = styled.button<{ isRegister?: any }>`
  border: none;
  color: ${Color.WHITE};
  width: 100%;
  background-color: ${Color.GREEN};
  height: 50px;
  border-radius: 2px;
  padding: 9px 0;
  flex-basis: 190%;
  font-size: 16px;
  cursor: pointer;
  ${(props) => props.isRegister && "margin: 18px 0;"}
  &:active {
    border-color: ${Color.GREEN};
  }
`;

interface IButtonBack {
  handleClick: any;
}
export const ButtonBack: React.FC<IButtonBack> = (props) => {
  return (
    <Image
      type="back"
      url={require("../assets/icon/back.png")}
      handleClick={props.handleClick}
    />
  );
};
