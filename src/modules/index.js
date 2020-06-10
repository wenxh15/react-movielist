import axios from "axios";
import { ACTIONS } from "./constants";

export const addItem = (item) => ({
  type: ACTIONS.ADD_ITEM,
  item,
});

export const fetchData = (data) => ({
  type: ACTIONS.FETCH_DATA,
  data,
});

export const getRenderLists = () => {
  return (dispatch) => {
    axios
      .get("moviedata.json")
      .then((response) => {
        const data = response.data;
        dispatch(fetchData(data));
      })
      .catch(() => {
        alert("there is an error when fetching the data!!");
      });
  };
};

export const removeItem = (item) => ({
  type: ACTIONS.REMOVE_ITEM,
  item,
});

export const actions = {
  addItem,
  fetchData,
  getRenderLists,
  removeItem,
};

const initialState = {
  myLists: [],
  recommendations: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.ADD_ITEM:
      return {
        ...state,
        myLists: [...state.myLists, action.item],
        recommendations: state.recommendations.filter(
          (list) => list.id !== action.item.id
        ),
      };
    case ACTIONS.FETCH_DATA:
      return {
        ...state,
        myLists: action.data.mylist,
        recommendations: action.data.recommendations,
      };
    case ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        myLists: state.myLists.filter((list) => list.id !== action.item.id),
        recommendations: [...state.recommendations, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
