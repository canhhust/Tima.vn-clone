import axios from 'axios';
import {
  ADD_POST_VALUE,
  POST_LOADING,
  CLEAR_POST_VALUE,
  CLEAR_POST,
  CLEAR_POSTS,
  GET_POST,
  GET_ERRORS,
  SET_CURRENT_POST
} from './actionTypes';

export const createPost = (postData, history) => dispatch => {
  axios
    .post('/api/borrow', postData)
    .then(res => {
      console.log(res);

      return history.push(`/borrower/create/${res.data._id}/1`);
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const updatePost = (postData, id, number, history) => dispatch => {
  axios
    .post(`/api/borrow/${id}/${number}`, postData)
    .then(res => {
      return history.push(`/borrower/create/${res.data._id}/${number + 1}`);
    })
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
export const setCurrentPost = payload => {
  return {
    type: SET_CURRENT_POST,
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
