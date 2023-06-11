// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { db } from '../firebase/config';

// const api = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://my-awesome-project-388114-default-rtdb.firebaseio.com' }),
//   endpoints: (builder) => ({
//     getUserData: builder.query({
//       query: (userId) => ({
//         url: `users/${userId}`,
//         async onQueryStarted({ queryFulfilled, queryRejected, dispatch }) {
//           try {
//             const userRef = db.collection('users').doc(userId);
//             const snapshot = await userRef.get();

//             if (snapshot.exists()) {
//               dispatch(
//                 queryFulfilled({
//                   data: snapshot.data(),
//                 })
//               );
//             } else {
//               throw new Error('User not found');
//             }
//           } catch (error) {
//             dispatch(queryRejected({ error }));
//           }
//         },
//       }),
//     }),
//   }),
// });

// export const { useGetUserDataQuery } = api;
// export default api;






import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { doc, getDoc, updateDoc, setDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

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


const writeDataToFirestore = async (userData) => {
  try {
    const { id, email, displayName } = userData;
    const userRef = doc(db, "users", id);
    await setDoc(userRef, {
      email: email,
      displayName: displayName,
    });
    console.log("User data written to Firestore");
  } catch (e) {
    console.error("Error adding user data: ", e);
    throw e;
  }
};

const updateUserDataInFirestore = async (userId, displayName) => {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, {
      displayName: displayName,
    });
    console.log("User data updated in Firestore");
  } catch (error) {
    console.log(error);
  }
};

export const { useGetUserDataQuery } = api;
export { writeDataToFirestore, updateUserDataInFirestore };