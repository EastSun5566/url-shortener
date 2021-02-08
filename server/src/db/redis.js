const Redis = require('ioredis');

let redisClient;

module.exports.createRedisClient = () => {
  if (redisClient) return redisClient;

  redisClient = new Redis({
    port: process.env.CACHE_PORT,
    host: process.env.CACHE_HOST,
    username: process.env.CACHE_USERNAME,
    password: process.env.CACHE_PWD,
  });

  return redisClient;
};
