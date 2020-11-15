import styled from "styled-components";
import { Color } from "../constants/theme";

export const TextInput = styled.input`
  outline: 0;
  border-width: 0 0 1px;
  border-color: ${Color.GREY};
  color: ${Color.GREY_LIGHT};
  width: 100%;
  padding-bottom: 8px;
  margin-bottom: 18px;
  opacity: 0.6;
  &:focus {
    border-color: ${Color.GREY};
    opacity: 1;
  }
  &:not(:placeholder-shown) {
    border-color: ${Color.BLACK};
    opacity: 1;
    color: ${Color.BLACK};
  }
`;
