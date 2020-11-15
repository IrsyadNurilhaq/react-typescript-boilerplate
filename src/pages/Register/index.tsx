import React from "react";
import { TextInput } from "../../components/input";
import { VerifyInfoC } from "../Home/component";
import { Button } from "../../components/button";
import { HeaderC } from "../../components/layout/header";
import history from "../../history";
import { Root } from "../../components/layout/container";
import config from "../../config";
import { TitleText } from "../../components/text";
import { Color } from "../../constants/theme";
import { useDispatch } from "react-redux";
import { registerAccountAction } from "../../reducers/type/account/accountAction";

const Register: React.FC = () => {
  const dispatch = useDispatch();
  const _handleSubmit = (e?: any) => {
    e.preventDefault();
    const bodyReq = {
      display_name: e.target.display_name.value,
      email: e.target.email.value,
      telegram_username: e.target.telegram_username.value,
      partner_name: config.PARTNER_NAME,
      partner_user_id: config.PARTNER_USER_ID,
      phonenumber: "0",
    };
    dispatch(registerAccountAction(bodyReq));
  };
  return (
    <>
      <HeaderC onClick={() => history.push("/")} content="Daftar" />
      <Root>
        <form onSubmit={_handleSubmit}>
          <TextInput
            placeholder="Username"
            type="text"
            required
            name="display_name"
          />
          <TextInput
            placeholder="Alamat Email terdaftar di tokocrypto"
            type="email"
            required
            name="email"
          />
          <TextInput
            placeholder="Ketik ulang Email terdaftar di tokocrypto"
            type="email"
            required
          />
          <TextInput
            placeholder="Telegram User"
            type="text"
            required
            name="telegram_username"
          />
          <VerifyInfoC />
          <Button isRegister type="submit">
            Daftar
          </Button>
        </form>
        <TitleText
          center
          color={Color.GREEN_TEXT}
          pointer
          onClick={() => history.push("/login")}
        >
          Sudah punya akun
        </TitleText>
      </Root>
    </>
  );
};

export default Register;
