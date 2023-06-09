import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAb3FGzMlvlBfGNHHZqYmob7XO1xWdru2c',
    authDomain: 'my-awesome-project.firebaseapp.com',
    databaseURL: 'https://my-awesome-project-388114-default-rtdb.firebaseio.com',
    projectId: 'my-awesome-project-388114',
    storageBucket: 'my-awesome-project-388114.appspot.com',
    messagingSenderId: 'sender-id',
    appId: '1:59106852235:ios:59c9a21a2941d69125c38e',
    measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://my-awesome-project-388114-default-rtdb.firebaseio.com' }), 
  endpoints: (builder) => ({
    getUserData: builder.query({
      query: (userId) => ({
        url: `users/${userId}`,
        async onQueryStarted({ queryFulfilled, queryRejected, dispatch }) {
          try {
            const userRef = doc(db, 'users', userId);
            const snapshot = await getDoc(userRef);

            if (snapshot.exists()) {
              dispatch(
                queryFulfilled({
                  data: snapshot.data(),
                })
              );
            } else {
              throw new Error('User not found');
            }
          } catch (error) {
            dispatch(queryRejected({ error }));
          }
        },
      }),
    }),
  }),
});

export const { useGetUserDataQuery } = api;