import React, { FormEventHandler } from "react";

type Props = {};

const LoginForm = (props: Props) => {
  const submit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/login", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "rebecka",
        password: "secret",
      }),
    });
  };

  return (
    <div className="login" style={{ display: "block" }}>
      <div className="ui grid centered">
        <form onSubmit={submit}>
          <div className="fields">
            <div className="required field">
              <div className="ui icon input">
                <input type="text" name="username" placeholder="Username" />
                <i className="user icon"></i>
              </div>
            </div>
            <div className="required field">
              <div className="ui icon input">
                <input type="password" name="password" placeholder="Password" />
                <i className="lock icon"></i>
              </div>
            </div>
            <div className="field">
              <div className="ui icon input">
                <input type="submit" value="Login" />
                <i className="right chevron icon"></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
