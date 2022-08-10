import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import typeReducer from './slices/type'

const reducer = {
  auth: authReducer,
  message: messageReducer,
  type:typeReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;
