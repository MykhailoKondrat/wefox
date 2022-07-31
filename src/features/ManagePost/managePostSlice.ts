import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ManagePostPayload = number | undefined

interface ManagePostInitialState {
  isManagePostOpen: boolean;
  postIdToUpdate: number | null;
}

const initialState: ManagePostInitialState = {
  isManagePostOpen: false,
  postIdToUpdate: null,
};

export const managePostSlice = createSlice({
  name: "managePost",
  initialState,
  reducers: {
    toggleManagePost: (state, action: PayloadAction<ManagePostPayload>) => {
      state.isManagePostOpen = !state.isManagePostOpen;
      state.postIdToUpdate = action.payload ?? null;
    },
  },
});

const { actions, reducer } = managePostSlice;
export const { toggleManagePost } = actions;

export default reducer;
