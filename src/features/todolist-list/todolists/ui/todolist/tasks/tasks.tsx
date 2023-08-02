import {Task} from "features/todolist-list/tasks/ui/task/task";
import React, {FC} from "react";
import {TaskStatuses} from "common/enums";
import {TaskType} from "features/todolist-list/tasks/api/tasks.api.types";
import {TodolistDomainType} from "features/todolist-list/todolists/model/todolists.reducer";

type PropsType = {
    tasks: TaskType[]
    todolist: TodolistDomainType
}

export const Tasks: FC<PropsType> = ({tasks, todolist}) => {
    let tasksForTodolist = tasks;

    if (todolist.filter === "active") {
        tasksForTodolist = tasks.filter((t) => t.status === TaskStatuses.New);
    }
    if (todolist.filter === "completed") {
        tasksForTodolist = tasks.filter((t) => t.status === TaskStatuses.Completed);
    }

    return <div>
            {tasksForTodolist.map((t) => (
                <Task
                    key={t.id}
                    task={t}
                    todolistId={todolist.id}
                />
            ))}
        </div>
}