import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../featutes/data/DataSlice";

export default configureStore({
  reducer: {
    dataReducer,
  },
});
