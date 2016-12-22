myApp.filter('myFilter',function(){
   return function(input){
       return input + '☺';
   }
});