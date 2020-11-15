import { buildReq } from "./apiLib";

const registerAccount = (bodyReq: any) =>
  buildReq({
    uri: "/me/email",
    method: "post",
    bodyReq: bodyReq,
    auth: false,
  });
const verifyOTP = (bodyReq: any) =>
  buildReq({
    uri: "/me/email/verify-otp",
    method: "post",
    bodyReq: bodyReq,
    auth: false,
  });

export default {
  registerAccount,
  verifyOTP,
};
