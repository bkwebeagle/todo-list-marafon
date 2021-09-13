import * as categories from "../store/actions/categories.actions";
import * as tasks from "../store/actions/tasks.actions";
import {store} from "../store";
import { v4 as uuidV4 } from 'uuid';

export const todoList = {
    categoryCreate: (name: string,
                     parent?: string): string => {
        const id = uuidV4();
        categories.categoryCreate(id, name, parent || 'ROOT');
        categories.categoryAddChild(parent || 'ROOT', id);
        return id;
    },
    categoryRemove: (id: string) => {
        const category = store.getState()?.categories[id] || null;
        if (!!category && category.id !== 'ROOT') {
            categories.categoryDeleteChild(category.parent, id);
        }
        categories.categoryRemove(id);
    },
    categoryChangeName: (id: string,
                         name: string) => {
        categories.categoryChangeName(id, name);
    },
    categoryChangeParent: (id: string,
                           parent: string) => {
        const category = store.getState()?.categories[id] || null;
        if (!!category && category.id !== 'ROOT') {
            categories.categoryDeleteChild(category.parent, id);
        }
        categories.categoryChangeParent(id, parent);
        categories.categoryAddChild(parent, id);
    },
    taskCreate: (title: string,
                 description: string,
                 category?: string | null,
                 tags?: string[]): string => {
        const id = uuidV4();
        tasks.taskCreate(id, title, description, category || 'ROOT', tags);
        categories.categoryAddTask(category || 'ROOT', id);
        return id;
    },
    taskRemove: (id: string) => {
        const task = store.getState()?.tasks?.list[id] || null;
        if (!!task) {
            categories.categoryDeleteTask(task.category, id);
        }
        tasks.taskRemove(id);
    },
    taskUpdateTitle: (id: string,
                      title: string) => {
        tasks.taskUpdateTitle(id, title);
    },
    taskUpdateDescription: (id: string,
                            description: string) => {
        tasks.taskUpdateDescription(id, description);
    },
    taskUpdateStatus: (id: string,
                       status: string) => {
        tasks.taskUpdateStatus(id, status);
    },
    taskChangeCategory: (id: string,
                         category: string) => {
        const task = store.getState()?.tasks?.list[id] || null;
        if (!!task) {
            categories.categoryDeleteTask(task.category, id);
        }
        tasks.taskChangeCategory(id, category);
        categories.categoryAddTask(category, id);
    },
    taskAddTag: (id: string,
               tag: string) => {
        tasks.taskAddTag(id, tag);
    },
    taskDeleteTag: (id: string,
               tag: string) => {
        tasks.taskDeleteTag(id, tag);
    }
};
