const Mock = require('mockjs');
const produceNewsData = require('./json');
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData);