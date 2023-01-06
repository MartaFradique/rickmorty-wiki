import {
  GET_ALL_CHARACTERS,
  GET_ALL_CHARACTERS_HUMANS,
  GET_ALL_CHARACTERS_BY_URL,
  GET_ALL_CHARACTERS_ALIENS,
  SET_PAGINATION,
} from "./types";
import api from "../apiConnection/api";

// get all characters
export const getAllCharacters = (val) => async (dispatch) => {
  try {
    const res = await api.get(`/character?page=${val}`);
    dispatch({
      type: GET_ALL_CHARACTERS,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};
export const getCharacterDetail = (val) => async (dispatch) => {
  try {
    const res = await api.get(`/character/${val}`);
    dispatch({
      type: GET_ALL_CHARACTERS_BY_URL,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
// filter characters by humans
export const getHumans = () => async (dispatch) => {
  try {
    const res = await api.get("/character?species=human");
    dispatch({
      type: GET_ALL_CHARACTERS_HUMANS,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};
// filter characters by aliens
export const getAliens = () => async (dispatch) => {
  try {
    const res = await api.get("/character?species=alien");
    dispatch({
      type: GET_ALL_CHARACTERS_ALIENS,
      payload: res.data.results,
    });
  } catch (err) {
    console.log(err);
  }
};

// build a function to set pagination
export const setPagination = (val) => async (dispatch) => {
  try {
    dispatch({
      type: SET_PAGINATION,
      payload: val,
    });
  } catch (err) {
    console.log(err);
  }
};
