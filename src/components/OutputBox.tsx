import React from 'react';
import { ITextOutput } from '../models/ITextOutput'
// 'react-bootstrap/Card' dosen't seems to work?
function OutputBox({ text}: ITextOutput) {

        return (
            <p> {text}</p>
        );

};
export default OutputBox;
