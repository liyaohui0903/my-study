(() => {
  console.log('导入demo02.js');

  document.write('<h3>标题内容一</h3>');

  let a = 'fasdad';
  let b = 19;

  console.log('a+b=', a + b);

  let text = document.getElementById('text');

  changeText = function changeText() {
    text.innerHTML = '你好，猪';
  };
})();
