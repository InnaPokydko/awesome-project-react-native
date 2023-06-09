import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export const api = createApi({
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