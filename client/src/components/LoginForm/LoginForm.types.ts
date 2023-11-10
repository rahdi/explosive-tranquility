import { Player } from "../../shared";

export type LoginResponseSuccess = {
  status: "success";
  player: { [name: string]: Player };
};

export type LoginResponseFailure = {
  status: "fail";
  error: string;
};

export type LoginResponse = LoginResponseSuccess | LoginResponseFailure;
