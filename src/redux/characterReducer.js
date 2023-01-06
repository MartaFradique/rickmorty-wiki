import {
  GET_ALL_CHARACTERS,
  GET_ALL_CHARACTERS_BY_URL,
  GET_ALL_CHARACTERS_ALIENS,
  GET_ALL_CHARACTERS_HUMANS,
  SET_PAGINATION,
} from "./types";

const initialState = {
  detail: [],
  filteredList: [],
  characters: [],
  page: 1,
  loading: true,
  error: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_CHARACTERS:
      return {
        ...state,
        characters: [...action.payload],
        filteredList: [...action.payload],
        loading: false,
      };
    case GET_ALL_CHARACTERS_BY_URL:
      return {
        ...state, // state is the initial state
        detail: {
          ...state.detail, // state.detail is the initial state.detail and then the old one
          [action.payload.id]: action.payload, // generate new state
        },

        loading: false,
      };
    case GET_ALL_CHARACTERS_ALIENS:
      return {
        ...state,
        filteredList: action.payload,
        loading: false,
      };
    case GET_ALL_CHARACTERS_HUMANS:
      return {
        ...state,
        filteredList: action.payload,
        loading: false,
      };
    // build a get pagination action

    // build a set pagination action
    case SET_PAGINATION:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
}
