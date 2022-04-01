// 1用户名不能为空
// 2请输入合法的邮箱、手机号码或者2-4位的汉字昵称
// 点击登录和输入时
window.onload = function () {
   var input_1 = document.getElementsByName('userName')[0];
   var input_2 = document.getElementsByName('password')[0];
   input_1.oninput = function () {
      var it = this.validity;
      if (it.valueMissing == true) {
         this.setCustomValidity("不能为空！");
         console.log('1');
      } else if (it.patternMismatch) {
         this.setCustomValidity('请输入合法的邮箱、手机号码或者2-4位的汉字昵称!');
         console.log('2');
      } else {
         this.setCustomValidity('');
         console.log('3');
      }

   }
   input_2.oninput = function () {
      var it = this.validity;
      if (it.valueMissing == true) {
         this.setCustomValidity('不能为空！')
      } else if (it.patternMismatch) {
         this.setCustomValidity('请输入合法的6~10位数字!')
      } else {
         this.setCustomValidity('')
      }
   }
}
