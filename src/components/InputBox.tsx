import React, { useState }  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './InputBox.css';

interface IInputBox {
	handleClick: React.MouseEventHandler<HTMLButtonElement>;
	handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  }

const InputBox: React.FC<IInputBox> = ({ handleClick, handleChange }) => {
	const [data, setData] = useState("");

	return (
		<div className="inputbox">
			<TextField onChange={handleChange} ></TextField>
			<Button variant="contained" onClick={handleClick}>Submit</Button>
		</div>
	);
};
export default InputBox;


