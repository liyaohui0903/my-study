(() => {
  console.log('导入work01.js');

  let divs = document.createElement('div');
  console.log('创建一个div');
  divs.style.display = 'flex';
  divs.style.justifyContent = 'center';
  divs.style.margin = '3rem';

  let myBtn01 = document.createElement('button');
  myBtn01.innerHTML = '默认按钮';
  myBtn01.style.margin = '0rem 0.4rem';
  myBtn01.style.padding = '0.7rem 2rem';
  myBtn01.style.borderRadius = '0.4rem';
  myBtn01.style.fontSize = '1.1rem';
  myBtn01.style.border = '0.8px solid #dcdfe6';
  myBtn01.style.background = '#ffffff';
  myBtn01.style.color = '#606266';
  document.body.appendChild(divs).appendChild(myBtn01);
  myBtn01.onmousemove = function () {
    myBtn01.style.cursor = 'pointer';
    myBtn01.style.border = '0.8px solid #c6e2ff';
    myBtn01.style.background = '#ecf5ff';
    myBtn01.style.color = '#669eff';
  };
  myBtn01.onmouseout = function () {
    myBtn01.style.cursor = 'pointer';
    myBtn01.style.border = '0.8px solid #dcdfe6';
    myBtn01.style.background = '#ffffff';
    myBtn01.style.color = '#606266';
  };
  myBtn01.onmousedown = function () {
    myBtn01.style.cursor = 'pointer';
    myBtn01.style.border = '0.8px solid #3a8ee6';
    myBtn01.style.background = '#ecf5ff';
    myBtn01.style.color = '#669eff';
  };
  myBtn01.onmouseup = function () {
    myBtn01.style.cursor = 'pointer';
    myBtn01.style.border = '0.8px solid #dcdfe6';
    myBtn01.style.color = '#669eff';
  };

  let myBtn02 = document.createElement('button');
  myBtn02.innerHTML = '主要按钮';
  myBtn02.innerHTML = '默认按钮';
  myBtn02.style.margin = '0rem 0.4rem';
  myBtn02.style.padding = '0.7rem 2rem';
  myBtn02.style.borderRadius = '0.4rem';
  myBtn02.style.fontSize = '1.1rem';
  myBtn02.style.border = '0.8px solid #66b1ff';
  myBtn02.style.background = '#66b1ff';
  myBtn02.style.color = '#ffffff';
  document.body.appendChild(divs).appendChild(myBtn02);
  myBtn02.onmousemove = function () {
    myBtn02.style.cursor = 'pointer';
    myBtn02.style.opacity = '0.85';
  };
  myBtn02.onmouseout = function () {
    myBtn02.style.cursor = 'pointer';
    myBtn02.style.border = '0.8px solid #66b1ff';
    myBtn02.style.opacity = '1';
    myBtn02.style.color = '#ffffff';
  };
  myBtn02.onmousedown = function () {
    myBtn02.style.cursor = 'pointer';
    myBtn02.style.border = '0.8px solid #3a8ee6';
    myBtn02.style.background = '#3a8ee6';
    myBtn02.style.color = '#ffffff';
  };
  myBtn02.onmouseup = function () {
    myBtn02.style.cursor = 'pointer';
    myBtn02.style.border = '0.8px solid #66b1ff';
    myBtn02.style.background = '#66b1ff';
    myBtn02.style.opacity = '0.85';
    myBtn02.style.color = '#ffffff';
  };

  let myBtn03 = document.createElement('button');
  myBtn03.innerHTML = '成功按钮';
  myBtn03.style.margin = '0rem 0.4rem';
  myBtn03.style.padding = '0.7rem 2rem';
  myBtn03.style.borderRadius = '0.4rem';
  myBtn03.style.fontSize = '1.1rem';
  myBtn03.style.border = '0.8px solid #85ce61';
  myBtn03.style.background = '#85ce61';
  myBtn03.style.color = '#ffffff';
  document.body.appendChild(divs).appendChild(myBtn03);
  myBtn03.onmousemove = function () {
    myBtn03.style.cursor = 'pointer';
    myBtn03.style.opacity = '0.85';
  };
  myBtn03.onmouseout = function () {
    myBtn03.style.cursor = 'pointer';
    myBtn03.style.border = '0.8px solid #85ce61';
    myBtn03.style.opacity = '1';
    myBtn03.style.color = '#ffffff';
  };
  myBtn03.onmousedown = function () {
    myBtn03.style.cursor = 'pointer';
    myBtn03.style.border = '0.8px solid #5daf34';
    myBtn03.style.background = '#5daf34';
    myBtn03.style.color = '#ffffff';
  };
  myBtn03.onmouseup = function () {
    myBtn03.style.cursor = 'pointer';
    myBtn03.style.border = '0.8px solid #85ce61';
    myBtn03.style.background = '#85ce61';
    myBtn03.style.opacity = '0.85';
    myBtn03.style.color = '#ffffff';
  };

  let myBtn04 = document.createElement('button');
  myBtn04.innerHTML = '信息按钮';
  myBtn04.style.margin = '0rem 0.4rem';
  myBtn04.style.padding = '0.7rem 2rem';
  myBtn04.style.borderRadius = '0.4rem';
  myBtn04.style.fontSize = '1.1rem';
  myBtn04.style.border = '0.8px solid #909399';
  myBtn04.style.background = '#909399';
  myBtn04.style.color = '#ffffff';
  document.body.appendChild(divs).appendChild(myBtn04);
  myBtn04.onmousemove = function () {
    myBtn04.style.cursor = 'pointer';
    myBtn04.style.opacity = '0.85';
  };
  myBtn04.onmouseout = function () {
    myBtn04.style.cursor = 'pointer';
    myBtn04.style.border = '0.8px solid #909399';
    myBtn04.style.opacity = '1';
    myBtn04.style.color = '#ffffff';
  };
  myBtn04.onmousedown = function () {
    myBtn04.style.cursor = 'pointer';
    myBtn04.style.border = '0.8px solid #82848a';
    myBtn04.style.background = '#82848a';
    myBtn04.style.color = '#ffffff';
  };
  myBtn04.onmouseup = function () {
    myBtn04.style.cursor = 'pointer';
    myBtn04.style.border = '0.8px solid #909399';
    myBtn04.style.background = '#909399';
    myBtn04.style.opacity = '0.85';
    myBtn04.style.color = '#ffffff';
  };

  let myBtn05 = document.createElement('button');
  myBtn05.innerHTML = '警告按钮';
  myBtn05.style.margin = '0rem 0.4rem';
  myBtn05.style.padding = '0.7rem 2rem';
  myBtn05.style.borderRadius = '0.4rem';
  myBtn05.style.fontSize = '1.1rem';
  myBtn05.style.border = '0.8px solid #e6a23c';
  myBtn05.style.background = '#e6a23c';
  myBtn05.style.color = '#ffffff';
  document.body.appendChild(divs).appendChild(myBtn05);
  myBtn05.onmousemove = function () {
    myBtn05.style.cursor = 'pointer';
    myBtn05.style.opacity = '0.85';
  };
  myBtn05.onmouseout = function () {
    myBtn05.style.cursor = 'pointer';
    myBtn05.style.border = '0.8px solid #e6a23c';
    myBtn05.style.opacity = '1';
    myBtn05.style.color = '#ffffff';
  };
  myBtn05.onmousedown = function () {
    myBtn05.style.cursor = 'pointer';
    myBtn05.style.border = '0.8px solid #cf9236';
    myBtn05.style.background = '#cf9236';
    myBtn05.style.color = '#ffffff';
  };
  myBtn05.onmouseup = function () {
    myBtn05.style.cursor = 'pointer';
    myBtn05.style.border = '0.8px solid #e6a23c';
    myBtn05.style.background = '#e6a23c';
    myBtn05.style.opacity = '0.85';
    myBtn05.style.color = '#ffffff';
  };

  let myBtn06 = document.createElement('button');
  myBtn06.innerHTML = '危险按钮';
  myBtn06.style.margin = '0rem 0.4rem';
  myBtn06.style.padding = '0.7rem 2rem';
  myBtn06.style.borderRadius = '0.4rem';
  myBtn06.style.fontSize = '1.1rem';
  myBtn06.style.border = '0.8px solid #f56c6c';
  myBtn06.style.background = '#f56c6c';
  myBtn06.style.color = '#ffffff';
  document.body.appendChild(divs).appendChild(myBtn06);
  myBtn06.onmousemove = function () {
    myBtn06.style.cursor = 'pointer';
    myBtn06.style.opacity = '0.85';
  };
  myBtn06.onmouseout = function () {
    myBtn06.style.cursor = 'pointer';
    myBtn06.style.border = '0.8px solid #f56c6c';
    myBtn06.style.opacity = '1';
    myBtn06.style.color = '#ffffff';
  };
  myBtn06.onmousedown = function () {
    myBtn06.style.cursor = 'pointer';
    myBtn06.style.border = '0.8px solid #dd6161';
    myBtn06.style.background = '#dd6161';
    myBtn06.style.color = '#ffffff';
  };
  myBtn06.onmouseup = function () {
    myBtn06.style.cursor = 'pointer';
    myBtn06.style.border = '0.8px solid #f56c6c';
    myBtn06.style.background = '#f56c6c';
    myBtn06.style.opacity = '0.85';
    myBtn06.style.color = '#ffffff';
  };

  let divs01 = document.createElement('div');
  divs01.style.display = 'flex';
  divs01.style.justifyContent = 'center';
  divs01.style.margin = '3rem';

  let myBtn001 = document.createElement('button');
  myBtn001.innerHTML = '朴素按钮';
  myBtn001.style.margin = '0rem 0.4rem';
  myBtn001.style.padding = '0.7rem 2rem';
  myBtn001.style.borderRadius = '0.4rem';
  myBtn001.style.fontSize = '1.1rem';
  myBtn001.style.border = '0.8px solid #dcdfe6';
  myBtn001.style.background = '#ffffff';
  myBtn001.style.color = '#606266';
  document.body.appendChild(divs01).appendChild(myBtn001);
  myBtn001.onmousemove = function () {
    myBtn001.style.cursor = 'pointer';
    myBtn001.style.border = '0.8px solid #409eff';
    myBtn001.style.background = '#ffffff';
    myBtn001.style.color = '#409eff';
  };
  myBtn001.onmouseout = function () {
    myBtn001.style.cursor = 'pointer';
    myBtn001.style.border = '0.8px solid #dcdfe6';
    myBtn001.style.background = '#ffffff';
    myBtn001.style.color = '#606266';
  };
  myBtn001.onmousedown = function () {
    myBtn001.style.cursor = 'pointer';
    myBtn001.style.border = '0.8px solid #3a8ee6';
    myBtn001.style.background = '#ffffff';
    myBtn001.style.color = '#3a8ee6';
  };
  myBtn001.onmouseup = function () {
    myBtn001.style.cursor = 'pointer';
    myBtn001.style.border = '0.8px solid #409eff';
    myBtn001.style.color = '#669eff';
  };

  let myBtn002 = document.createElement('button');
  myBtn002.innerHTML = '默认按钮';
  myBtn002.style.margin = '0rem 0.4rem';
  myBtn002.style.padding = '0.7rem 2rem';
  myBtn002.style.borderRadius = '0.4rem';
  myBtn002.style.fontSize = '1.1rem';
  myBtn002.style.border = '0.8px solid #b3d8ff';
  myBtn002.style.background = '#ecf5ff';
  myBtn002.style.color = '#409eff';
  document.body.appendChild(divs01).appendChild(myBtn002);
  myBtn002.onmousemove = function () {
    myBtn002.style.cursor = 'pointer';
    myBtn002.style.border = '0.8px solid #66b1ff';
    myBtn002.style.background = '#66b1ff';
    myBtn002.style.color = '#ffffff';
  };
  myBtn002.onmouseout = function () {
    myBtn002.style.cursor = 'pointer';
    myBtn002.style.border = '0.8px solid #b3d8ff';
    myBtn002.style.background = '#ecf5ff';
    myBtn002.style.color = '#409eff';
  };
  myBtn002.onmousedown = function () {
    myBtn002.style.cursor = 'pointer';
    myBtn002.style.border = '0.8px solid #3a8ee6';
    myBtn002.style.background = '#3a8ee6';
    myBtn002.style.color = '#ffffff';
  };
  myBtn002.onmouseup = function () {
    myBtn002.style.cursor = 'pointer';
    myBtn002.style.border = '0.8px solid #66b1ff';
    myBtn002.style.background = '#66b1ff';
    myBtn002.style.color = '#ffffff';
  };

  let myBtn003 = document.createElement('button');
  myBtn003.innerHTML = '成功按钮';
  myBtn003.style.margin = '0rem 0.4rem';
  myBtn003.style.padding = '0.7rem 2rem';
  myBtn003.style.borderRadius = '0.4rem';
  myBtn003.style.fontSize = '1.1rem';
  myBtn003.style.border = '0.8px solid #c2e7b0';
  myBtn003.style.background = '#f0f9eb';
  myBtn003.style.color = '#67c23a';
  document.body.appendChild(divs01).appendChild(myBtn003);
  myBtn003.onmousemove = function () {
    myBtn003.style.cursor = 'pointer';
    myBtn003.style.border = '0.8px solid #67c23a';
    myBtn003.style.background = '#67c23a';
    myBtn003.style.color = '#ffffff';
  };
  myBtn003.onmouseout = function () {
    myBtn003.style.cursor = 'pointer';
    myBtn003.style.border = '0.8px solid #c2e7b0';
    myBtn003.style.background = '#f0f9eb';
    myBtn003.style.color = '#67c23a';
  };
  myBtn003.onmousedown = function () {
    myBtn003.style.cursor = 'pointer';
    myBtn003.style.border = '0.8px solid #5daf34';
    myBtn003.style.background = '#5daf34';
    myBtn003.style.color = '#ffffff';
  };
  myBtn003.onmouseup = function () {
    myBtn003.style.cursor = 'pointer';
    myBtn003.style.border = '0.8px solid #c2e7b0';
    myBtn003.style.background = '#67c23a';
    myBtn003.style.color = '#ffffff';
  };

  let myBtn004 = document.createElement('button');
  myBtn004.innerHTML = '信息按钮';
  myBtn004.style.margin = '0rem 0.4rem';
  myBtn004.style.padding = '0.7rem 2rem';
  myBtn004.style.borderRadius = '0.4rem';
  myBtn004.style.fontSize = '1.1rem';
  myBtn004.style.border = '0.8px solid #d3d4d6';
  myBtn004.style.background = '#f4f4f5';
  myBtn004.style.color = '#aa93a5';
  document.body.appendChild(divs01).appendChild(myBtn004);
  myBtn004.onmousemove = function () {
    myBtn004.style.cursor = 'pointer';
    myBtn004.style.border = '0.8px solid #909399';
    myBtn004.style.background = '#909399';
    myBtn004.style.color = '#ffffff';
  };
  myBtn004.onmouseout = function () {
    myBtn004.style.cursor = 'pointer';
    myBtn004.style.border = '0.8px solid #d3d4d6';
    myBtn004.style.background = '#f4f4f5';
    myBtn004.style.color = '#aa93a5';
  };
  myBtn004.onmousedown = function () {
    myBtn004.style.cursor = 'pointer';
    myBtn004.style.border = '0.8px solid #82848a';
    myBtn004.style.background = '#82848a';
    myBtn004.style.color = '#ffffff';
  };
  myBtn004.onmouseup = function () {
    myBtn004.style.cursor = 'pointer';
    myBtn004.style.border = '0.8px solid #909399';
    myBtn004.style.background = '#909399';
    myBtn004.style.color = '#ffffff';
  };

  let myBtn005 = document.createElement('button');
  myBtn005.innerHTML = '警告按钮';
  myBtn005.style.margin = '0rem 0.4rem';
  myBtn005.style.padding = '0.7rem 2rem';
  myBtn005.style.borderRadius = '0.4rem';
  myBtn005.style.fontSize = '1.1rem';
  myBtn005.style.border = '0.8px solid #f5dab1';
  myBtn005.style.background = '#fdf6ec';
  myBtn005.style.color = '#e6a23c';
  document.body.appendChild(divs01).appendChild(myBtn005);
  myBtn005.onmousemove = function () {
    myBtn005.style.cursor = 'pointer';
    myBtn005.style.border = '0.8px solid #e6a23c';
    myBtn005.style.background = '#e6a23c';
    myBtn005.style.color = '#ffffff';
  };
  myBtn005.onmouseout = function () {
    myBtn005.style.cursor = 'pointer';
    myBtn005.style.border = '0.8px solid #d3d4d6';
    myBtn005.style.background = '#f4f4f5';
    myBtn005.style.color = '#e6a23c';
  };
  myBtn005.onmousedown = function () {
    myBtn005.style.cursor = 'pointer';
    myBtn005.style.border = '0.8px solid #cf9236';
    myBtn005.style.background = '#cf9236';
    myBtn005.style.color = '#ffffff';
  };
  myBtn005.onmouseup = function () {
    myBtn005.style.cursor = 'pointer';
    myBtn005.style.border = '0.8px solid #e6a23c';
    myBtn005.style.background = '#e6a23c';
    myBtn005.style.color = '#ffffff';
  };

  let myBtn006 = document.createElement('button');
  myBtn006.innerHTML = '危险按钮';
  myBtn006.style.margin = '0rem 0.4rem';
  myBtn006.style.padding = '0.7rem 2rem';
  myBtn006.style.borderRadius = '0.4rem';
  myBtn006.style.fontSize = '1.1rem';
  myBtn006.style.border = '0.8px solid #fbc4c4';
  myBtn006.style.background = '#fef0f0';
  myBtn006.style.color = '#f66c6c';
  document.body.appendChild(divs01).appendChild(myBtn006);
  myBtn006.onmousemove = function () {
    myBtn006.style.cursor = 'pointer';
    myBtn006.style.border = '0.8px solid #f56c6c';
    myBtn006.style.background = '#f56c6c';
    myBtn006.style.color = '#ffffff';
  };
  myBtn006.onmouseout = function () {
    myBtn006.style.cursor = 'pointer';
    myBtn006.style.border = '0.8px solid #d3d4d6';
    myBtn006.style.background = '#f4f4f5';
    myBtn006.style.color = '#f66c6c';
  };
  myBtn006.onmousedown = function () {
    myBtn006.style.cursor = 'pointer';
    myBtn006.style.border = '0.8px solid #dd6161';
    myBtn006.style.background = '#dd6161';
    myBtn006.style.color = '#ffffff';
  };
  myBtn006.onmouseup = function () {
    myBtn006.style.cursor = 'pointer';
    myBtn006.style.border = '0.8px solid #fbc4c4';
    myBtn006.style.background = '#f56c6c';
    myBtn006.style.color = '#ffffff';
  };

  let divs02 = document.createElement('div');
  divs02.style.display = 'flex';
  divs02.style.justifyContent = 'center';
  divs02.style.margin = '3rem';

  let myBtn0001 = document.createElement('button');
  myBtn0001.innerHTML = '圆角按钮';
  myBtn0001.style.margin = '0rem 0.4rem';
  myBtn0001.style.padding = '0.7rem 2rem';
  myBtn0001.style.borderRadius = '1.5rem';
  myBtn0001.style.fontSize = '1.1rem';
  myBtn0001.style.border = '0.8px solid #dcdfe6';
  myBtn0001.style.background = '#ffffff';
  myBtn0001.style.color = '#606266';
  document.body.appendChild(divs02).appendChild(myBtn0001);
  myBtn0001.onmousemove = function () {
    myBtn0001.style.cursor = 'pointer';
    myBtn0001.style.border = '0.8px solid #c6e2ff';
    myBtn0001.style.background = '#ecf5ff';
    myBtn0001.style.color = '#669eff';
  };
  myBtn0001.onmouseout = function () {
    myBtn0001.style.cursor = 'pointer';
    myBtn0001.style.border = '0.8px solid #dcdfe6';
    myBtn0001.style.background = '#ffffff';
    myBtn0001.style.color = '#606266';
  };
  myBtn0001.onmousedown = function () {
    myBtn0001.style.cursor = 'pointer';
    myBtn0001.style.border = '0.8px solid #3a8ee6';
    myBtn0001.style.background = '#ecf5ff';
    myBtn0001.style.color = '#669eff';
  };
  myBtn0001.onmouseup = function () {
    myBtn0001.style.cursor = 'pointer';
    myBtn0001.style.border = '0.8px solid #dcdfe6';
    myBtn0001.style.color = '#669eff';
  };

  let myBtn0002 = document.createElement('button');
  myBtn0002.innerHTML = '主要按钮';
  myBtn0002.innerHTML = '默认按钮';
  myBtn0002.style.margin = '0rem 0.4rem';
  myBtn0002.style.padding = '0.7rem 2rem';
  myBtn0002.style.borderRadius = '1.5rem';
  myBtn0002.style.fontSize = '1.1rem';
  myBtn0002.style.border = '0.8px solid #66b1ff';
  myBtn0002.style.background = '#66b1ff';
  myBtn0002.style.color = '#ffffff';
  document.body.appendChild(divs02).appendChild(myBtn0002);
  myBtn0002.onmousemove = function () {
    myBtn0002.style.cursor = 'pointer';
    myBtn0002.style.opacity = '0.85';
  };
  myBtn0002.onmouseout = function () {
    myBtn0002.style.cursor = 'pointer';
    myBtn0002.style.border = '0.8px solid #66b1ff';
    myBtn0002.style.opacity = '1';
    myBtn0002.style.color = '#ffffff';
  };
  myBtn0002.onmousedown = function () {
    myBtn0002.style.cursor = 'pointer';
    myBtn0002.style.border = '0.8px solid #3a8ee6';
    myBtn0002.style.background = '#3a8ee6';
    myBtn0002.style.color = '#ffffff';
  };
  myBtn0002.onmouseup = function () {
    myBtn0002.style.cursor = 'pointer';
    myBtn0002.style.border = '0.8px solid #66b1ff';
    myBtn0002.style.background = '#66b1ff';
    myBtn0002.style.opacity = '0.85';
    myBtn0002.style.color = '#ffffff';
  };

  let myBtn0003 = document.createElement('button');
  myBtn0003.innerHTML = '成功按钮';
  myBtn0003.style.margin = '0rem 0.4rem';
  myBtn0003.style.padding = '0.7rem 2rem';
  myBtn0003.style.borderRadius = '1.5rem';
  myBtn0003.style.fontSize = '1.1rem';
  myBtn0003.style.border = '0.8px solid #85ce61';
  myBtn0003.style.background = '#85ce61';
  myBtn0003.style.color = '#ffffff';
  document.body.appendChild(divs02).appendChild(myBtn0003);
  myBtn0003.onmousemove = function () {
    myBtn0003.style.cursor = 'pointer';
    myBtn0003.style.opacity = '0.85';
  };
  myBtn0003.onmouseout = function () {
    myBtn0003.style.cursor = 'pointer';
    myBtn0003.style.border = '0.8px solid #85ce61';
    myBtn0003.style.opacity = '1';
    myBtn0003.style.color = '#ffffff';
  };
  myBtn0003.onmousedown = function () {
    myBtn0003.style.cursor = 'pointer';
    myBtn0003.style.border = '0.8px solid #5daf34';
    myBtn0003.style.background = '#5daf34';
    myBtn0003.style.color = '#ffffff';
  };
  myBtn0003.onmouseup = function () {
    myBtn0003.style.cursor = 'pointer';
    myBtn0003.style.border = '0.8px solid #85ce61';
    myBtn0003.style.background = '#85ce61';
    myBtn0003.style.opacity = '0.85';
    myBtn0003.style.color = '#ffffff';
  };

  let myBtn0004 = document.createElement('button');
  myBtn0004.innerHTML = '信息按钮';
  myBtn0004.style.margin = '0rem 0.4rem';
  myBtn0004.style.padding = '0.7rem 2rem';
  myBtn0004.style.borderRadius = '1.5rem';
  myBtn0004.style.fontSize = '1.1rem';
  myBtn0004.style.border = '0.8px solid #909399';
  myBtn0004.style.background = '#909399';
  myBtn0004.style.color = '#ffffff';
  document.body.appendChild(divs02).appendChild(myBtn0004);
  myBtn0004.onmousemove = function () {
    myBtn0004.style.cursor = 'pointer';
    myBtn0004.style.opacity = '0.85';
  };
  myBtn0004.onmouseout = function () {
    myBtn0004.style.cursor = 'pointer';
    myBtn0004.style.border = '0.8px solid #909399';
    myBtn0004.style.opacity = '1';
    myBtn0004.style.color = '#ffffff';
  };
  myBtn0004.onmousedown = function () {
    myBtn0004.style.cursor = 'pointer';
    myBtn0004.style.border = '0.8px solid #82848a';
    myBtn0004.style.background = '#82848a';
    myBtn0004.style.color = '#ffffff';
  };
  myBtn0004.onmouseup = function () {
    myBtn0004.style.cursor = 'pointer';
    myBtn0004.style.border = '0.8px solid #909399';
    myBtn0004.style.background = '#909399';
    myBtn0004.style.opacity = '0.85';
    myBtn0004.style.color = '#ffffff';
  };

  let myBtn0005 = document.createElement('button');
  myBtn0005.innerHTML = '警告按钮';
  myBtn0005.style.margin = '0rem 0.4rem';
  myBtn0005.style.padding = '0.7rem 2rem';
  myBtn0005.style.borderRadius = '1.5rem';
  myBtn0005.style.fontSize = '1.1rem';
  myBtn0005.style.border = '0.8px solid #e6a23c';
  myBtn0005.style.background = '#e6a23c';
  myBtn0005.style.color = '#ffffff';
  document.body.appendChild(divs02).appendChild(myBtn0005);
  myBtn0005.onmousemove = function () {
    myBtn0005.style.cursor = 'pointer';
    myBtn0005.style.opacity = '0.85';
  };
  myBtn0005.onmouseout = function () {
    myBtn0005.style.cursor = 'pointer';
    myBtn0005.style.border = '0.8px solid #e6a23c';
    myBtn0005.style.opacity = '1';
    myBtn0005.style.color = '#ffffff';
  };
  myBtn0005.onmousedown = function () {
    myBtn0005.style.cursor = 'pointer';
    myBtn0005.style.border = '0.8px solid #cf9236';
    myBtn0005.style.background = '#cf9236';
    myBtn0005.style.color = '#ffffff';
  };
  myBtn0005.onmouseup = function () {
    myBtn0005.style.cursor = 'pointer';
    myBtn0005.style.border = '0.8px solid #e6a23c';
    myBtn0005.style.background = '#e6a23c';
    myBtn0005.style.opacity = '0.85';
    myBtn0005.style.color = '#ffffff';
  };

  let myBtn0006 = document.createElement('button');
  myBtn0006.innerHTML = '危险按钮';
  myBtn0006.style.margin = '0rem 0.4rem';
  myBtn0006.style.padding = '0.7rem 2rem';
  myBtn0006.style.borderRadius = '1.5rem';
  myBtn0006.style.fontSize = '1.1rem';
  myBtn0006.style.border = '0.8px solid #f56c6c';
  myBtn0006.style.background = '#f56c6c';
  myBtn0006.style.color = '#ffffff';
  document.body.appendChild(divs02).appendChild(myBtn0006);
  myBtn0006.onmousemove = function () {
    myBtn0006.style.cursor = 'pointer';
    myBtn0006.style.opacity = '0.85';
  };
  myBtn0006.onmouseout = function () {
    myBtn0006.style.cursor = 'pointer';
    myBtn0006.style.border = '0.8px solid #f56c6c';
    myBtn0006.style.opacity = '1';
    myBtn0006.style.color = '#ffffff';
  };
  myBtn0006.onmousedown = function () {
    myBtn0006.style.cursor = 'pointer';
    myBtn0006.style.border = '0.8px solid #dd6161';
    myBtn0006.style.background = '#dd6161';
    myBtn0006.style.color = '#ffffff';
  };
  myBtn0006.onmouseup = function () {
    myBtn0006.style.cursor = 'pointer';
    myBtn0006.style.border = '0.8px solid #f56c6c';
    myBtn0006.style.background = '#f56c6c';
    myBtn0006.style.opacity = '0.85';
    myBtn0006.style.color = '#ffffff';
  };
})();
