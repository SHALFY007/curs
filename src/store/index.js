import { createStore, combineReducers } from "redux";
import { newsReducer } from "./newsReducer";
import { favouriteReducer } from "./favouriteReducer";

const rootReducer = combineReducers({
    news: newsReducer,
    favourite: favouriteReducer
})

export const store =createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())