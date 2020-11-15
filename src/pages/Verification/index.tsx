import React, { useState } from "react";
import { Button } from "../../components/button";
import { HeaderC } from "../../components/layout/header";
import history from "../../history";
import { Root } from "../../components/layout/container";
import { Text } from "../../components/text";
import { Size } from "../../constants/theme";
import { FormOtp, SyleInput } from "./component";
import localStorageService from "../../service/localStorageService";
import { useDispatch } from "react-redux";
import { verifyOTPAction } from "../../reducers/type/account/accountAction";

const Verification: React.FC = () => {
  const [otp, setOtp] = useState("");
  const _handleChange = (otp: any) => setOtp(otp);
  const dispatch = useDispatch();
  const _handleSubmit = () => {
    const bodyReq = {
      request_id: localStorageService.get("verify_id"),
      token: otp,
      email: localStorageService.get("email"),
    };
    dispatch(verifyOTPAction(bodyReq));
  };
  return (
    <>
      <HeaderC
        onClick={() => history.push("/register")}
        content="Verifikasi sedang dikirim"
      />
      <Root>
        <Text size={Size.NORMAL}>
          Masukkan 6 angka kode OTP yang dikirim ke emailmu
        </Text>
        <FormOtp
          value={otp}
          onChange={_handleChange}
          numInputs={6}
          inputStyle={SyleInput}
          shouldAutoFocus={true}
          isInputNum={true}
        />
        <Button isRegister onClick={_handleSubmit}>
          Masuk
        </Button>
      </Root>
    </>
  );
};

export default Verification;
