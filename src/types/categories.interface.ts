export interface ICategory {
    id: string;
    parent: string;
    name: string;
    children: string[];
    tasks: string[]
}

export interface CategoriesState {
    [id: string]: ICategory;
}

export enum CategoriesActionTypes {
    CATEGORY__CREATE = 'CATEGORY__CREATE',
    CATEGORY__REMOVE = 'CATEGORY__REMOVE',
    CATEGORY__CHANGE_NAME = 'CATEGORY__CHANGE_NAME',
    CATEGORY__CHANGE_PARENT = 'CATEGORY__CHANGE_PARENT',
    CATEGORY__ADD_CHILD = 'CATEGORY__ADD_CHILD',
    CATEGORY__DELETE_CHILD = 'CATEGORY__DELETE_CHILD',
    CATEGORY__ADD_TASK = 'CATEGORY__ADD_TASK',
    CATEGORY__DELETE_TASK = 'CATEGORY__DELETE_TASK',
}

export interface CategoriesCreateActionPayload {
    id: string;
    parent: string;
    name: string;
}

export interface CategoriesRemoveActionPayload {
    id: string;
}

export interface CategoriesChangeNameActionPayload {
    id: string;
    name: string;
}

export interface CategoriesChangeParentActionPayload {
    id: string;
    parent: string;
}

export interface CategoriesAddChildActionPayload {
    id: string;
    child: string;
}

export interface CategoriesDeleteChildActionPayload {
    id: string;
    child: string;
}

export interface CategoriesAddTaskActionPayload {
    id: string;
    task: string;
}

export interface CategoriesDeleteTaskActionPayload {
    id: string;
    task: string;
}

export type CategoriesActionPayloads =
    CategoriesCreateActionPayload
    | CategoriesRemoveActionPayload
    | CategoriesChangeNameActionPayload
    | CategoriesChangeParentActionPayload
    | CategoriesAddChildActionPayload
    | CategoriesDeleteChildActionPayload
    | CategoriesAddTaskActionPayload
    | CategoriesDeleteTaskActionPayload;

interface CategoriesCommonAction<T extends CategoriesActionTypes, P extends CategoriesActionPayloads> {
    type: T,
    payload: P
}

export type CategoriesCreateAction = CategoriesCommonAction<CategoriesActionTypes.CATEGORY__CREATE, CategoriesCreateActionPayload>;
export type CategoriesRemoveAction = CategoriesCommonAction<CategoriesActionTypes.CATEGORY__REMOVE, CategoriesRemoveActionPayload>;
export type CategoriesChangeNameAction = CategoriesCommonAction<CategoriesActionTypes.CATEGORY__CHANGE_NAME, CategoriesChangeNameActionPayload>;
export type CategoriesChangeParentAction = CategoriesCommonAction<CategoriesActionTypes.CATEGORY__CHANGE_PARENT, CategoriesChangeParentActionPayload>;
export type CategoriesAddChildAction = CategoriesCommonAction<CategoriesActionTypes.CATEGORY__ADD_CHILD, CategoriesAddChildActionPayload>;
export type CategoriesDeleteChildAction = CategoriesCommonAction<CategoriesActionTypes.CATEGORY__DELETE_CHILD, CategoriesDeleteChildActionPayload>;
export type CategoriesAddTaskAction = CategoriesCommonAction<CategoriesActionTypes.CATEGORY__ADD_TASK, CategoriesAddTaskActionPayload>;
export type CategoriesDeleteTaskAction = CategoriesCommonAction<CategoriesActionTypes.CATEGORY__DELETE_TASK, CategoriesDeleteTaskActionPayload>;

export type CategoriesActions =
    CategoriesCreateAction
    | CategoriesRemoveAction
    | CategoriesChangeNameAction
    | CategoriesChangeParentAction
    | CategoriesAddChildAction
    | CategoriesDeleteChildAction
    | CategoriesAddTaskAction
    | CategoriesDeleteTaskAction;
