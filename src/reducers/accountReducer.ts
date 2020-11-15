import { AccountState } from "./type/account/accountType";
import {
  AccountActionTypes,
  REGISTER_ACCOUNT,
  REGISTER_ACCOUNT_S,
} from "./type/account/accountActionType";

const initState: AccountState = {
  isLoadingRegister: false,
  isLoadingLogin: false,
  userInfo: {},
};

export default function AccountReducer(
  state = initState,
  action: AccountActionTypes
): AccountState {
  switch (action.type) {
    case REGISTER_ACCOUNT:
      return {
        ...state,
        isLoadingRegister: !state.isLoadingRegister,
      };
    case REGISTER_ACCOUNT_S:
      return {
        ...state,
        isLoadingRegister: !state.isLoadingRegister,
      };
    default:
      return state;
  }
}
