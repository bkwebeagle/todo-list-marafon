import {
    TasksActionTypes, TasksAddTagAction, TasksChangeCategoryAction,
    TasksCreateAction, TasksDeleteTagAction,
    TasksRemoveAction, TasksUpdateDescriptionAction, TasksUpdateStatusAction,
    TasksUpdateTitleAction
} from "../../types/tasks.interface";
import {store} from "../index";

export function taskCreate(id: string,
                           title: string,
                           description: string,
                           category: string,
                           tags?: string[]): string {
    if (!tags) {
        tags = [];
    }
    const action: TasksCreateAction = {
        type: TasksActionTypes.TASK__CREATE,
        payload: {
            id,
            title,
            description,
            category,
            tags
        }
    };
    store.dispatch(action);
    return id;
}

export function taskRemove(id: string) {
    const action: TasksRemoveAction = {
        type: TasksActionTypes.TASK__REMOVE,
        payload: {
            id
        }
    };
    store.dispatch(action);
}

export function taskUpdateTitle(id: string,
                                title: string) {
    const action: TasksUpdateTitleAction = {
        type: TasksActionTypes.TASK__UPDATE_TITLE,
        payload: {
            id,
            title
        }
    };
    store.dispatch(action);
}

export function taskUpdateDescription(id: string,
                                      description: string) {
    const action: TasksUpdateDescriptionAction = {
        type: TasksActionTypes.TASK__UPDATE_DESCRIPTION,
        payload: {
            id,
            description
        }
    };
    store.dispatch(action);
}

export function taskUpdateStatus(id: string,
                                 status: string) {
    const action: TasksUpdateStatusAction = {
        type: TasksActionTypes.TASK__UPDATE_STATUS,
        payload: {
            id,
            status
        }
    };
    store.dispatch(action);
}

export function taskChangeCategory(id: string,
                                   category: string) {
    const action: TasksChangeCategoryAction = {
        type: TasksActionTypes.TASK__CHANGE_CATEGORY,
        payload: {
            id,
            category
        }
    };
    store.dispatch(action);
}

export function taskAddTag(id: string,
                           tag: string) {
    const action: TasksAddTagAction = {
        type: TasksActionTypes.TASK__ADD_TAG,
        payload: {
            id,
            tag
        }
    };
    store.dispatch(action);
}

export function taskDeleteTag(id: string,
                              tag: string) {
    const action: TasksDeleteTagAction = {
        type: TasksActionTypes.TASK__DELETE_TAG,
        payload: {
            id,
            tag
        }
    };
    store.dispatch(action);
}
