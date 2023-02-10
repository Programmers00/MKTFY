import { useState, useEffect } from "react";
// scss style variabled for color red
import variabled from "../../../../styles/_variabled.scss";
import styles from "./index.module.scss";
// custom api => processApi
import { getResetPasswordVerification } from "../../../../api/resetPasswordVerification";
// wrapper component
import Modal from "../../../../components/modal";
// input code compoenent
import InputCode from "../../../../components/inputCode";
// navigate
import { useNavigate } from "react-router-dom";

/** ResetPasswordVerification */
const ResetPasswordVerification = () => {
  // navigate
  const navigate = useNavigate();
  // response data
  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });
  // verification code
  const [verificationCode, setVerificationCode] = useState("");

  /** request data for api */
  const requestResetPasswordVerificationApi = {
    url: "https://icanhazdadjoke.com",
    params: { verificationCode: verificationCode },
    method: "get",
    headers: { Accept: "application/json" },
  };

  /** click submit button => call api*/
  const onClickSubmit = async (event) => {
    event.preventDefault();
    // request submit
    const state = await getResetPasswordVerification(
      requestResetPasswordVerificationApi
    );
    // save state
    setState(state);
  };
  // when response success, go to useMain("/auth/resetPasswordVerification") page
  // submit success => isAuthenticated :true
  useEffect(() => {
    console.log("##tate", state);
    if (!state?.loading && state?.data?.status === 200) {
      // go userMain page
      navigate("/auth/resetPasswordComplete");
    }
  }, [state?.data?.status]);

  return (
    <Modal onClickBackButton={() => navigate("/auth/forgotPassword")}>
      <div className={styles.resetPasswordVerificationBox}>
        <span className={styles.title}>Reset Password?</span>
        <span className={styles.subTitle}>
          A code has been sent to your email {"pearl_the_cat@g*****"}, Please
          enter the verification code below.
        </span>
        <form className={styles.verificationCodeForm} onSubmit={onClickSubmit}>
          <label className={styles.verificationCodeLabel}>
            Verification code
            <br />
            <div className={styles.verificationCodeInputBox}>
              <InputCode
                length={6}
                setVerificationCode={setVerificationCode}
                verificationCode={verificationCode}
              />
            </div>
            <span className={styles.verificationWarningBox}>
              <div className={styles.verificationWarning}>
                {state?.error ? "Invalid verification code" : ""}
              </div>
            </span>
          </label>
          <br />
          <div className={styles.resendCodeBox}>
            <p
              className={styles.resendCode}
              onClick={() => navigate("/auth/forgotPassword")}
            >
              I didn’t receive the code, please send it again
            </p>
          </div>
          <br />
          <div className={styles.submitButtonBox}>
            <button
              className={styles.submitButton}
              type="submit"
              disabled={verificationCode.length !== 6 ? true : false}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ResetPasswordVerification;
