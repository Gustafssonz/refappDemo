import React from 'react';
import { ITextInput } from '../models/ITextInput';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// 'react-bootstrap/Card' dosen't seems to work?
function InputBox({}) {

	// function handleClick(event: MouseEvent<HTMLButtonElement>) {
	// 	event.preventDefault();
	// 	alert(event.currentTarget.tagName); // alerts BUTTON
	//   }

	return (
		<div>
			{/* onChange={event => setData(event.target.value)} */}
			<TextField id="standard-basic" ></TextField>
			<Button variant="contained" >Submit</Button>

		</div>
	);
};
export default InputBox;
