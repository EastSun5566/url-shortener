import axios from 'axios';

const request = axios.create({
  baseURL: 'http://localhost:3000/api/',
});

export default {
  add(data) {
    return request({
      url: '/links',
      method: 'post',
      data,
    });
  },
};
