import { from } from "rxjs";
import { map } from "rxjs/operators";
import apiService from "./apiService";

export const registerAccount = (bodyReq: any) => {
  return from(apiService.account.registerAccount(bodyReq)).pipe(
    map((res) => res.data.data)
  );
};

export const verifyOTP = (bodyReq: any) => {
  return from(apiService.account.verifyOTP(bodyReq)).pipe(
    map((res) => res.data.data)
  );
};

export default {
  registerAccount,
  verifyOTP,
};
