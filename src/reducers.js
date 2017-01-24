import * as types from './actions/types';

const DEFAULT_STATE = {
  authenticated: false,
  box: {
    "home_team_id": "",
    "away_team_id": "",
    "sheet_id": ""
  },
  games:[
      {
        home_team: "New York Giants",
        away_team: "Philadelphia Eagles",
      },
      {
        home_team: "Cleveland Browns",
        away_team: "Dallas Cowboys",
      },
    ],
  isLoading: false,
  loginInfo: {
    email: '',
    password: ''
  },
  sheets:[{
      name: "",
      away_team: "",
      home_team: ""
    }],
  user: {
    "id":1,
    "provider":"email",
    "uid":"ari@me.com",
    "name":null,
    "nickname":null,
    "image":null,
    "email":"ari@me.com"
  }
}

import { combineReducers } from 'redux';

const auth = (state = DEFAULT_STATE.authenticated, action) => {
  switch(action.type){
    case types.FETCH_USER_COMPLETE:
      return true
    default:
      return state
  }
}

const box = (state = DEFAULT_STATE.box, action) => {
  return state;
  // switch(action.type){
  //   case DESELECT_BOX:
  //     return [];
  //   case SELECT_BOX:
  //     return [];
  //   case CONFIRM_BOX:
  //     return [];
  //   default:
  //     return state;
  // }
}

const games = (state = DEFAULT_STATE.games, action) => {
  switch(action.type){
    case types.FETCH_GAMES_COMPLETE:
      return action.payload.games
    case types.NEW_SHEET:
      // Returning array so that the return from games is consistent.  However, in this case the array will always have length 1
      return [action.payload]
    default:
      return state;
  }
};

const loading = (state = DEFAULT_STATE.isLoading, action) => {
  switch(action.type){
    case types.FETCH_SHEETS:
      return true
    case types.FETCH_SHEETS_COMPLETE:
      return false
    case types.FETCH_USER:
      return true
    case types.FETCH_USER_COMPLETE:
      return false
    default:
      return false
  }
}

const loginInfo = (state = DEFAULT_STATE.loginInfo, action) => {
  switch(action.type){
  default:
    return state
  }
}

const sheets = (state = DEFAULT_STATE.sheets, action) => {
  switch(action.type){
    case types.CREATE_SHEET:
      // Need this to send the sheet data to the API server.  Then, on successful response, we want show the sheet.  Right now we will only be showing the sheet
      return [
        action.payload,
        ...state
      ];
    case types.FETCH_SHEETS_COMPLETE:
      return action.payload.sheets
    default:
      return state;
  }
};

const user = (state = DEFAULT_STATE.user, action) => {
  switch(action.type){
    case types.FETCH_USER_COMPLETE:
    // Should also check for errors here
      return action.payload.data
    default:
      return state;
  }
}

export const reducer = combineReducers({ auth, box, games, loading, loginInfo, sheets, user })