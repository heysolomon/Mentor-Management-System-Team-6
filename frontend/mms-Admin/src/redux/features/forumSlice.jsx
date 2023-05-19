/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const forumSlice = createSlice({
  name: 'forum',
  initialState: {
    // posts
    posts: [],
    isLoading: false,
    isDeleting: false,
    isEmpty: false,
    isDeleted: false,
    isEditing: false,
    isCreating: false,
    isPostClicked: false,
    clickedPost: null,
    error: false,
    deleteError: false,
    editError: false,

    // comments
    comments: [],
    isLoadingComment: false,
    commentError: false,
  },
  reducers: {
    // reducers for the login page
    getPostsStart: (state) => {
      state.isLoading = true;
      state.isEmpty = true;
    },
    getPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.error = false;
      state.isLoading = false;
      state.isEmpty = false;
    },
    getPostsFailure: (state) => {
      state.isLoading = false;
      state.error = true;
      state.isEmpty = true;
    },
    noPosts: (state) => {
      state.isEmpty = true;
    },
    createPostStart: (state) => {
      state.isCreating = true;
    },
    createPostSuccess: (state) => {
      state.error = false;
      state.isCreating = false;
    },
    createPostFailure: (state) => {
      state.isCreating = false;
      state.error = true;
    },
    deletePostStart: (state) => {
      state.isDeleting = true;
      state.isDeleted = false;
    },
    deletePostSuccess: (state) => {
      state.isDeleting = false;
      state.deleteError = false;
      state.isDeleted = true;
    },
    deletePostFailure: (state) => {
      state.isDeleting = false;
      state.deleteError = true;
      state.isDeleted = false;
    },
    editPostStart: (state) => {
      state.isEditing = true;
    },
    editPostSuccess: (state) => {
      state.editError = false;
      state.isEditing = false;
    },
    editPostFailure: (state) => {
      state.isEditing = false;
      state.editError = true;
    },
    postInfoOpen: (state, action) => {
      state.isPostClicked = true;
      state.clickedPost = action.payload;
    },
    setPost: (state, action) => {
      state.task = action.payload;
    },
    editPost: (state, action) => {
      state.clickedPost = action.payload;
    },

    // comments
    createCommentStart: (state) => {
      state.isLoadingComment = true;
    },
    createCommentSuccess: (state) => {
      state.commentError = false;
      state.isLoadingComment = false;
    },
    createCommentFailure: (state) => {
      state.isLoadingComment = false;
      state.commentError = true;
    },
  },
});

export default forumSlice.reducer;
export const {
  getPostsStart,
  getPostsSuccess,
  getPostsFailure,
  createPostStart,
  createPostSuccess,
  createPostFailure,
  deletePostStart,
  deletePostSuccess,
  deletePostFailure,
  editPostStart,
  editPostSuccess,
  editPostFailure,
  postInfoOpen,
  setPost,
  editPost,
  noPosts,

  // comments
  createCommentStart,
  createCommentSuccess,
  createCommentFailure,
} = forumSlice.actions;
