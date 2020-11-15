import { ofType } from "redux-observable";
import {
  REGISTER_ACCOUNT,
  VERIFY_OTP,
} from "../reducers/type/account/accountActionType";
import { mergeMap, switchMap } from "rxjs/operators";
import accountService from "../service/accountService";
import { from, Observable } from "rxjs";
import localStorageService from "../service/localStorageService";
import history from "../history";

const registerAccount = (action$: any) => {
  return action$.pipe(
    ofType(REGISTER_ACCOUNT),
    mergeMap((action: any) => {
      return from(accountService.registerAccount(action.payload)).pipe(
        switchMap((res) => {
          return Observable.create(() => {
            localStorageService.set(
              "verify_id",
              res.user.last_verify_request_id
            );
            localStorageService.set("email", action.payload.email);
            history.push("/otp");
          });
        })
      );
    })
  );
};

const SubmitOTP = (action$: any) => {
  return action$.pipe(
    ofType(VERIFY_OTP),
    mergeMap((action: any) => {
      return from(accountService.verifyOTP(action.payload)).pipe(
        switchMap((res) => {
          return Observable.create(() => {
            localStorageService.set("profile", res.user);
            localStorageService.set("token", res.user.access_token);
            localStorageService.set("refresh_token", res.user.refresh_token);
            history.push("/");
          });
        })
      );
    })
  );
};

export default {
  registerAccount,
  SubmitOTP,
};
