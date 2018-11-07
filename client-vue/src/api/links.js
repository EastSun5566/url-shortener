import axios from 'axios';

const request = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
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
