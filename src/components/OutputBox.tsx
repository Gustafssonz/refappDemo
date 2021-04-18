import React from 'react';
import { ITextOutput } from '../models/ITextOutput'
// import { IData } from '../models/IData'
// import { analyzeText } from '../analysis'
// 'react-bootstrap/Card' dosen't seems to work?
function OutputBox({ text }: ITextOutput) {

    // var data : IData = {
    //     numWords:0,
    //     numLetters:0
    // };

    // const data: IData = async () => {
    //     let data = await analyzeText(text);
    //     return data;
    // };

    // const data: IData = await processDataAsycn();
    return (
        <p> {text}</p>
    );

};
export default OutputBox;
