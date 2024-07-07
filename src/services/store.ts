import { createStore, applyMiddleware, combineReducers } from "redux";

import spellsListReducer from "./spells";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    spellsList: spellsListReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
/* eslint-disable next-line */
/* @ts-ignore */
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
