import React, { useState }  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classes from '*.module.css';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputBox: {
		display: 'flex',
    },
	button: {
		width: '30%'
	  },
	input: {
		width: '50%'
	},
  }),
);
interface IInputBox {
	handleClick: React.MouseEventHandler<HTMLButtonElement>;
	handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  }

const InputBox: React.FC<IInputBox> = ({ handleClick, handleChange }) => {
	// CSS
	const classes = useStyles();

	const [data, setData] = useState("");

	return (
		<div className={classes.inputBox}>
			<TextField className={classes.input} onChange={handleChange} ></TextField>
			<Button className={classes.button} variant="contained" onClick={handleClick}>Submit</Button>
		</div>

	);
};
export default InputBox;


