import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();

  return (
      <>
      <h4>Create Experiences</h4>
      <div className={classes.root}>
        
        <div>
          <TextField
            id="standard-full-width"
            label="Title"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
           <TextField
            id="standard-full-width"
            label="Title"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Description"
            id="margin-none"
            className={classes.textField}
            helperText="Some important text"
          />
          <TextField
            label="Price"
            id="margin-dense"
            className={classes.textField}
            helperText="Some important text"
            margin="dense"
          />
          <TextField
            label="Duration"
            id="margin-normal"
            className={classes.textField}
            helperText="Some important text"
            margin="normal"
          />
        </div>
         
      </div></>
 
  );
}