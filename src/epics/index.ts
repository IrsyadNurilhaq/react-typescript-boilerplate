import { combineEpics } from "redux-observable";
import accountEpic from "./accountEpic";

export default combineEpics(accountEpic.registerAccount, accountEpic.SubmitOTP);
