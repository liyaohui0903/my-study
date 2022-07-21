(() => {
  console.log('导入demo05.js');

  // Js 语法
  // js字符串可以是 " 或 '
  // Js语句结束后不要忘了 ; 号
  // ;的作用：分隔Js语句
  let str01 = 'karl';
  let str02 = 'karl';
  console.log('str01', str01, 'str02', str02);

  // Js会忽略多余的空格
  let a = 12;
  let b = 17;

  // Js代码折行
  // 使用 \ 符号
  let str03 =
    'ajfksfsjdlfffffffffkfsldfjkasldf \
  fjsdklkfjasdlflfsdjflsdjlkfkjklsdlfd \
  fsdffdsjfkdsfl \
  fsdjlkfsdklf';
  console.log('st03', str03);

  // Js注释
  /**
   * 第一行
   * 第二行
   * 第三行
   * 多行注释
   */
  let xxx = 13; // 行尾注释

  // Js 变量

  // 变量必须以字母开头
  // 变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）
  // 变量名称对大小写敏感（y 和 Y 是不同的变量）
  let x;
  let X;

  let x001, x002, x003;
  x001 = 12;
  x002 = 14;
  x003 = 15;

  // var x001 = 12;
  // var x002 = 14;
  // var x003 = 15;
})();
