import axios from 'axios';
import baseURL from "@shared/api/const/const.ts";


export const axiosService = axios.create({ baseURL });