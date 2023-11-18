import React, {FC, memo, useEffect} from "react";
import {TodolistDomainType} from "features/todolists-lists/todolists/todolists.reducer";
import {tasksThunks} from "features/todolists-lists/tasks/tasks.reducer";
import {useActions} from "common/hooks";
import {AddItemForm, FilterTasksButtons} from "common/components";
import {TaskType} from "features/todolists-lists/tasks/tasks.api";
import {Tasks} from "features/todolists-lists/todolists/Todolist/Tasks/Tasks";
import {TodolistTitle} from "features/todolists-lists/todolists/Todolist/TodolistTitle";

type PropsType = {
    todolist: TodolistDomainType;
    tasks: TaskType[];
};

export const Todolist: FC<PropsType> = memo(function ({todolist, tasks}) {
    const {addTask, fetchTasks} = useActions(tasksThunks);

    useEffect(() => {
        fetchTasks(todolist.id);
    }, []);

    const addTaskCB = (title: string) => {
        return addTask({title, todolistId: todolist.id}).unwrap()
    }
    return (
        <div>
            <TodolistTitle todolist={todolist}/>
            <AddItemForm addItem={addTaskCB} disabled={todolist.entityStatus === "loading"}/>
            <Tasks todolist={todolist} tasks={tasks}/>
            <div style={{paddingTop: '10px'}}>
                <FilterTasksButtons todolist={todolist}/>
            </div>
        </div>
    );
});
