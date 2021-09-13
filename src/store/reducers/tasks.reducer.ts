import {ITask, TasksActions, TasksActionTypes, TasksState, TasksStateList} from "../../types/tasks.interface";

const initState: TasksState = {
    list: {},
    status: 'INIT',
    error: null
}

export const tasksReducer = (state: TasksState = initState, action: TasksActions): TasksState => {
    const task: ITask | undefined = (!!action?.payload?.id && !!state.list[action.payload.id])
        ? {...state.list[action.payload.id]}
        : undefined;
    switch (action.type) {
        case TasksActionTypes.TASK__CREATE:
            const newTask: ITask = {
                ...action.payload,
                status: 'ACTIVE',
                created: (new Date()).toISOString(),
                updated: (new Date()).toISOString()
            };
            return {
                list: {
                    ...state.list,
                    [action.payload.id]: newTask
                },
                status: state.status,
                error: state.error
            }
        case TasksActionTypes.TASK__REMOVE:
            const list: TasksStateList = {...state.list};
            if (!!list[action.payload.id]) {
                delete list[action.payload.id];
            } else {
                return state;
            }
            return {
                list: {...list},
                status: state.status,
                error: state.error
            }
        case TasksActionTypes.TASK__UPDATE_TITLE:
            if (task) {
                task.title = action.payload.title;
                task.updated = (new Date()).toISOString();
            } else {
                return state;
            }
            return {
                list: (!!task)
                    ? {
                        ...state.list,
                        [action.payload.id]: task
                    }
                    : state.list,
                status: state.status,
                error: state.error
            }
        case TasksActionTypes.TASK__UPDATE_DESCRIPTION:
            if (task) {
                task.description = action.payload.description;
                task.updated = (new Date()).toISOString();
            } else {
                return state;
            }
            return {
                list: (!!task)
                    ? {
                        ...state.list,
                        [action.payload.id]: task
                    }
                    : state.list,
                status: state.status,
                error: state.error
            }
        case TasksActionTypes.TASK__UPDATE_STATUS:
            if (task) {
                task.status = action.payload.status;
                task.updated = (new Date()).toISOString();
            } else {
                return state;
            }
            return {
                list: (!!task)
                    ? {
                        ...state.list,
                        [action.payload.id]: task
                    }
                    : state.list,
                status: state.status,
                error: state.error
            }
        case TasksActionTypes.TASK__CHANGE_CATEGORY:
            if (task) {
                task.category = action.payload.category;
                task.updated = (new Date()).toISOString();
            } else {
                return state;
            }
            return {
                list: (!!task)
                    ? {
                        ...state.list,
                        [action.payload.id]: task
                    }
                    : state.list,
                status: state.status,
                error: state.error
            }
        case TasksActionTypes.TASK__ADD_TAG:
            if (task && task.tags.indexOf(action.payload.tag) === -1) {
                task.tags.push(action.payload.tag);
                task.updated = (new Date()).toISOString();
            } else {
                return state;
            }
            return {
                list: (!!task)
                    ? {
                        ...state.list,
                        [action.payload.id]: task
                    }
                    : state.list,
                status: state.status,
                error: state.error
            }
        case TasksActionTypes.TASK__DELETE_TAG:
            if (task && task.tags.indexOf(action.payload.tag) !== -1) {
                task.tags = task.tags.filter((tag) => tag !== action.payload.tag);
                task.updated = (new Date()).toISOString();
            } else {
                return state;
            }
            return {
                list: (!!task)
                    ? {
                        ...state.list,
                        [action.payload.id]: task
                    }
                    : state.list,
                status: state.status,
                error: state.error
            }
        default:
            return state;
    }
}
