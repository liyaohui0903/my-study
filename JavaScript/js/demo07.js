(() => {
  console.log('导入demo07.js');

  let stu = {
    name: '小明',
    sex: 'boy',
    age: 18
  };

  // 打印对象
  console.log('stu对象:', stu);
  // 打印对象属性
  console.log(
    '学生姓名:',
    stu.name,
    '学生性别:',
    stu.sex,
    '学生年龄:',
    stu.age
  );

  console.log(
    '学生姓名:',
    stu['name'],
    '学生性别:',
    stu['sex'],
    '学生年龄:',
    stu['age']
  );

  let liyaohui = {
    nick: 'lyh',
    getNick: function () {
      return this.nick;
    }
  };

  console.log('liyaohui对象', liyaohui);
  console.log('调用函数内的对象', liyaohui.getNick());
  console.log('打印函数体', liyaohui.getNick);
})();
