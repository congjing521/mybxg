   // NProgress.start();
	// NProgress.done();
  define(['jquery','template','cookie'],function($,template){
    $('.navs ul').prev('a').on('click', function () {
    $(this).next().slideToggle();
   // alert('1');
  });
    $('#logout').click(function(){
      // alert('1');
       $.ajax({
           type:'post',
           url:'/api/logout',
           dataType:'json',
          success:function(data){
            console.log(data);
            if(data.code==200){
              $.removeCookie('loginInfo',{path:'/'});
             location.href='/';
             }  
         },
      });
   });
   var info=$.cookie('loginInfo')
   var tpl=' <div class="avatar img-circle">'
            +'<img src="{{tc_avatar}}">'
            +'</div>'
            +'<h4>{{tc_name}}</h4>'
    var html= template.render(tpl,info?JSON.parse(info):{});
    
    $('.aside .profile').html(html);
    if(!$.cookie('PHPSESSID') && location.pathname != '/' && location.href !='/login'){
      location.href='/';
    }
  }) 
	
