(function () {
  console.log('导入demo14.js');

  // Js 类
  class myClass {
    // 构造函数
    constructor(name, age, sex, phone) {
      this.name = name;
      this.age = age;
      this.sex = sex;
      this.phone = phone;
    }

    set s_name(name) {
      this.name = name;
    }
    set s_age(age) {
      this.age = age;
    }
    set s_sex(sex) {
      this.sex = sex;
    }
    set s_phone(phone) {
      this.phone = phone;
    }

    get g_name() {
      return this.name;
    }
    get g_age() {
      return this.age;
    }
    get g_sex() {
      return this.sex;
    }
    get g_phone() {
      return this.phone;
    }

    static hello(str) {
      return 'hello,' + str;
    }
  }

  let stu = new myClass('小明', 18, 'boy', '10086');
  console.log(stu);
  stu.s_name = '小张';
  console.log(stu);
  console.log(stu.g_phone);

  console.log(myClass.hello('karl'));

  class myUser extends myClass {
    constructor(uname, upwd, name, age, sex, phone) {
      super(name, age, sex, phone);
      this.uname = uname;
      this.upwd = upwd;
    }

    static getParentInfo(str) {
      return '父类hello方法返回的内容' + this.hello(str);
    }
  }

  let user = new myUser('user', '1234', '小美', 18, 'girl', '10086');
  console.log(user);
  console.log(myUser.getParentInfo('huhuiyu'));
})();
