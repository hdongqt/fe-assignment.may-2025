import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

export interface TableState {
  currentPage: number;
  itemsPerPage: number;
  sortField: string;
  sortOrder: "asc" | "desc";
  filters: Record<string, string>;
}

const initialState: TableState = {
  currentPage: 1,
  itemsPerPage: 10,
  sortField: "Index",
  sortOrder: "asc",
  filters: {},
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload;
    },
    setSortField: (state, action: PayloadAction<string>) => {
      if (state.sortField === action.payload) {
        state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
      } else {
        state.sortField = action.payload;
        state.sortOrder = "asc";
      }
    },
    setFilter: (
      state,
      action: PayloadAction<{ field: string; value: string }>
    ) => {
      const { field, value } = action.payload;
      if (value) {
        state.filters[field] = value;
      } else {
        delete state.filters[field];
      }
      state.currentPage = 1; // Reset to first page when filter changes
    },
    clearFilters: (state) => {
      state.filters = {};
      state.currentPage = 1;
      state.sortField = "Index";
      state.sortOrder = "asc";
    },
  },
});

export const {
  setCurrentPage,
  setItemsPerPage,
  setSortField,
  setFilter,
  clearFilters,
} = tableSlice.actions;

export const selectTableState = (state: RootState) => state.table;

export default tableSlice.reducer;
