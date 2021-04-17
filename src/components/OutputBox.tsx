import React from 'react';
import { ITextOutput } from '../models/ITextOutput'
import {IData} from '../models/IData'
import {analyzeText } from '../analysis'
// 'react-bootstrap/Card' dosen't seems to work?
function OutputBox({ text }: ITextOutput) {

    var data : IData;

    const processDataAsycn = async () => {
        let data = await analyzeText(text);
        return data;
      };

        return (
            <p> {data.numWords}, {data.numLetters}</p>
        );

};
export default OutputBox;
