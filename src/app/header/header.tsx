import React from "react";
import {useSelector} from "react-redux";
import {AppBar, Button, IconButton, LinearProgress, Toolbar, Typography,} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {useActions} from "common/hooks";
import {selectIsLoggedIn} from "features/auth/model/auth.selectors";
import {selectAppStatus} from "app/app.selectors";
import {authThunks} from "features/auth/model/auth.slice";

export const Header = () => {
    const status = useSelector(selectAppStatus);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const { logout } = useActions(authThunks);

    const logoutHandler = () => logout();

    return (
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Menu />
                        </IconButton>
                        <Typography variant="h6">News</Typography>
                        {isLoggedIn && (
                            <Button color="inherit" onClick={logoutHandler}>
                                Log out
                            </Button>
                        )}
                    </Toolbar>
                    {status === "loading" && <LinearProgress />}
                </AppBar>
    );
}