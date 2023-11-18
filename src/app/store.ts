import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "features/todolists-lists/tasks/tasks.reducer";
import { todolistsReducer } from "features/todolists-lists/todolists/todolists.reducer";
import { appReducer } from "app/app.reducer";
import { authSlice } from "features/auth/model/auth.slice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    todolists: todolistsReducer,
    app: appReducer,
    auth: authSlice,
  },
});

export type AppRootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// @ts-ignore
window.store = store;
