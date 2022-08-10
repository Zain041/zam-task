import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import typeService from "../services/type.service";

export const createType = createAsyncThunk(
  "management/information/type",
  async ({ name, description, image }, thunkAPI) => {
    try {
      const {data} = await typeService.createType(name, description, image);
      thunkAPI.dispatch(setMessage(data.message));
      return data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);
export const getAllTypes = createAsyncThunk(
    "management/information/type",
    async (thunkAPI) => {
      try {
        const {data} = await typeService.getAllTypes();
        return data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );
  export const updateType = createAsyncThunk(
    "management/information/type",
    async ({name, description, image, id},thunkAPI) => {
      try {
        const {data} = await typeService.updateType({name, description, image, id});
        return data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );
  export const deleteType = createAsyncThunk(
    "management/information/type",
    async ({ids},thunkAPI) => {
      try {
        const {data} = await typeService.deleteType({ids});
        return data;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );




const initialState ={
    types:[],
    type:{}
}

const typeSlice = createSlice({
  name: "type",
  initialState,
  extraReducers: {
    [getAllTypes.fulfilled]: (state, action) => {
     state.types = action.payload.data ? action.payload.data.type.data : []
      },
    
    
  },
});

const { reducer } = typeSlice;
export default reducer;
