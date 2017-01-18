import { combineReducers } from 'redux';

export const CREATE_SHEET = 'CREATE_SHEET';

const SELECT_BOX = 'SELECT_BOX';
const DESELECT_BOX = 'DESELECT_BOX';
const CONFIRM_BOX = 'CONFIRM_BOX'; //Allows the owner of the sheet to confirm the box

const sheets = (state = [], action) => {
  switch(action.type){
    case CREATE_SHEET:
      // Need this to send the sheet data to the API server.  Then, on successful response, we want show the sheet.  Right now we will only be showing the sheet
      return [
        action.payload,
        ...state
      ];
    default:
      return state;
  }
};

const boxes = (state = [], action) => {
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

const users = (state = [], action) => {
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

export const reducer = combineReducers({ sheets, boxes, users })