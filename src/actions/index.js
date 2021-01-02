import { GET_DATA } from './types';
import { generateList } from '../components/helper_functions/generatedata';

export const getData = () => {
     const data = {
        socialCardArr : []
    };
    const socialCardArr = generateList();
    data = {...socialCardArr};
    return {
        type: GET_DATA,
        payload: data
    };
};
