define(['jquery','template'],function($,template){
  $.ajax({
    type:'get',
    url:'/api/course',
    dataType:'json',
    success:function(data){
      // console.log(data);
      var html = template('coursetpl',data);
      $('#courseInfo').html(html);
    }
  })
})