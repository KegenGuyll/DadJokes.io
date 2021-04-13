import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import profileReducer from './slices/profileSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
