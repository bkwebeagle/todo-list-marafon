import {combineReducers} from "redux";
import {categoriesReducer} from "./categories.reduceer";
import {tasksReducer} from "./tasks.reducer";

export const rootReducer = combineReducers({
    categories: categoriesReducer,
    tasks: tasksReducer
});

export type RootState = ReturnType<typeof rootReducer>;