// action creators might be useful here
import * as types from './types';

export const fetchUser = (login) => ({
  type: types.FETCH_USER,
  payload: login
})