(() => {
  // console.log('导入demo03.js');

  let codeImg = document.getElementById('codeImg');
  let imgCode = document.getElementById('imgCode');
  let checkImgCodeBtn = document.getElementById('checkImgCodeBtn');

  // 查询图片校验码
  let queryImgCode = () => {
    tools.ajax('/teach_project_service/tool/getImageCode', {}, (data) => {
      // console.log('服务器应答的数据:', data);
      if (!data.success) {
        alert(data.message);
        codeImg.src = '';
        return;
      }
      codeImg.src = data.message;
    });
  };

  // 调用查询图片校验码
  queryImgCode();

  // 点击图片刷新图片校验码
  codeImg.addEventListener('click', () => {
    queryImgCode();
  });

  // 点击校验图片验证码
  checkImgCodeBtn.addEventListener('click', () => {
    let imgCodes = imgCode.value;
    // 校验用户数据输入的合法性
    if (imgCodes == '' || imgCodes == null) {
      alert('请输入图片验证码!');
      return;
    }
    tools.ajax(
      '/teach_project_service/tool/checkImageCode',
      {
        code: imgCodes
      },
      (data) => {
        // console.log('服务器应答的校验结果:', data);
        if (data.success) {
          alert(data.message);
          imgCode.value = '';
          queryImgCode();
          return;
        }
        alert(data.message);
        queryImgCode();
      }
    );
  });
})();
