import axios from 'axios';
import {
  POST_LOADING,
  CLEAR_POSTS,
  GET_ERRORS,
  SET_CURRENT_POST_TYPE,
  GET_POSTS
} from './actionTypes';

export const createPost = (postData, history) => dispatch => {
  axios
    .post('/api/borrow', postData)
    .then(res => {
      return history.push(`/borrower/create/${res.data._id}/1`);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const updatePost = (
  postData,
  id,
  profileID,
  number,
  history
) => dispatch => {
  console.log(postData);
  axios
    .post(`/api/borrow/${id}/${profileID}/${number}`, postData)
    .then(res => {
      dispatch(setCurrentPostType(res.data.typeOfLoan));
      return history.push(`/borrower/create/${res.data._id}/${number + 1}`);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
export const updatePostImage = (postData, id, profileID) => dispatch => {
  axios
    .post(`/api/borrow/image/${id}`, postData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};
export const setCurrentPostType = payload => {
  return {
    type: SET_CURRENT_POST_TYPE,
    payload: payload
  };
};
export const clearListPosts = () => dispatch => {
  dispatch({
    type: CLEAR_POSTS
  });
};
export const deletePost = () => dispatch => {
  if (window.confirm('Are you sure?')) {
    // axios
    //   .delete('./api/profile')
    //   .then(res =>
    //     dispatch({
    //       type: GET_POST,
    //       payload: {}
    //     })
    //   )
    //   .catch(err =>
    //     dispatch({
    //       type: GET_ERRORS,
    //       payload: err.response.data
    //     })
    //   );
  }
};
export const getPostsOverview = () => dispatch => {
  dispatch(clearListPosts());
  dispatch(setPostLoading());
  axios
    .get('/api/loan')
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: {}
      })
    );
};

// Get đơn vay của thằng vay
export const getOwnPosts = () => dispatch => {
  dispatch(clearListPosts());
  dispatch(setPostLoading());
  axios
    .get('/api/borrow')
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: {}
      })
    );
};
