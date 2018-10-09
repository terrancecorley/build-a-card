import {
  FORM_TEXT_CHANGES,
  FORM_IMG_CHANGES
} from '../actions';

const initialState = {
  'fullName': '',
  'jobTitle': '',
  'websiteURL': '',
  'phoneNumber': '',
  'userEmail': '',
  'userAvatar': null,
  'avatarBackgroundColor': '#f4f250',
  'infoBackgroundColor': '#338855',
  'textColor': '#222222',
};

const baseState = initialState;

export default (state = initialState, action) => {
  switch(action.type) {
    case FORM_TEXT_CHANGES:
      return {
        ...state,
        [action.name]: action.value,
      }
    case FORM_IMG_CHANGES:
      console.log(action)
      return {
        ...state,
        [action.name]: action.value
      }
    default:
      return state;
  }
};