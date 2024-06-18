import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LangType = "kor" | "eng";
const initialState: { selected: LangType } = { selected: "kor" };

const langSlice = createSlice({
  name: "lang",
  initialState: initialState,
  reducers: {
    setLang: (state, action: PayloadAction<LangType>) => {
      state.selected = action.payload;
    },
  },
});

export { langSlice };
