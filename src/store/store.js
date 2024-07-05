import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import  {onboardReducer}  from "@/store/onboardSlice";


import { combineReducers } from 'redux';
// import { FriendListReducer } from './FriendListReducer';

const rootReducer = combineReducers({ onboard: onboardReducer });
// export default rootReducer;
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;