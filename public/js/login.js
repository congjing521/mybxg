define(['jquery','cookie'],function($){
   // 实现登录
   // alert('1');
      $('#btn').click(function(){
        $.ajax({
          type:'post',
          url:'/api/login',
          data:$('#form').serialize(),
          dataType:'json',
          success:function(data){
            console.log(data);
            if(data.code ==200){
              // $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
              
              // $.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
               $.cookie("loginInfo",JSON.stringify(data.result),{path:"/"});
               location.href='/index/index';
            }
          }
        });
        return false;
      });
})

// define(["jquery"],function($){
//   console.log($);
// });
