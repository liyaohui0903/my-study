(() => {
  console.log('导入demo08.js');

  // Js 函数
  // 概念：函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。
  // 函数可以理解成方法(function)

  // 创建一个函数
  let myFun = function () {
    console.log('调用了函数myFun');
  };

  // Js调用函数
  myFun();

  // 模拟用户登陆
  let uname = document.getElementById('uname');
  let upwd = document.getElementById('upwd');
  let loginBtn = document.getElementById('loginBtn');

  // 创建带参数的函数
  let login = function (username, password) {
    if (username == '') {
      alert('用户名不能为空');
      return;
    }
    if (password == '') {
      alert('密码必须填写');
      return;
    }

    if (username != 'user' || password != '1234') {
      alert('用户名或密码错误');
      return;
    }

    alert('登录成功');
  };

  // 登录按钮点击事件
  loginBtn.addEventListener('click', function () {
    let username = uname.value;
    let password = upwd.value;
    // 调用登录方法
    login(username, password);
  });

  // Es6是 JavaScript 语言的下一代标准

  // let const
  // let 变量名 = 值
  // 注：变量名不能重复
  let a = 0;
  console.log(a);
  a = '12';
  console.log(a);

  // 声明常量
  const time = 12;
  console.log(time);

  // ()=>{}:function(){}
  let myFun02 = () => {
    console.log('调用了myFun02');
  };

  myFun02();

  // 局部变量,全局变量
  // 全局变量：在函数外声明的变量是全局变量，网页上的所有脚本和函数都能访问它。
  // 局部变量：在 JavaScript 函数内部声明的变量（使用 var）是局部变量，所以只能在函数内部访问它。
  // 声明周期：
  // 全局：在页面关闭后被删除。
  // 局部：在函数运行以后被删除。

  // 声明全局变量
  let a01 = 12;

  function myFun03() {
    // 声明局部变量
    let a01 = 13;
  }

  // 未声明的变量-不使用声明符
  let karl = 18; // 不可配置全局属性
  karl01 = 20; // 可配置全局属性
  console.log(this.karl);
  console.log(window.karl);
  console.log(this.karl01);
  console.log(window.karl01);

  // 删除声明的变量
  delete karl01;
  // console.log(karl01);

  function myFun04() {
    // 局部变量
    let aaa = 18;
    let stu;
    // 值未定义
    console.log(stu);
    // 全局变量
    b = 16;
  }

  myFun04();

  // console.log(aaa);
  console.log(b);

  // 报错变量未定义
  // console.log(stu);
})();
