/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.105.50.46:8080/v1/users',
});

export const mentors = axios.create({
  baseURL: 'http://172.105.50.46:8080/users',
});

export const tasks = axios.create({
  baseURL: 'http://172.105.50.46:8080/admin',
});

export const baseURL = axios.create({
  baseURL: 'http://172.105.50.46:8080',
});
