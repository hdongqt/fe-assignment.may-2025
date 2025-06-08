import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import formReducer from "./features/formSlice";
import tableReducer from "./features/tableSlice";

const tablePersistConfig = {
  key: "table",
  storage,
  whitelist: [
    "currentPage",
    "itemsPerPage",
    "sortField",
    "sortOrder",
    "filters",
  ],
};

const formPersistConfig = {
  key: "form",
  storage,
  whitelist: ["data", "schema"],
};

const persistedFormReducer = persistReducer(formPersistConfig, formReducer);
const persistedTableReducer = persistReducer(tablePersistConfig, tableReducer);

export const store = configureStore({
  reducer: {
    form: persistedFormReducer,
    table: persistedTableReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
