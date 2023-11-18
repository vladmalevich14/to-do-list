import React, {FC, memo} from "react";
import {Delete} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {TodolistDomainType, todolistsThunks} from "features/todolists-lists/todolists/todolists.reducer";
import {useActions} from "common/hooks";
import {EditableSpan} from "common/components";

type PropsType = {
    todolist: TodolistDomainType;
};

export const TodolistTitle: FC<PropsType> = memo(function ({todolist}) {
    const {removeTodolist, changeTodolistTitle} = useActions(todolistsThunks);

    const removeTodolistCB = () => {
        removeTodolist(todolist.id)
    };

    const changeTodolistTitleCB = (title: string) => {
        return changeTodolistTitle({id: todolist.id, title}).unwrap()
    }

    return (
        <h3>
            <EditableSpan value={todolist.title} onChange={changeTodolistTitleCB}/>
            <IconButton onClick={removeTodolistCB} disabled={todolist.entityStatus === "loading"}>
                <Delete/>
            </IconButton>
        </h3>
    );
});
