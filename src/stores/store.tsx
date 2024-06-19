import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { langSlice } from "./langSlice";
import { bookSlice } from "./bookSlice";

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: { lang: langSlice.reducer, book: bookSlice.reducer },
});

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
export { useAppSelector, useAppDispatch };
