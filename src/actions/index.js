import { GET_DATA } from './types';
import { generateList } from '../components/helper_functions/generatedata';

export const getData = () => {
    const socialCardArr = generateList();
    return {
        type: GET_DATA,
        payload: socialCardArr
    };
};
