define(['jquery','template','bootstrap'],function( $ , template){
  $.ajax({
    type:'get',
    url:'/api/teacher',
    dataType:'json',
    success:function(data){
      console.log(data);
      var html =template('teacherInfo',data);
      $('.teacher-list #list').html(html);
      $('.teacher-list #look').click(function(){
       // alert(1);
        var tc_Id =$(this).parent().attr('data-id');
        $.ajax({
          type:'get',
          url:'/api/teacher/view',
         data:{tc_id:tc_Id},
         dataType:'json',
         success:function(data){
          console.log(data);
          var html =template('teacher-look',data.result);
          $('#teacherModal #check').html(html);
           $('#teacherModal').modal();

         }
        })
      })
      $('.teacher-list #swichBtn').click(function(){
         var tc_Id =$(this).parent().attr('data-id');
         var tc_Status=$(this).parent().attr('data-status');
         var $that=this;
        $.ajax({
          type:'post',
          url:'/api/teacher/handle',
          data:{
            tc_id:tc_Id,
            tc_status:tc_Status
          },
          dataType:'json',
          success:function(data){
            console.log(data);
           $($that).parent().attr('data-status',data.result.tc_status);
            if(data.result.tc_status==0){
              $($that).text('注 销')
            }else{
              $($that).text('启 用')
            }
          }
        })
      })
    }
  })
})
