import axios from 'axios';
import { User } from '@/model/index.interface';

const config = {
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};

export const apiGet = (path: string) => {
  return axios.get(`${process.env.VUE_APP_BASEURL}${path}`, config);
};

export const apiPost = (path: string, data: User) => {
  return axios.post(`${process.env.VUE_APP_BASEURL}${path}`, data, config);
};

export const apiPut = (path: string, data: User) => {
  return axios.put(`${process.env.VUE_APP_BASEURL}${path}`, data, config);
};

export const apiDelete = (path: string) => {
  return axios.delete(`${process.env.VUE_APP_BASEURL}${path}`, config);
};
