import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SchemaProperty {
  type: string;
  title: string;
  format?: string;
  placeholder?: string;
}

interface FormState {
  data: Record<string, string | number>;
  schema: Record<string, SchemaProperty> | null;
}

const initialState: FormState = {
  data: {},
  schema: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (
      state,
      action: PayloadAction<Record<string, string | number>>
    ) => {
      state.data = action.payload;
    },
    resetFormData: (state) => {
      state.data = {};
    },
    setSchema: (
      state,
      action: PayloadAction<Record<string, SchemaProperty> | null>
    ) => {
      state.schema = action.payload;
    },
  },
});

export const { setFormData, resetFormData, setSchema } = formSlice.actions;
export default formSlice.reducer;
