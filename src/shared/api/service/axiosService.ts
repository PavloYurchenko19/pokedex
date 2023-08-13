import axios from 'axios';
import baseURL from "../const/const.ts";

export const axiosService = axios.create({ baseURL });