import React, {FC} from "react";
import {Button} from "@mui/material";
import {useActions} from "common/hooks";
import {
    FilterValuesType,
    TodolistDomainType,
    todolistsActions
} from "features/todolist-list/todolists/model/todolists.reducer";

export const FilterTasksButtons: FC<{ todolist: TodolistDomainType }> = ({todolist}) => {
    const {changeTodolistFilter} = useActions(todolistsActions);

    const changeFilterHandler = (filter: FilterValuesType) => changeTodolistFilter({filter, id: todolist.id})

    return (
        <div>
            <Button
                variant={todolist.filter === "all" ? "outlined" : "text"}
                onClick={() => changeFilterHandler("all")}
                color={"inherit"}
            >
                All
            </Button>
            <Button
                variant={todolist.filter === "active" ? "outlined" : "text"}
                onClick={() => changeFilterHandler("active")}
                color={"primary"}
            >
                Active
            </Button>
            <Button
                variant={todolist.filter === "completed" ? "outlined" : "text"}
                onClick={() => changeFilterHandler("completed")}
                color={"secondary"}
            >
                Completed
            </Button>
        </div>
    )
}