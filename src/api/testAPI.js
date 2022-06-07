// import {axiosClient} from 'axiosClient';
import axiosClient from "./axiosClient";

const getTest = () => {
        const url = 'https://jsonplaceholder.typicode.com/todos';
        return axiosClient.get(url);
    };
export default getTest;