import React from "react";
import {Backdrop, CircularProgress} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: "#fff",
        },
    })
);

interface PageLoaderProps {
    isOpen: boolean
}


export const PageLoader:React.FunctionComponent<PageLoaderProps> = ({ isOpen }) => {
    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop} open={isOpen}>
            <CircularProgress color="inherit" />
        </Backdrop>
        )
}