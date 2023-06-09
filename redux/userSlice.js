import { createSlice } from '@reduxjs/toolkit';
import { getUserLogin } from './firebaseUtils';

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCurrentUser, setLoading, setError } = userSlice.actions;

export const userReducer = userSlice.reducer;

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      const user = userCredential.user;
      const login = await getUserLogin(user.uid); 
      const updatedUserData = { ...userData, login: login }; 
      dispatch(setCurrentUser(updatedUserData));
      writeDataToFirestore(updatedUserData);
      return user;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    }
  };
};

export const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const login = await getUserLogin(user.uid); 
      const userData = { id: user.uid, email: user.email, login: login }; 
      dispatch(setCurrentUser(userData));
      return user;
    } catch (error) {
      dispatch(setError(error.message));
      throw error;
    }
  };
};