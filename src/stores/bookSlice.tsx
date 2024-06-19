import { Service } from "@entities/Service";
import { StylistInfo } from "@entities/StylistInfo";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateType {
  stylistinfo: StylistInfo;
  service: Service;
  date: Date;
}

const initialState: initialStateType = {
  stylistinfo: new StylistInfo({ kor: "", eng: "" }),
  service: new Service({ kor: "", eng: "" }, 0, { kor: "", eng: "" }),
  date: new Date(),
};

const bookSlice = createSlice({
  name: "book",
  initialState: initialState,
  reducers: {
    setStylist: (state, action: PayloadAction<StylistInfo>) => {
      state.stylistinfo = action.payload;
    },

    setService: (state, action: PayloadAction<Service>) => {
      state.service = action.payload;
    },

    setDate: (state, action: PayloadAction<Date>) => {
      state.date = action.payload;
    },
  },
});

export { bookSlice };
