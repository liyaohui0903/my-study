(() => {
  console.log('导入demo09.js');

  // Js 事件

  // 常见的事件：
  // onchange	HTML 元素改变
  let myInput = document.getElementById('myInput');
  myInput.onchange = function () {
    console.log('输入内容有变化:', myInput.value);
  };
  // 之前演示过的：
  // onclick	用户点击 HTML 元素
  // onmouseover	鼠标指针移动到指定的元素上时发生
  // onmouseout	用户从一个 HTML 元素上移开鼠标时发生

  // onkeydown	用户按下键盘按键
  window.onkeydown = function () {
    console.log('你按下了键盘按键');
  };

  // onload	浏览器已完成页面的加载
  window.onload = function () {
    console.log('页面加载已完成');
  };

  // Js字符串

  // 不要创建 String 对象。它会拖慢执行速度，并可能产生其他副作用

  // 字符串的方法：
  // charAt()	返回指定索引位置的字符
  let str01 = 'abcdc';
  console.log(str01.charAt(2));
  // charCodeAt()	返回指定索引位置字符的 Unicode 值
  console.log(str01.charCodeAt(2));
  // concat()	连接两个或多个字符串，返回连接后的字符串
  let str02 = 'ac';
  let str03 = 'db';
  console.log(str02.concat(str03));

  // fromCharCode()	将 Unicode 转换为字符串
  console.log(String.fromCharCode(67), String.fromCharCode(99));
  // indexOf()	返回字符串中检索指定字符第一次出现的位置
  console.log(str01.indexOf('c'));
  // lastIndexOf()	返回字符串中检索指定字符最后一次出现的位置
  console.log(str01.lastIndexOf('c'));

  // localeCompare()	用本地特定的顺序来比较两个字符串
  // match()	找到一个或多个正则表达式的匹配
  let myEmail = '123456@qq.com';
  let myEmailCheck =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  console.log('校验邮箱是否正确:', myEmail.match(myEmailCheck));
  // replace()	替换与正则表达式匹配的子串
  // 把 rllr 替换成 alla
  let myStr02 = 'rllr';
  console.log(myStr02.replace(/r/, 'a'));

  // search()	检索与正则表达式相匹配的值
  // slice()	提取字符串的片断，并在新的字符串中返回被提取的部分
  // split()	把字符串分割为子字符串数组
  // 通过 2001-09-12 格式的日期 拿到 年/月/日
  let birthday = '2001-01-26';
  console.log(birthday.split('-'));

  // substr()	从起始索引号提取字符串中指定数目的字符
  console.log(birthday.substr(0, 4));
  // substring()	提取字符串中两个指定的索引号之间的字符
  // 应优先使用
  console.log(birthday.substring(0, 4));

  // toLocaleLowerCase()	根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射
  // toLocaleUpperCase()	根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射

  // toLowerCase()	把字符串转换为小写
  // toUpperCase()	把字符串转换为大写
  // toString()	返回字符串对象值
  console.log(birthday.toString());

  // trim()	移除字符串首尾空白
  let str04 = ' a bcd ';
  console.log(str04.trim());
  // valueOf()	返回某个字符串对象的原始值
})();
