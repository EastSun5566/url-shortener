import axios from 'axios';

const request = axios.create({
  baseURL: 'https://chill.now.sh/api',
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
