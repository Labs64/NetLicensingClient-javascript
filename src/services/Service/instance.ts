import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Info } from '@/types/api/response';

let axiosInstance: AxiosInstance = axios.create();
let lastResponse: AxiosResponse | null = null;
let info: Info[] = [];

export const setAxiosInstance = (instance: AxiosInstance): void => {
  axiosInstance = instance;
};

export const getAxiosInstance = (): AxiosInstance => axiosInstance;

export const setLastResponse = (response: AxiosResponse | null): void => {
  lastResponse = response;
};

export const getLastResponse = (): AxiosResponse | null => lastResponse;

export const setInfo = (infos: Info[]): void => {
  info = infos;
};

export const getInfo = (): Info[] => info;
