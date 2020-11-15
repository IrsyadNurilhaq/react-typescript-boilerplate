import styled from "styled-components";
import { Color } from "../constants/theme";
interface IText {
  color?: any;
  size?: string;
  justify?: any;
  type?: any;
  center?: any
  pointer?: any
}
export const Text = styled.p<IText>`
  color: ${(props) => props.color || Color.BLUE_DARK};
  font-size: ${(props) => props.size || 14}px;
  margin: 0;
  ${(props) => props.justify && "text-align: justify;"}
  ${(props) => props.type === "banner" && "margin: 12px 0 23px"}
`;

export const TitleText = styled.h4<IText>`
  color: ${(props) => props.color || Color.BLACK_FONT};
  font-size: ${(props) => props.size || 14}px;
  margin: 0;
  ${(props) => props.type === "banner" && "margin: 12px 0 23px 12px;"}
  text-align:${(props) => props.center ? "center" : "left"};
  cursor: ${props => props.pointer ? "pointer" : "initial"};
`;
