define(['jquery'],function($){
    return{
       qs:function(attr,param){
        var p =param.substring('1');
        var arr=p.split('&');
        var retValue='';
        arr.forEach(function(item,index){
            var kv =item.split('=');
            if(attr=kv[0]){
                retValue=kv[1];
                return;
            }
        })
        return retValue;
        } 
    }
    
})