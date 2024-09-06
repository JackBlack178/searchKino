import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { rootReducer } from "@utils/rootReducer.ts";

interface User {
  login: string;
  id: string;
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  selectors: {
    isLoggined: (state) => state.user !== null,
    id: (state) => state.user?.id,
  },
  reducers: {
    storeUser: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    clearUser: (state: UserState) => {
      state.user = null;
    },
  },
}).injectInto(rootReducer);
