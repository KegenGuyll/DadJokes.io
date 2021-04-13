import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PrivateUser } from '../../models/social/user';
import fetch from '../../utils/fetch';
import { AppThunk } from '../index';

interface InitialState {
  user: PrivateUser;
  isLoading: boolean;
  error: any;
}

const initialState: InitialState = {
  user: {
    success: false,
    body: {
      _id: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      sessionToken: '',
      photoUrl: '',
      displayName: '',
      likes: [''],
      posts: [''],
      admin: false,
      bio: '',
    },
  },
  isLoading: false,
  error: null,
};

const startLoading = (state: InitialState) => {
  state.isLoading = true;
};

const loadingFailed = (state: InitialState, action: PayloadAction<string>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<PrivateUser>) => {
      state.user = action.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;

export const fetchUser = (): AppThunk => async (dispatch) => {
  const result = await fetch({ method: 'GET', url: '/api/user/profile' });
  dispatch(setProfile(result.data));
};
