(() => {
  console.log('导入demo04.js');

  let txt01 = document.getElementById('txt01');

  // 通过js设置样式
  txt01.style.fontSize = '1.4rem';
  txt01.style.color = 'red';
  txt01.style.cursor = 'pointer';

  // js事件
  // onclick:鼠标点击事件
  txt01.onclick = function () {
    alert(txt01.innerHTML);
  };

  // onload:页面加载完成后触发
  // window.onload = function () {
  //   alert('页面加载完成');
  // };

  let myDiv01 = document.getElementById('myDiv01');
  myDiv01.style.display = 'flex';
  myDiv01.style.justifyContent = 'center';
  myDiv01.style.alignItems = 'center';
  myDiv01.style.margin = '2rem';
  myDiv01.style.background = 'red';
  myDiv01.style.width = '150px';
  myDiv01.style.height = '150px';
  myDiv01.style.cursor = 'pointer';

  // onmousemove  鼠标进入元素上触发
  myDiv01.onmousemove = function () {
    myDiv01.style.background = 'green';
  };

  // onmouseout  鼠标离开元素触发
  myDiv01.onmouseout = function () {
    myDiv01.style.background = 'red';
  };

  let myDiv02 = document.getElementById('myDiv02');
  myDiv02.style.display = 'flex';
  myDiv02.style.justifyContent = 'center';
  myDiv02.style.alignItems = 'center';
  myDiv02.style.margin = '2rem';
  myDiv02.style.background = 'red';
  myDiv02.style.width = '150px';
  myDiv02.style.height = '150px';
  myDiv02.style.cursor = 'pointer';

  // 鼠标点击并按下时触发
  myDiv02.onmousedown = function () {
    myDiv02.style.background = 'green';
  };

  // 鼠标松开时触发
  myDiv02.onmouseup = function () {
    myDiv02.style.background = 'red';
  };
})();
