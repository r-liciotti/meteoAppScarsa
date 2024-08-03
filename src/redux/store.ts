import { configureStore } from '@reduxjs/toolkit';
import headerReducer from "./headerSlice";

const store = configureStore({
  reducer: {
    header: headerReducer,
  },
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type HeaderState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch