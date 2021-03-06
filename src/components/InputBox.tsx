import React, { useState }  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
interface IInputBox {
	handleClick: React.MouseEventHandler<HTMLButtonElement>;
	handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
	currentData: string;
  }
  const useStyles = makeStyles(theme => ({
	inputbox: {
	  margin: theme.spacing(1),
	  width: '80%',

	  '& input': {
		textAlign: 'center',
	  },
	  '& > div': {
		  width: '100%'
	  }
	},
	button: {
	  margin: '0 auto',
	  width: '50%',
	}
  }));
const InputBox = ({ handleClick, handleChange, currentData}:IInputBox ) => {
	const classes = useStyles();

	return (
		<>
			<TextField color="primary" className={classes.inputbox} variant="outlined" placeholder="Text to analyze" onChange={handleChange} ></TextField>
			<Button disabled={currentData.length!<1} className={classes.button} variant="contained" color="default" onClick={handleClick}>Submit</Button>
		</>
	);
};
export default InputBox;


