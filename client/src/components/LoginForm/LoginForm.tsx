import React from "react";
import { useLogin } from "./LoginForm.utils";

import "./LoginForm.styles.css";

type Props = {
  handleLogin: VoidFunction;
};

const LoginForm = ({ handleLogin }: Props) => {
  const {
    submit,
    password,
    onPasswordChange,
    onUsernameChange,
    username,
    errorMessage,
    clearErrorMessage,
  } = useLogin(handleLogin);

  return (
    <div className="login" style={{ display: "block" }}>
      <div className="ui grid centered">
        <form onSubmit={submit}>
          <div className="fields">
            <div className="required field">
              <div className="ui icon input">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={onUsernameChange}
                />
                <i className="user icon"></i>
              </div>
            </div>

            <div className="required field">
              <div className="ui icon input">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={onPasswordChange}
                />
                <i className="lock icon"></i>
              </div>
            </div>

            <div className="field">
              <div className="ui icon input">
                <input
                  type="submit"
                  value="Login"
                  disabled={!username || !password}
                />
                <i className="right chevron icon"></i>
              </div>
            </div>
          </div>
        </form>

        {!!errorMessage && (
          <div className="ui large negative message">
            <i className="close icon" onClick={clearErrorMessage}></i>
            <div className="header">Error!</div>
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
