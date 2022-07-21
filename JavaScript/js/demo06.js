(() => {
  console.log('导入demo06.js');

  // Js 数据类型

  // 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、
  //                 空（Null）、未定义（Undefined）、Symbol。
  // 引用数据类型（对象类型）：对象(Object)、数组(Array)、函数(Function)，
  // 还有两个特殊的对象：正则（RegExp）和 日期（Date）。

  // Js拥有动态类型。这意味着相同的变量可用作不同的类型：
  // typeof 可查看数据类型
  let a01 = 13;
  let a02 = '13';
  console.log('a01', a01, 'a02', a02);
  console.log('a01', typeof a01, 'a02', typeof a02);

  // Js 字符串
  let str01 = 'huhuiyu';
  let str02 = 'karl';
  console.log('str01', str01, 'str02', str02);

  // Js 数字
  // Js只有一种数字类型。数字可以带小数点，也可以不带：
  let x01 = 18;
  let x02 = 20.18;
  console.log('x01', x01, 'x02', x02);

  // 极大或极小的数字可以通过科学（指数）计数法来书写：
  // e5 / e+5：小数点后移五位
  // e-5：小数点前移五位
  let y01 = 9e-6;
  let y02 = 9e7;
  console.log('y01', y01, 'y02', y02);

  // Js 布尔
  let t = true;
  let f = false;
  console.log('t', t, 'f', f);

  // Js 数组
  let arrays = new Array();
  arrays[0] = 'karl';
  arrays[1] = 'huhuiyu';
  arrays[2] = 18;
  arrays[3] = false;
  console.log('arrays', arrays);

  let arrays02 = ['karl', 'huhuiyu', 18, false];
  console.log('arrays02', arrays02, '取数组第三个值:', arrays02[2]);
  // 清空数组
  // arrays02.length = 0;
  // arrays02 = [];
  // 添加内容
  arrays02.push('yht');
  console.log('arrays02', arrays02);

  // Js 对象

  // 创建对象
  let user = {
    uname: 'karl',
    pwd: '1234',
    sex: 'boy',
    age: 18,
    isCn: true,
    // 创建函数
    getAge: function () {
      return this.age;
    }
  };

  console.log('user:{}', user, '调用对象的函数:', user.getAge());

  // 对象寻址
  console.log('uname:{}', user.uname, 'sex:{}', user['sex']);

  // Undefined 和 Null
  // Undefined 这个值表示变量不含有值。
  // 可以通过将变量的值设置为 null 来清空变量。
  let karl;
  console.log('karl', karl);

  let user01 = {
    name: 'karl',
    sex: 'boy',
    age: 19
  };

  console.log('user01:{}', user01);

  // 清空对象
  user01 = null;
  console.log('user01:{}', user01);

  // 声明变量类型
  // 当您声明新变量时，可以使用关键词 "new" 来声明其类型：
  let string = new String();
  string = 'huhuiyu';
  console.log('string:', string);

  let number = new Number();
  let boolen = new Boolean();
  let arrayes = new Array();
  let object = new Object();

  // 日期对象 Date
  document.body.style.overflow = 'hidden';

  let showNow = document.getElementById('showNow');
  showNow.style.display = 'flex';
  showNow.style.minWidth = '100vw';
  showNow.style.minHeight = '100vh';
  showNow.style.justifyContent = 'center';
  showNow.style.alignItems = 'center';
  showNow.style.fontSize = '3rem';
  showNow.style.textShadow = '0.5rem 0.5rem 0.6rem black';

  // 页面在线时钟
  // 参数：函数，时间间隔(ms)
  setInterval(() => {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let days = date.getDay();

    // 做10以内的数字显示处理：
    // 比如：让 7 显示成 07
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // 处理星期显示
    // 比如：4 就显示 星期四
    function getXq() {
      switch (days) {
        case 1: {
          return '星期一';
          break;
        }
        case 2: {
          return '星期二';
          break;
        }
        case 3: {
          return '星期三';
          break;
        }
        case 4: {
          return '星期四';
          break;
        }
        case 5: {
          return '星期五';
          break;
        }
        case 6: {
          return '星期六';
          break;
        }
        case 0: {
          return '星期日';
          break;
        }
        default: {
          return '';
          break;
        }
      }
    }

    // 标签显示日期的格式
    showNow.innerHTML =
      year +
      '年' +
      month +
      '月' +
      day +
      '日' +
      ' ' +
      hours +
      ':' +
      minutes +
      ':' +
      seconds +
      ' ' +
      getXq();
  }, 1000);
})();
