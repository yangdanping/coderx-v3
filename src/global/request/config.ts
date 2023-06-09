const TIME_OUT = 10000;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;
// const NEWS_BASE_URL = `https://newsapi.org/v2`;
const NEWS_BASE_URL = import.meta.env.VITE_NEWS_URL;
const MODE = import.meta.env.MODE;

console.log('当前环境', MODE, '当前BASE_URL', BASE_URL, '当前SOCKET_URL', SOCKET_URL, '新闻请求url', NEWS_BASE_URL);

export { BASE_URL, NEWS_BASE_URL, TIME_OUT, SOCKET_URL }; //注意这个不是对象,而是ESModule的语法
