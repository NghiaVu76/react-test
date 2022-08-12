import React from "react";

const CommonContext = React.createContext({
  loading: false,
  error: null,
  success: null,
  warning: null,
  profile: null,
});

const AuthContext = React.createContext({
  isAuth: false,
  login: null,
  logout: null,
  hp: null,
});

export { CommonContext, AuthContext };
