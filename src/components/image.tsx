import styled from "styled-components";
import React from "react";

interface IImage {
  type: string;
  url: string;
  fit?: any;
  handleClick?: any;
}
interface IComponent {
  w: any;
  h: any;
  br?: any;
  fit?: any;
  margin?: any;
  cursor?: any;
}
const ImageC = styled.img<IComponent>`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  ${(props) => props.br && `border-radius: ${props.br};`}
  object-fit: ${(props) => (props.fit ? "cover" : "fill")};
  margin: ${(props) => props.margin};
  cursor: ${(props) => props.cursor};
`;

export const Image: React.FC<IImage> = (props) => {
  let width, height, br, margin, cursor;

  if (props.type === "logo-tko") {
    width = "102px";
    height = "32px";
  }
  if (props.type === "banner") {
    width = "100%";
    height = "120px";
    br = "4px";
  }
  if (props.type === "verify") {
    width = "16px";
    height = "16px";
  }
  if (props.type === "back") {
    width = "18px";
    height = "15px";
    margin = "3px 15px 0 0";
    cursor = "pointer";
  }
  return (
    <ImageC
      src={props.url}
      w={width}
      h={height}
      alt={props.type}
      br={br ? br : null}
      fit={props.fit || null}
      margin={margin || 0}
      cursor={cursor || "initial"}
      onClick={() => {
        props.handleClick ? props.handleClick() : void 0;
      }}
    />
  );
};
