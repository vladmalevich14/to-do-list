import React, {ChangeEvent, FC, memo} from "react";
import {Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {EditableSpan} from "common/components";
import {TaskStatuses} from "common/enums";
import {useActions} from "common/hooks";
import {tasksThunks} from "features/todolists-lists/tasks/tasks.reducer";
import {TaskType} from "features/todolists-lists/tasks/tasks.api";
import s from 'features/todolists-lists/todolists/Todolist/Tasks/Task/task.module.css'

type PropsType = {
    task: TaskType;
    todolistId: string;
};

export const Task: FC<PropsType> = memo(({task, todolistId}) => {
    const {removeTask, updateTask} = useActions(tasksThunks);

    const removeTaskHandler = () => removeTask({taskId: task.id, todolistId: todolistId})

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        updateTask({
                taskId: task.id,
                domainModel: {status: newIsDoneValue ? TaskStatuses.Completed : TaskStatuses.New},
                todolistId
            }
        );
    }

    const onTitleChangeHandler = (newValue: string) => {
        updateTask({taskId: task.id, domainModel: {title: newValue}, todolistId});
    }

    return (
        <div key={task.id} className={task.status === TaskStatuses.Completed ? s.isDone : ""}>
            <Checkbox checked={task.status === TaskStatuses.Completed} color="primary"
                      onChange={onChangeHandler}/>

            <EditableSpan value={task.title} onChange={onTitleChangeHandler} />
            <IconButton onClick={removeTaskHandler}>
                <Delete/>
            </IconButton>
        </div>
    );
});
