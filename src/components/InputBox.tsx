import React from 'react';
import { ITextInput } from '../models/ITextInput';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// 'react-bootstrap/Card' dosen't seems to work?
function InputBox({ input }: ITextInput) {
	function submitInput(){
		console.log("clickde")
	}
	return (
		<div>
		<TextField id="standard-basic" label="Standard" />
		<Button variant="contained" onClick={() => { submitInput() }}>Submit</Button>
		</div>
	);
};
export default InputBox;
