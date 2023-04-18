import { createSlice } from "@reduxjs/toolkit";
import { restaurantData } from "../../components/data";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    value: [],
  },
  reducers: {
    setData: (state, action) => {
      state.value = action.payload ? action.payload : [];
      localStorage.setItem("restaurants", JSON.stringify(state.value));
    },
    getData: (state, action) => {
      state.value = JSON.parse(localStorage.getItem("restaurants"));
    },
    upDateData: (state, action) => {
      
    },
    deletData: (state, action) => {},
    addData: (state, action) => {},
  },
});

export const { getData, upDateData, deletData, setData } = dataSlice.actions;

export default dataSlice.reducer;
