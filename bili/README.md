- axios
axios.defaults.baseUrl = 'http://123.207.23.23:8080'
axios.defaults.timeout = 5000
axios.get({
    <!-- baseUrl: 'http://123.207.23.23:8080', -->
    url: '/home/data',
    timeout: 5000 //超时时间5秒
})