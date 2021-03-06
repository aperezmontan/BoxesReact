import * as types from './actions/types';

const DEFAULT_STATE = {
  isLoading: false,
  loggedIn: false,
  loginInfo: {
    username: '',
    password: ''
  },
  games:
    [
      {
        home_team: "New York Giants",
        away_team: "Philadelphia Eagles",
      },
      {
        home_team: "Cleveland Browns",
        away_team: "Dallas Cowboys",
      },
    ],
  sheets:
    [{
      name: "",
      away_team: "",
      home_team: ""
    }],
}

import { combineReducers } from 'redux';

export const CREATE_SHEET = 'CREATE_SHEET';

const SELECT_BOX = 'SELECT_BOX';
const DESELECT_BOX = 'DESELECT_BOX';
const CONFIRM_BOX = 'CONFIRM_BOX'; //Allows the owner of the sheet to confirm the box

const loading = (state = DEFAULT_STATE.isLoading, action) => {
  switch(action.type){
    case types.FETCH_SHEETS:
      return true
    case types.FETCH_SHEETS_COMPLETE:
      return false
    default:
      return false
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

const boxes = (state = DEFAULT_STATE, action) => {
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

const users = (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case types.FETCH_USER:
      return state.loginInfo;
    case SELECT_BOX:
      return [];
    case CONFIRM_BOX:
      return [];
    default:
      return state;
  }
}

export const reducer = combineReducers({ sheets, boxes, users, loading, games })