import * as types from './types';
// get API functionality
import * as Api from '../api.js';
import { asyncActionCreator } from './asyncActionCreator'

export const fetchUser = (login) => ({
  type: types.FETCH_USER,
  payload: login
})

export const fetchSheets = () => (
  asyncActionCreator(
    types.FETCH_SHEETS,
    types.FETCH_SHEETS_COMPLETE,
    () => Api.get('sheets')
  )
)

export const viewSheet = () => ({
  type: types.VIEW_SHEET,
  payload: ""
})
// export const fetchSheets = () => (
//   dispatch => (
//     Api.get('sheets')
//     .then((sheets) => dispatch({
//       type: types.FETCH_SHEETS,
//       payload: sheets
//     }))
//   )
// )