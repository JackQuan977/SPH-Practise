// 对于axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from 'nprogress';
//引入进度条样式
import "nprogress/nprogress.css";
//利用axios.create创建axios实例对象
//request其实就是axios,只不过可以增加配置
const requests = axios.create({
    //基础路径，requests发出的请求在端口号后面会跟改baseURl
    baseURL: '/api',
    timeout: 5000,
})
//2、配置请求拦截器
requests.interceptors.request.use(config => {
    //config是配置对象，对象里面有一个属性很重要，header请求头，config内主要是对请求头Header配置
    //比如添加token
    //开启进度条
    nprogress.start();
    return config;
})

//3、配置相应拦截器
requests.interceptors.response.use((res) => {
    //响应成功，关闭进度条
    nprogress.done()
    //成功的回调函数
    return res.data;
}, (error) => {
    //失败的回调函数
    console.log("响应失败" + error)
    return Promise.reject(new Error('fail'))
})

//4、对外暴露
export default requests;