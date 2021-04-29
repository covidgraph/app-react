import React from "react";
import {
  createStyles,
  TextField,
  Theme,
  WithStyles,
  withStyles,
} from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      float: "left",
      marginRight: theme.spacing(1),
      minWidth: 275,
    },
  });

interface SearchFieldProps extends WithStyles<typeof styles> {
  value: String;
  onChange: (event: any) => void;
}

const SearchField = (props: SearchFieldProps) => (
  <TextField
    id="search"
    label="Search"
    className={props.classes.root}
    value={props.value}
    onChange={props.onChange}
    margin="normal"
    variant="outlined"
    type="text"
  />
);

export default withStyles(styles)(SearchField);
