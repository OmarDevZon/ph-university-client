import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type TUser = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export type TInitialState = {
  user: TUser ;
  token: TUser | null;
};

const initialState: TInitialState = {
  user: {} as TUser,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const userCurrentToken = (state: RootState) => state.auth.token;
export const selectCurrentUser = (state: RootState) => state.auth.user;


