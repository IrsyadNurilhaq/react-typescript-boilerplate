import styled from "styled-components";
import OtpInput from "react-otp-input";
import { Color as C } from "../../constants/theme";

export const FormOtp = styled(OtpInput)`
  width: 100%;
  color: black;
  margin-top: 30px;
`;

export const SyleInput = {
  outline: "0",
  borderWidth: "0 0 2px",
  borderColor: `${C.GREY_BORDER}`,
  color: `${C.BLACK}`,
  width: "100%",
  marginRight: "8px",
  fontSize: "16px",
  paddingBottom: "10px",
};
