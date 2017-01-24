import * as types from './types';
// get API functionality
import * as Api from '../api.js';
import { asyncActionCreator } from './asyncActionCreator'

export const fetchUser = (loginInfo) => (
    asyncActionCreator(
    types.FETCH_USER,
    types.FETCH_USER_COMPLETE,
    () => Api.post('auth/sign_in', loginInfo)
  )
)

export const fetchSheets = () => (
  asyncActionCreator(
    types.FETCH_SHEETS,
    types.FETCH_SHEETS_COMPLETE,
    () => Api.get('sheets')
  )
)

export const fetchGames = () => (
  asyncActionCreator(
    types.FETCH_GAMES,
    types.FETCH_GAMES_COMPLETE,
    () => Api.get('games')
  )
)

export const viewSheet = () => ({
  type: types.VIEW_SHEET,
  payload: ""
})

export const newSheetForm = (game) => ({
  type: types.NEW_SHEET,
  payload: game
})