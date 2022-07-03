import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice, AuthState } from "./slices/AuthSlice/AuthSlice";
import { EmployeSlice, EmployeState } from "./slices/Employes";
import { UploadSlice, UploadState } from "./slices/UploadFiles/UploadSlice";

export interface StoreApp {
  auth: AuthState;
  employes: EmployeState;
  upload: UploadState;
}

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    employes: EmployeSlice.reducer,
    upload: UploadSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
