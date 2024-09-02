export interface Menu {
  id: Number;
  name: String;
  price: Number;
}

export interface MenuSlice {
  menus: Menu[];
  isLoading: boolean;
  error: Error | null;
}

export const initialState: MenuSlice = {
  menus: [],
  isLoading: false,
  error: null,
};
