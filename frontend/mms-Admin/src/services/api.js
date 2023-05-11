/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://209.38.253.214:8080/v1/users',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});

export const mentors = axios.create({
  baseURL: 'http://209.38.253.214:8080/users',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
});
