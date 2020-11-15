import styled from "styled-components";
import React from "react";
import { ButtonBack } from "../button";
import { Text } from "../text";
import { Color, Size } from "../../constants/theme";

export const Header = styled.div<{ ispage?: any }>`
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.06);
  height: 70px;
  width: 100%;
  padding: ${(props) => (props.ispage ? "30px 0 0 30px" : "19px 0 19px 29px")};
  display: flex;
`;

interface IHeader {
  onClick: any;
  content: string;
}

export const HeaderC: React.FC<IHeader> = (props) => {
  return (
    <Header ispage>
      <ButtonBack handleClick={props.onClick} />
      <Text color={Color.BLACK} size={Size.X_LARGE}>
        {props.content}
      </Text>
    </Header>
  );
};
