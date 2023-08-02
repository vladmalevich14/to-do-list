import React, {ChangeEvent, FC, memo} from "react";
import {Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {TaskType} from "features/todolist-list/tasks/api/tasks.api.types";
import {EditableSpan} from "common/components";
import {TaskStatuses} from "common/enums";
import {useActions} from "common/hooks";
import {tasksThunks} from "features/todolist-list/tasks/model/tasks.reducer";
import s from "./task.module.css";

type PropsType = {
    task: TaskType;
    todolistId: string;
};

export const Task: FC<PropsType> = memo(({task, todolistId}) => {
    const {removeTask, updateTask} = useActions(tasksThunks)

    const changeTitleHandler = (title: string) => updateTask({taskId: task.id, domainModel: {title}, todolistId});
    const removeTaskHandler = () => removeTask({taskId: task.id, todolistId});
    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let status = e.currentTarget.checked ? TaskStatuses.Completed : TaskStatuses.New;
        updateTask({
                taskId: task.id,
                domainModel: {status},
                todolistId
            }
        );
    };

    return (
        <div key={task.id} className={task.status === TaskStatuses.Completed ? s.isDone : ""}>
            <Checkbox checked={task.status === TaskStatuses.Completed} color="primary"
                      onChange={changeStatusHandler}/>

            <EditableSpan value={task.title} onChange={changeTitleHandler}/>
            <IconButton onClick={removeTaskHandler}>
                <Delete/>
            </IconButton>
        </div>
    );
});
