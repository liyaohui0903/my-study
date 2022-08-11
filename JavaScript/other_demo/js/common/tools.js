(() => {
  // 服务器信息
  const server = {
    // 后端请求接口地址
    baseUrl: 'https://huhuiyu.top',
    // 本地令牌key
    token_key: 'huhuiyu_demo03_other_token_key',

    // 本地储存token的函数
    saveToken: (token) => {
      localStorage.setItem(server.token_key, token);
    },

    // 本地加载token的函数
    loadToken: () => {
      return localStorage.getItem(server.token_key);
    }
  };

  // 自定义应答信息
  const myReslut = {
    nullUrl: {
      code: 500,
      success: false,
      message: '请求的地址不能为空!'
    },
    nullData: {
      code: 500,
      success: false,
      message: '请求的数据不能为空!'
    },
    err: {
      code: 500,
      success: false,
      message: '请求发生了错误!'
    }
  };

  // 工具函数对象
  const tools = {
    // 格式化日期时间
    formatDate: (date_info, format) => {
      try {
        // 判定传入的格式
        // 如果没有传入则为默认格式：yyyy-MM-dd hh:mm:ss
        format = format ? format : 'yyyy-MM-dd hh:mm:ss';

        // 如果传入的时间戳不为数字并且不是时间类
        // 转换时间戳为整数然后转换为时间类
        if (!isNaN(date_info) && !(date_info instanceof Date)) {
          let time = new Date();
          time.setTime(parseInt(date_info));
          date_info = time;
        }

        // 获取时间类的年月日时分秒
        let year = date_info.getFullYear();
        let month = date_info.getMonth() + 1;
        let date = date_info.getDate();
        let hours = date_info.getHours();
        let minutes = date_info.getMinutes();
        let seconds = date_info.getSeconds();

        // 判定月份，日期，小时，分钟，秒数小于10就在它们前面拼接一个字符串0
        // 例如：1月 1==>01
        month = month < 10 ? '0' + month : month;
        date = date < 10 ? '0' + date : date;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // 替换格式字符串
        // 把格式里面的字符串替换成时间数据
        format = format.replace(/yyyy/g, year);
        format = format.replace(/MM/g, month);
        format = format.replace(/dd/g, date);
        format = format.replace(/hh/g, hours);
        format = format.replace(/mm/g, minutes);
        format = format.replace(/ss/g, seconds);

        // 返回格式化后的时间戳
        return format;
      } catch (error) {
        console.log('格式化日期时间发生错误:', error);
        return '';
      }
    },

    // Ajax请求的函数
    ajax: (url, data, callback, method) => {
      // 校验并处理参数
      url =
        !url || url == '' ? callback(myReslut.nullUrl) : server.baseUrl + url;
      data =
        !data || data == ''
          ? callback(myReslut.nullData)
          : Qs.stringify(data, { allowDots: true });
      method = !method || method == '' ? 'POST' : method;

      // 判断是否为GET请求
      if (method == 'get' || method == 'GET') {
        url = url + '?' + data;
        data = '';
      }

      let promise = new Promise((reso, resj) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.setRequestHeader('token', server.loadToken());
        if (method == 'post' || method == 'POST') {
          xhr.setRequestHeader(
            'Content-type',
            'application/x-www-form-urlencoded'
          );
        }
        xhr.send(data);

        xhr.onload = () => {
          reso(xhr.responseText);
        };

        xhr.onerror = () => {
          resj(myReslut.err);
        };
      });

      promise
        .then((resp) => {
          let respInfo = resp ? JSON.parse(resp) : null;
          if (respInfo && respInfo.token) {
            server.saveToken(respInfo.token);
          }
          callback(respInfo);
        })
        .catch((error) => {
          console.log('请求接口发生了错误:', error);
          callback(myReslut.err);
        });
    }
  };

  window.tools = tools;
})();
