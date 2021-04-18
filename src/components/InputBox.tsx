import React, { useState }  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
interface IInputBox {
	handleClick: React.MouseEventHandler<HTMLButtonElement>;
	handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  }
// 'react-bootstrap/Card' dosen't seems to work?
const InputBox: React.FC<IInputBox> = ({ handleClick, handleChange }) => {
	const [data, setData] = useState("");

	// function handleClick(event: MouseEvent<HTMLButtonElement>) {
	// 	event.preventDefault();
	// 	alert(event.currentTarget.tagName); // alerts BUTTON
	//   }

	return (
		<div>
			<TextField id="standard-basic" onChange={handleChange} ></TextField>
			<Button variant="contained" onClick={handleClick}>Submit</Button>
		</div>
	);
};
export default InputBox;


