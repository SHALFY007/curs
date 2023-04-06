import { createStore, combineReducers } from "redux";
import { newsReducer } from "./newsReducer";

const rootReducer = combineReducers({
    news: newsReducer,
})

export const store =createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())