import React from "react";
import {Route, Routes} from "react-router-dom";
import {Container,} from "@mui/material";
import {Login} from "features/auth/ui/login/login";
import {TodolistsList} from "features/todolists-lists/TodolistsList";


export const Routing = () => {
    return (
                <Container fixed>
                    <Routes>
                        <Route path={"/"} element={<TodolistsList />} />
                        <Route path={"/login"} element={<Login />} />
                    </Routes>
                </Container>
    );
}
