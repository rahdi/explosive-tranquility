import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { LoginResponse } from "./LoginForm.types";

export const useLogin = (handleLogin: VoidFunction) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onPasswordChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPassword(event.target.value);
  };

  const onUsernameChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setUsername(event.target.value);
  };

  const submit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data: LoginResponse = await response.json();

      if (data.status === "success") {
        handleLogin();
        localStorage.setItem("player", JSON.stringify(data.player));
      }

      if (data.status === "fail") {
        customClearTimeout();
        setErrorMessage(data.error);
        timeout.current = setTimeout(() => setErrorMessage(""), 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearErrorMessage = () => {
    setErrorMessage("");
    customClearTimeout();
  };

  useEffect(() => {
    return () => {
      customClearTimeout();
    };
  }, []);

  const customClearTimeout = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
      timeout.current = null;
    }
  };

  return {
    username,
    onUsernameChange,
    password,
    onPasswordChange,
    submit,
    errorMessage,
    clearErrorMessage,
  };
};
