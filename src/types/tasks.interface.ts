export interface ITask {
    id: string;
    category: string;
    title: string;
    description: string;
    tags: string[];
    status: string;
    created: string;
    updated: string;
}

export interface TasksStateList {
    [id: string]: ITask;
}

export interface TasksState {
    list: TasksStateList;
    status: string;
    error: string | null;
}

export enum TasksActionTypes {
    TASK__CREATE = 'TASK__CREATE',
    TASK__REMOVE = 'TASK__REMOVE',
    TASK__UPDATE_TITLE = 'TASK__UPDATE_TITLE',
    TASK__UPDATE_DESCRIPTION = 'TASK__UPDATE_DESCRIPTION',
    TASK__UPDATE_STATUS = 'TASK__UPDATE_STATUS',
    TASK__CHANGE_CATEGORY = 'TASK__CHANGE_CATEGORY',
    TASK__ADD_TAG = 'TASK__ADD_TAG',
    TASK__DELETE_TAG = 'TASK__DELETE_TAG'
}

export interface TasksCreateActionPayload {
    id: string;
    category: string;
    title: string;
    description: string;
    tags: string[];
}

export interface TasksRemoveActionPayload {
    id: string;
}

export interface TasksUpdateTitleActionPayload {
    id: string;
    title: string;
}

export interface TasksUpdateDescriptionActionPayload {
    id: string;
    description: string;
}

export interface TasksUpdateStatusActionPayload {
    id: string;
    status: string;
}

export interface TasksChangeCategoryActionPayload {
    id: string;
    category: string;
}

export interface TasksAddTagActionPayload {
    id: string;
    tag: string;
}

export interface TasksDeleteTagActionPayload {
    id: string;
    tag: string;
}

export type TasksActionPayloads =
    TasksCreateActionPayload
    | TasksRemoveActionPayload
    | TasksUpdateTitleActionPayload
    | TasksUpdateDescriptionActionPayload
    | TasksUpdateStatusActionPayload
    | TasksChangeCategoryActionPayload
    | TasksAddTagActionPayload
    | TasksDeleteTagActionPayload;

interface TasksCommonAction<T extends TasksActionTypes, P extends TasksActionPayloads> {
    type: T;
    payload: P;
}

export type TasksCreateAction = TasksCommonAction<TasksActionTypes.TASK__CREATE, TasksCreateActionPayload>;
export type TasksRemoveAction = TasksCommonAction<TasksActionTypes.TASK__REMOVE, TasksRemoveActionPayload>;
export type TasksUpdateTitleAction = TasksCommonAction<TasksActionTypes.TASK__UPDATE_TITLE, TasksUpdateTitleActionPayload>;
export type TasksUpdateDescriptionAction = TasksCommonAction<TasksActionTypes.TASK__UPDATE_DESCRIPTION, TasksUpdateDescriptionActionPayload>;
export type TasksUpdateStatusAction = TasksCommonAction<TasksActionTypes.TASK__UPDATE_STATUS, TasksUpdateStatusActionPayload>;
export type TasksChangeCategoryAction = TasksCommonAction<TasksActionTypes.TASK__CHANGE_CATEGORY, TasksChangeCategoryActionPayload>;
export type TasksAddTagAction = TasksCommonAction<TasksActionTypes.TASK__ADD_TAG, TasksAddTagActionPayload>;
export type TasksDeleteTagAction = TasksCommonAction<TasksActionTypes.TASK__DELETE_TAG, TasksDeleteTagActionPayload>;

export type TasksActions =
    TasksCreateAction
    | TasksRemoveAction
    | TasksUpdateTitleAction
    | TasksUpdateDescriptionAction
    | TasksUpdateStatusAction
    | TasksChangeCategoryAction
    | TasksAddTagAction
    | TasksDeleteTagAction;
