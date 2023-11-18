import React, {FC, memo} from "react";
import {Task} from "features/todolists-lists/todolists/Todolist/Tasks/Task/Task";
import {TodolistDomainType} from "features/todolists-lists/todolists/todolists.reducer";
import {TaskStatuses} from "common/enums";
import {TaskType} from "features/todolists-lists/tasks/tasks.api";

type PropsType = {
    todolist: TodolistDomainType;
    tasks: TaskType[];
};

export const Tasks: FC<PropsType> = memo(function ({todolist, tasks}) {

    let tasksForTodolist = tasks;

    if (todolist.filter === "active") {
        tasksForTodolist = tasks.filter((t) => t.status === TaskStatuses.New);
    }
    if (todolist.filter === "completed") {
        tasksForTodolist = tasks.filter((t) => t.status === TaskStatuses.Completed);
    }

    return (
        <div>
            {tasksForTodolist.map((t) => (
                <Task
                    key={t.id}
                    task={t}
                    todolistId={todolist.id}
                />
            ))}
        </div>
    );
});
