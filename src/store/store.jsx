import { configureStore, createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
    resetStore: (state) => {
      state.users = [];
    }
  },
});

export const { addUser, removeUser, resetStore } = usersSlice.actions;

export const store = configureStore({
  reducer: usersSlice.reducer,
  devTools: true,
});
