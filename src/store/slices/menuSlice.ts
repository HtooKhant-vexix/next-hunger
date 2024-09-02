import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Menu, initialState } from "../../types/menu";

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<Menu[]>) => {
      state.menus = action.payload;
    },
    addMenu: (state, action: PayloadAction<Menu>) => {
      state.menus = [...state.menus, action.payload];
    },
    removeMenu: (state, action: PayloadAction<Menu>) => {
      state.menus = state.menus.filter((menu) => menu.id != action.payload.id);
    },
  },
});

export default menuSlice.reducer;
