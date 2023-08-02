import React, {FC, memo, useEffect} from "react";
import {TodolistDomainType} from "features/todolist-list/todolists/model/todolists.reducer";
import {tasksThunks} from "features/todolist-list/tasks/model/tasks.reducer";
import {TaskType} from "features/todolist-list/tasks/api/tasks.api.types";
import {useActions} from "common/hooks";
import {AddItemForm,} from "common/components";
import {FilterTasksButtons} from "features/todolist-list/todolists/ui/todolist/filterTasksButtons/filterTasksButtons";
import {Tasks} from "features/todolist-list/todolists/ui/todolist/tasks/tasks";
import {TodolistTitle} from "features/todolist-list/todolists/ui/todolist/todolist-title/todolist-title";

type PropsType = {
    todolist: TodolistDomainType;
    tasks: TaskType[];
};

export const Todolist: FC<PropsType> = memo(({todolist, tasks}) => {
    const {fetchTasks, addTask} = useActions(tasksThunks);

    useEffect(() => {
        fetchTasks(todolist.id);
    }, []);

    const addTaskCallback = (title: string) => addTask({title, todolistId: todolist.id}).unwrap()

    return (
        <div>
            <TodolistTitle todolist={todolist}/>
            <AddItemForm addItem={addTaskCallback} disabled={todolist.entityStatus === "loading"}/>
            <Tasks tasks={tasks} todolist={todolist}/>
            <div style={{paddingTop: "10px"}}>
                <FilterTasksButtons todolist={todolist}/>
            </div>
        </div>
    );
});
