(() => {
  console.log('导入demo10.js');

  // Js 判断
  // if  else if else
  let a01 = 17;
  if (a01 == 10) {
    console.log('a01=10');
  } else if (a01 == 9) {
    console.log('a01=9');
  } else if (a01 == 8) {
    console.log('a01=8');
  } else {
    console.log('上述条件都不满足');
  }

  // switch
  switch (a01) {
    case 15: {
      console.log('a01=15');
      break;
    }
    case 16: {
      console.log('a01=16');
      break;
    }
    case 17: {
      console.log('a01=17');
      break;
    }
    default: {
      console.log('上述条件都不满足');
    }
  }

  // Js 循环
  // While
  let str = 'abcd';
  while (str) {
    if (str == 'abc') {
      break;
    } else {
      console.log('上述条件都不满足');
      break;
    }
  }

  // for
  let myZmu = ['a', 'd', 'z', 'k', 'kk', 'dk'];
  for (let i = 0; i < myZmu.length; i++) {
    console.log('myZmu数组的第' + i + '位', myZmu[i]);
  }

  console.log('===============================');

  // foreach
  for (let key in myZmu) {
    console.log('myZmu数组的第' + key + '位', myZmu[key]);
  }

  // do while
  let a02 = 90;
  do {
    console.log('我是do while循环');
  } while (a02 > 90);
})();
