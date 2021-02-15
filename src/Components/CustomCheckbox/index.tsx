import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {
    makeStyles,
    createStyles,
    Theme as AugmentedTheme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: AugmentedTheme) =>
createStyles({
  root: {
    color: theme.status.danger,
    '&$checked': {
      color: theme.status.danger,
    },
  },
  checked: {},
}),
);

export const CustomCheckbox = () => {
    const classes = useStyles();
    return (
        <Checkbox
            defaultChecked
            classes={{
                root: classes.root,
                checked: classes.checked,
            }}
        />
    );
}