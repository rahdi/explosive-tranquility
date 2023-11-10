export type Player = {
  [name: string]: {
    name: string;
    avatar: string;
    event: string;
    password: string;
  };
};

export type LoginResponseSuccess = {
  status: "success";
  player: Player;
};

export type LoginResponseFailure = {
  status: "fail";
  error: string;
};

export type LoginResponse = LoginResponseSuccess | LoginResponseFailure;
