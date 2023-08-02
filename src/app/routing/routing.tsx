import {Route, Routes} from "react-router-dom";
import {TodolistsList} from "features/todolist-list/todolistsList";
import {Login} from "features/auth/login/login";
import {Container} from "@mui/material";
import React from "react";

export const Routing = () => {
    return <Container fixed>
        <Routes>
            <Route path={"/"} element={<TodolistsList/>}/>
            <Route path={"/login"} element={<Login/>}/>
        </Routes>
    </Container>
}