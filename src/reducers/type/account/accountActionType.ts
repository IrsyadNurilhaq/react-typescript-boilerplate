export const REGISTER_ACCOUNT = "REGISTER_ACCOUNT";
export const REGISTER_ACCOUNT_S = "REGISTER_ACCOUNT_S";
export const LOGIN_ACCOUNT = "LOGIN_ACCOUNT";
export const LOGIN_ACCOUNT_S = "LOGIN_ACCOUNT_S";
export const VERIFY_OTP = "VERIFY_OTP";

/** Tokenizer */
export const TOKEN_INVALID = "Expired Access Token";
export const TOKEN_REFRESH_RECOGNIZED = "Access token not recognized";
export const TOKEN_REFRESH_INVALID = "Refresh Token is Invalid";
export const TOKEN_REFRESH_EXPIRED = "Expired Refresh Token";
export const ACCESS_TOKEN_INVALID = "Access Token is Invalid";

interface RegisterAccountAction {
  type: typeof REGISTER_ACCOUNT;
  payload: any;
}

interface RegisterAccountStoreAction {
  type: typeof REGISTER_ACCOUNT_S;
}

interface LoginAccountAction {
  type: typeof LOGIN_ACCOUNT;
  payload: any;
}

interface LoginAccountStoreAction {
  type: typeof LOGIN_ACCOUNT_S;
}

interface VerifyOTPAction {
  type: typeof VERIFY_OTP;
  payload: any;
}

export type AccountActionTypes =
  | RegisterAccountAction
  | LoginAccountAction
  | RegisterAccountStoreAction
  | LoginAccountStoreAction
  | VerifyOTPAction;
