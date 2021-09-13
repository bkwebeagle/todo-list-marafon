import {CategoriesActions, CategoriesActionTypes, CategoriesState} from "../../types/categories.interface";

const initState: CategoriesState = {
    'ROOT': {
        id: 'ROOT',
        name: 'ROOT',
        parent: '',
        children: [],
        tasks: []
    }
}

export const categoriesReducer = (state: CategoriesState = initState, action: CategoriesActions): CategoriesState => {
    switch (action.type) {
        case CategoriesActionTypes.CATEGORY__CREATE:
            if (action.payload.id === 'ROOT') {
                return state;
            }
            return {
                ...state,
                [action.payload.id]: {
                    ...action.payload,
                    children: [],
                    tasks: [],
                }
            }
        case CategoriesActionTypes.CATEGORY__REMOVE:
            if (action.payload.id === 'ROOT') {
                return state;
            }
            delete state[action.payload.id];
            return {...state};
        case CategoriesActionTypes.CATEGORY__CHANGE_NAME:
            if (state[action.payload.id]) {
                const category = {
                    ...state[action.payload.id],
                    name: action.payload.name
                };
                return {
                    ...state,
                    [action.payload.id]: category
                }
            }
            return state;
        case CategoriesActionTypes.CATEGORY__CHANGE_PARENT:
            if (state[action.payload.id]) {
                const category = {
                    ...state[action.payload.id],
                    parent: action.payload.parent
                };
                return {
                    ...state,
                    [action.payload.id]: category
                }
            }
            return state;
        case CategoriesActionTypes.CATEGORY__ADD_CHILD:
            if (state[action.payload.id]) {
                const category = {...state[action.payload.id]}
                if (category.children.indexOf(action.payload.child) === -1) {
                    category.children.push(action.payload.child);
                }
                return {
                    ...state,
                    [action.payload.id]: category
                }
            }
            return state;
        case CategoriesActionTypes.CATEGORY__DELETE_CHILD:
            if (state[action.payload.id]) {
                const category = {...state[action.payload.id]}
                return {
                    ...state,
                    [action.payload.id]: {
                        ...category,
                        children: category.children.filter((child) => child !== action.payload.child)
                    }
                }
            }
            return state;
        case CategoriesActionTypes.CATEGORY__ADD_TASK:
            if (state[action.payload.id]) {
                const category = {...state[action.payload.id]}
                category.tasks.push(action.payload.task);
                return {
                    ...state,
                    [action.payload.id]: category
                }
            }
            return state;
        case CategoriesActionTypes.CATEGORY__DELETE_TASK:
            if (state[action.payload.id]) {
                const category = {...state[action.payload.id]}
                return {
                    ...state,
                    [action.payload.id]: {
                        ...category,
                        tasks: category.tasks.filter((task) => task !== action.payload.task)
                    }
                }
            }
            return state;
        default:
            return state;
    }
}