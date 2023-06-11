import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { db } from '../firebase/config';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  try {
    const postsRef = db.collection('posts');
    const snapshot = await postsRef.get();
    const posts = [];
    snapshot.forEach((doc) => {
      const post = doc.data();
      posts.push(post);
    });
    return posts;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
});

export const addComment = createAsyncThunk('posts/addComment', async ({ postId, commentText }) => {
  try {
    const commentId = nanoid();
    const commentData = {
      id: commentId,
      postId,
      commentText,
    };
    await db.collection('comments').doc(commentId).set(commentData);
    return commentData;
  } catch (error) {
    throw new Error('Failed to add comment');
  }
});

const postSlice = createSlice({
  name: 'posts',
  initialState: { postsArr: [] },
  reducers: {
    addPost: {
      reducer(state, action) {
        state.postsArr.push(action.payload);
      },
      prepare(postData) {
        return {
          payload: {
            id: nanoid(),
            ...postData,
          },
        };
      },
    },
    deletePost(state, action) {
      const postId = action.payload;
      state.postsArr = state.postsArr.filter(post => post.id !== postId);
    },
    updatePost(state, action) {
      const { id, updatedData } = action.payload;
      const post = state.postsArr.find(post => post.id === id);
      if (post) {
        Object.assign(post, updatedData);
      }
    },
    addCommentToPost(state, action) {
      const { postId, commentText } = action.payload;
      const post = state.postsArr.find(post => post.id === postId);
      if (post) {
        if (!post.comments) {
          post.comments = [];
        }
        post.comments.push({ text: commentText });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.postsArr = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        const { postId, commentText } = action.payload;
        state.postsArr.forEach(post => {
          if (post.id === postId) {
            if (!post.comments) {
              post.comments = [];
            }
            post.comments.push({ text: commentText });
          }
        });
      });
  },
});

export const { addPost, deletePost, updatePost, addCommentToPost } = postSlice.actions;

export const selectPosts = (state) => state.posts.postsArr;

export default postSlice.reducer;