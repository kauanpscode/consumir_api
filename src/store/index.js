import { persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import persistReducers from "./modules/reduxPersist";

import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: persistReducers(rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
