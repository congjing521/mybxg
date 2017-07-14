define(['jquery','template','util'],function($,template,util){
    
    var tcId=util.qs('tc_id',location.search);

    if(tcId){
        $.ajax({
        type:'get',
        url:'/api/teacher/edit',
        data:{tc_id:tcId},
        dataType:'json',
        success:function(data){
            console.log(data);
            var html =template('ediorInfo',data.result);
            $('#teacherInfo').html(html);
            $('#submitBtn').click(function(){
                submitForm('/api/teacher/update')
            })

        }
      })
    }

    function submitForm(url){
        $.ajax({
            type:'post',
            url:url,
            data:$('#addForm').serialize(),
            dataType:'json',
            success:function(data){
                if(data.code==200){
                    location.href='./teacher/teacher_list'
                }
                
            }
        })
    }



    
})