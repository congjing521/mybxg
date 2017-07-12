require.config({
  baseUrl:'/public/assets',
  paths:{
    jquery:'jquery/jquery.min',
    cookie:'jquery-cookie/jquery.cookie',
    template:'artTemplate/template-web',
    bootstrap:'bootstrap/js/bootstrap.min',
    // nprogress:'nprogresss',
    // echart:'echart/echart.min',/nprogres
    common:'../js/common',
    login:'../js/login',
    teacher:'../js/teacher-list',
  },
  shim:{
    bootstrap:{
      deps:['jquery']
    }
  }

});
