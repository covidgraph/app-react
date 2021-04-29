import React from "react";
import Typography from "@material-ui/core/Typography";

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FunctionComponent<TitleProps> = (props) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {props.children}
    </Typography>
  );
};
