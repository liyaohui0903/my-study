(() => {
  console.log('导入demo13.js');

  // Js JSON
  // JSON 是用于存储和传输数据的格式。
  // JSON 通常用于服务端向网页传递数据。
  // 什么是 JSON ?
  // JSON 英文全称 JavaScript Object Notation
  // JSON 是一种轻量级的数据交换格式。
  // JSON是独立的语言
  // JSON 易于理解。
  let user = {
    name: 'karl',
    phone: '10010',
    mail: '10086@qq.com',
    sex: 'boy'
  };

  console.log(JSON.stringify(user));

  let str = JSON.stringify(user);
  console.log(JSON.parse(str));

  // Js 异步
  // 异步的概念：
  // 异步（Asynchronous, async）是与同步（Synchronous, sync）相对的概念。
  // 在我们学习的传统单线程编程中，程序的运行是同步的（同步不意味着所有步骤同时运行，
  // 而是指步骤在一个控制流序列中按顺序执行）。而异步的概念则是不保证同步的概念，也就是说，
  // 一个异步过程的执行将不再与原有的序列有顺序关系。
  // 简单来理解就是：同步按你的代码顺序执行，异步不按照代码顺序执行，异步的执行效率更高。

  // 回调函数：
  // 回调函数就是一个函数，它是在我们启动一个异步任务的时候就告诉它：等你完成了这个任务之后要干什么。
  // 这样一来主线程几乎不用关心异步任务的状态了，他自己会善始善终。
  // setTimeout(() => {
  //   console.log('我出来了');
  // }, 3000);

  // 异步常用于 Ajax 请求
  let xhr = new XMLHttpRequest();

  // 请求成功
  xhr.onload = function () {
    console.log('请求成功，接收到服务响应的内容:', xhr.responseText);
  };

  // 请求失败
  xhr.onerror = function () {
    console.log('请求失败');
  };

  // 设置请求的参数和信息
  // open(请求方式,接口地址,是否异步执行操作)
  xhr.open(
    'POST',
    'https://huhuiyu.top/teach_project_service/tool/getImageCode',
    true
  );

  // 发送请求
  document.getElementById('sendBtn').addEventListener('click', function () {
    xhr.send();
  });

  // Promise
  // 是ES6新特性
  // Promise 类有 .then() .catch() 和 .finally() 三个方法，
  // 这三个方法的参数都是一个函数
  // .then() 可以将参数中的函数添加到当前 Promise 的正常执行序列，
  // .catch() 则是设定 Promise 的异常处理序列，
  // .finally() 是在 Promise 执行的最后一定会执行的序列。
  // resolve 和 reject 都是函数，其中调用 resolve 代表一切正常，reject 是出现异常时所调用的
  new Promise(function (resolve, reject) {
    let a = 3;
    let c = 6;
    resolve(a + c);
  })
    .then(function (resp) {
      console.log('a+c', resp);
      return resp + 1;
    })
    .then(function (resp) {
      console.log('resp', resp);
      return resp + 1;
    })
    .then(function (resp) {
      console.log('resp', resp);
    })
    .catch(function (error) {
      console.log('发生了错误:', error);
    })
    .finally(function () {
      console.log('我一定会执行');
    });

  // Js 闭包
  let add = (function () {
    let a = 1;
    return function () {
      return (a += 1);
    };
  })();

  document.getElementById('addBtn').addEventListener('click', function () {
    console.log(add());
  });
  // 变量 add 指定了函数自我调用的返回字值。
  // 自我调用函数只执行一次。设置计数器为 1。并返回函数表达式。
  // add变量可以作为一个函数使用。非常棒的部分是它可以访问函数上一层作用域的计数器。
  // 这个叫作 JavaScript 闭包。它使得函数拥有私有变量变成可能。
  // 计数器受匿名函数的作用域保护，只能通过 add 方法修改

  // 闭包好处：
  // 闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。
  // 直观的说就是形成一个不销毁的栈环境。
})();
