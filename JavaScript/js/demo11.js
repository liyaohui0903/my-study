(() => {
  console.log('导入demo11.js');

  // Js undefined 和 null
  // （1）undefined：是所有没有赋值变量的默认值，自动赋值。
  // （2）null：主动释放一个变量引用的对象，表示一个变量不再指向任何对象地址。

  // 释放对象
  let user = {
    name: 'xiaoming',
    age: 16,
    sex: 'boy'
  };
  console.log(user);
  user = null;
  console.log(user);

  // Js 类型转换
  let a = 12;
  let b = false;
  let c = '87';

  // 转换为字符串
  console.log(a, a.toString(), String(a));
  console.log(b, b.toString(), String(b));

  // 转换成数字
  console.log(c, Number(c));
  console.log(Number(' '), Number('abc'));
  let c02 = '19.98989';
  //Number.parseInt()：取整数，Number.parseFloat()：小数点后有多少取多少
  console.log(Number.parseInt(c02));
  console.log(Number.parseFloat(c02));

  // Js 正则
  // test()：用于检测一个字符串是否匹配某个模式，
  // 如果字符串中含有匹配的文本，则返回 true，否则返回 false。

  // exec()：用于检索字符串中的正则表达式的匹配，与match效果一样，只是调用的对象不同
  // 该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
  let check =
    /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/;
  let phone = '1857481099';
  console.log(check.exec(phone), phone.match(check));

  // 校验手机号是否符合要求
  console.log(check.test(phone));

  // Js 运算符
  /**
   * 计算运算符
   * + - * / %(取余)
   *
   * 比较运算符
   * > < = >= <= == === != !==
   * ==：只比较两者之间的值是否一样，不会比较两者之间的类型
   * ===：比较两者之间的值是否一样，而且会比较两者之间的类型
   *
   * 逻辑运算符
   * || & && !
   *
   * 三元运算符
   * 条件语句 ? 满足条件的语句 : 不满足条件的语句
   */
  console.log(1 == '1');
  console.log(1 === '1');

  let day = '星期一';
  console.log(day == '星期一' ? '今天是周一' : '今天不是周一');
})();
