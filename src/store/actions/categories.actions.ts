import {store} from "../index";
import {
    CategoriesActionTypes,
    CategoriesAddChildAction, CategoriesAddTaskAction,
    CategoriesChangeNameAction, CategoriesChangeParentAction,
    CategoriesCreateAction, CategoriesDeleteChildAction, CategoriesDeleteTaskAction,
    CategoriesRemoveAction
} from "../../types/categories.interface";

export function categoryCreate(id: string,
                               name: string,
                               parent?: string): string {
    if (!parent) {
        parent = 'ROOT';
    }
    const action: CategoriesCreateAction = {
        type: CategoriesActionTypes.CATEGORY__CREATE,
        payload: {
            id,
            name,
            parent
        }
    };
    store.dispatch(action);
    return id;
}

export function categoryRemove(id: string) {
    const action: CategoriesRemoveAction = {
        type: CategoriesActionTypes.CATEGORY__REMOVE,
        payload: {
            id
        }
    };
    store.dispatch(action);
}

export function categoryChangeName(id: string,
                                   name: string) {
    const action: CategoriesChangeNameAction = {
        type: CategoriesActionTypes.CATEGORY__CHANGE_NAME,
        payload: {
            id,
            name
        }
    };
    store.dispatch(action);
}

export function categoryChangeParent(id: string,
                                     parent: string) {
    const action: CategoriesChangeParentAction = {
        type: CategoriesActionTypes.CATEGORY__CHANGE_PARENT,
        payload: {
            id,
            parent
        }
    };
    store.dispatch(action);
}

export function categoryAddChild(id: string,
                                 child: string) {
    const action: CategoriesAddChildAction = {
        type: CategoriesActionTypes.CATEGORY__ADD_CHILD,
        payload: {
            id,
            child
        }
    };
    store.dispatch(action);
}

export function categoryDeleteChild(id: string,
                                    child: string) {
    const action: CategoriesDeleteChildAction = {
        type: CategoriesActionTypes.CATEGORY__DELETE_CHILD,
        payload: {
            id,
            child
        }
    };
    store.dispatch(action);
}

export function categoryAddTask(id: string,
                                task: string) {
    const action: CategoriesAddTaskAction = {
        type: CategoriesActionTypes.CATEGORY__ADD_TASK,
        payload: {
            id,
            task
        }
    };
    store.dispatch(action);
}

export function categoryDeleteTask(id: string,
                                   task: string) {
    const action: CategoriesDeleteTaskAction = {
        type: CategoriesActionTypes.CATEGORY__DELETE_TASK,
        payload: {
            id,
            task
        }
    };
    store.dispatch(action);
}
