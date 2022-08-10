(() => {
  console.log('导入demo12.js');

  // Js 异常
  try {
    console.log(jfksd);
  } catch (e) {
    console.log('处理发生了错误:', e);
  } finally {
    console.log('不管是否出错都会执行!');
  }

  // 自定义异常
  let str = 'a';
  try {
    if (str == '') {
      throw '变量为空';
    } else {
      throw '变量不为空';
    }
  } catch (e) {
    console.log('处理发生了错误:', e);
  }

  // Js 变量提升
  x = 15;
  console.log(x, y);
  var x;
  var y = 18;

  // Js 常见使用误区

  /**
   * 把 == 写成 =
   * if(x=3){}
   */

  /**
   * 在严格的比较运算中,不同数据类型比较
   * x = 10
   * y = '10'
   * if(x==y) 返回true
   * 这里要用 ===
   */

  /**
   * let x = 10;
   * switch (x){
   *    // 控制台不会打印，因为x是数字，这里"10"是字符串
   *    case "10": console.log('xxx...');
   * }
   */

  /**
   * 任何数据类型和字符串相加就是拼接成字符串
   * let x = 10 + 5;   结果：15
   * let y = 10 + '5'; 结果：105
   */

  /**
   * 作者寄语：
   * 还有很多常见的错误，后续代码写多了，就会遇到各种错误；
   * 遇到错误，学会解决了，下次遇到就不怕了。
   * 程序员遇到的最多问题就是bug，所以学会了解决bug也提升了自己的能力；
   * 有时候解决bug就像破案一样，如果报错是常见的错误，就很快找到错误所在。
   * 有时候代码报错没有见过，就通过自己的经验，去排查，解决代码也要有思路；
   * 就像电工去修家庭电路一样，不可能一去就把他家全部的线路插座都拆了，
   * 这样别人以为你是来拆家来捣乱的，所以一定要有一个排查问题的思维。
   */

  // Js this关键字
  // 面向对象语言中 this 表示当前对象的一个引用。
  // 但在 JavaScript 中 this 不是固定不变的，它会随着执行环境的改变而改变。
  console.log(this);

  let user = {
    name: 'xiaoming',
    sex: 'boy',
    getName: function () {
      return this.name;
    }
  };
  console.log(user.getName());

  let myInfo = document.getElementById('myInfo');
  myInfo.addEventListener('click', function () {
    this.style.color = 'red';
  });

  // Es6 let const
})();
