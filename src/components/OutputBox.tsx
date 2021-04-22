import { Box } from '@material-ui/core';
import IData from 'models/IData';
import React from 'react';
interface IOutputBox {
	data: IData
}

const OutputBox = ({ data } :IOutputBox ) => {
    return (
        <Box  component="span" display="block">Your text consist of {data.numWords} words ({data.numLetters} letters)</Box>
    );
};
export default OutputBox;
