import axios,{AxiosResponse,AxiosError} from "axios";


const http = axios.create({
    headers:{'Content-Type':'application'}
});

export {http};

export type {AxiosResponse,AxiosError};