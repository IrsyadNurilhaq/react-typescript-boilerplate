import {
  REGISTER_ACCOUNT,
  LOGIN_ACCOUNT,
  AccountActionTypes,
  VERIFY_OTP,
} from "./accountActionType";

export function registerAccountAction(data: any): AccountActionTypes {
  return {
    type: REGISTER_ACCOUNT,
    payload: data,
  };
}

export function loginAccountAction(data: any): AccountActionTypes {
  return {
    type: LOGIN_ACCOUNT,
    payload: data,
  };
}

export function verifyOTPAction(data: any): AccountActionTypes {
  return {
    type: VERIFY_OTP,
    payload: data,
  };
}
