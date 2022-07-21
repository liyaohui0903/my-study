(() => {
  console.log('导入demo03.js');

  // 了解DOM
  // DOM (Document Object Model) 译为文档对象模型，是 HTML 和 XML 文档的编程接口。
  // HTML DOM 定义了访问和操作 HTML 文档的标准方法。

  // DOM 节点
  // 整个文档是一个文档节点
  // 每个 HTML 元素是元素节点
  // HTML 元素内的文本是文本节点
  // 每个 HTML 属性是属性节点
  // 注释是注释节点

  // DOM 方法
  // getElementById()	返回带有指定 ID 的元素。
  let xm = document.getElementById('xm');
  console.log('小明标签:', xm);

  // getElementsByTagName()	返回包含带有指定标签名称的所有元素的节点列表（集合/节点数组）。
  let xzs = document.getElementsByTagName('span');
  console.log('span标签组:', xzs);

  // getElementsByClassName()	返回包含带有指定类名的所有元素的节点列表。
  let myStyles = document.getElementsByClassName('myStyle');
  console.log('myStyle样式名称标签组:', myStyles);

  // appendChild()	把新的子节点添加到指定节点。
  // createElement()	创建元素节点。
  // 创建一个div标签
  let div01 = document.createElement('div');
  div01.innerHTML = '我是js添加的内容';
  // 给body标签里面添加一个子节点(div01)
  // 这个子节点是在body原有内容后面的
  let div001 = document.createElement('div');
  div001.innerHTML = '我是js添加的内容里面的子元素';
  document.body.appendChild(div01).appendChild(div001);

  // removeChild()	删除子节点。
  // div01.removeChild(div001);

  // replaceChild()	替换子节点。
  // 参数：replaceChild(插入的节点对象,替换掉的节点对象)
  let div002 = document.createElement('div');
  div002.innerHTML = '我是替换的内容';
  div01.replaceChild(div002, div001);

  // insertBefore()	在指定的子节点前面插入新的子节点。
  // insertBefore(插入的节点对象,替换掉的节点对象)
  let div003 = document.createElement('div');
  div003.innerHTML = '我是替换的内容，前面插入的子节点';
  div01.insertBefore(div003, div002);

  // createAttribute()	创建属性节点。
  // setAttributeNode() 方法向元素中添加指定的属性节点。
  // 如果这个指定的属性已存在，则此方法会替换它。
  let myStyle01 = document.createAttribute('style');
  myStyle01.value = 'color: red;';
  div01.setAttributeNode(myStyle01);

  // 父节点设置样式，所有子节点也会跟着变化
  // 注：想要改变子节点样式，子节点必须得设置样式
  // let myStyle01s = document.createAttribute('class'); // class=""
  // myStyle01s.value = 'myStyle01'; // class="myStyle01"
  // div002.setAttributeNode(myStyle01s); // div002 <div class="myStyle01"></div>

  // createTextNode()	创建文本节点。
  let info = document.createTextNode('你好，世界!');
  document.body.append(info);

  // getAttribute()	返回指定的属性值。
  let myShux01 = div01.getAttribute('style');
  console.log('div01的style属性值:', myShux01);

  // setAttribute()	把指定属性设置或修改为指定的值。
  div002.setAttribute('class', 'myStyle01');

  // DOM 属性 - 常用
  // innerHTML - 节点（元素）的文本值

  // parentNode - 节点（元素）的父节点
  console.log('div01的父节点:', div01.parentNode);

  // childNodes - 节点（元素）的子节点
  // 注：获取的子节点也包括自己的节点
  console.log('div01的子节点:', div01.childNodes);

  // attributes - 节点（元素）的属性节点
  console.log('div01的属性节点:', div01.attributes);

  // firstChild  - 节点（元素）的首个子节点
  console.log('div01的第一个节点:', div01.firstChild);
  // lastChild  - 节点（元素）的最后一个子节点
  console.log('div01的最后一个节点:', div01.lastChild);
})();
