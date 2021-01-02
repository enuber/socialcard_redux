import { GET_DATA } from './types';
import { generateList } from '../components/helper_functions/generatedata';

export const getData = () => async dispatch => {
    const socialCardArr = await generateList();
    dispatch( {
        type: GET_DATA,
        payload: socialCardArr
    });
};
