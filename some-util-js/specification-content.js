
var changeTables=function(){


  if($(window).width()>450){
    return ;
  }
  var Tr=$('table td[rowspan]');
  if(Tr.length<=0){
    return ;
  }
      var MaxColumn=0;
       for(var i=0;i<Tr.length;i++){
          var len=Tr.eq(i).parent().children().length;
          MaxColumn=len>MaxColumn?len:MaxColumn;
       }
       var AllTr=$('table tr');//获取所有的tr元素后面开始加类

        Tr.addClass('fixed0');
         for(var j=0;j<AllTr.length;j++){
            var tmpTd=AllTr.eq(j).find('td');
            for(var i=0;i<MaxColumn-1;i++){
              tmpTd.eq(tmpTd.length-1-i).addClass('moved'+i).removeClass('fixed0');
            }
           }
        var posTop=135;

        var screenWidth,leftWidth,rightWidth;
        screenWidth=$(window).width();
        leftWidth=$(window).width()*0.5;
        rightWidth=$(window).width()*0.5;

       var tables=$('.specification-content table');
       var specificationHeight=posTop;   

       for(var i=1;i<=tables.length;i++){
            tables.eq(i-1).addClass('table table'+i);
            var newTable=tables.eq(i-1).clone();
            newTable.addClass('newTable newTable'+i).removeClass('table table'+i);
            tables.eq(i-1).after(newTable);
            tables.eq(i-1).addClass('absolute');
       } 

      var str='<div class="ctrl-button ctrl-buttons"><span class="table-control prev icon-icon_arrow-left"></span><span class="table-control next icon-icon_arrow-right"></span></div>' ;
     $('.specification-content').append(str);


     $('.table1').get(0).style.top=posTop+'px';
     $('.newTable1').get(0).style.top=posTop+'px';
     $('.ctrl-buttons').get(0).style.top=posTop+100+'px';

     if($('.table2').length>0){
        var posTop2=135+$('.table1').height();
        $('.table2').get(0).style.top=posTop2+'px';
        $('.newTable2').get(0).style.top=posTop2+'px';
     }

     if($('.cap1').length>0){
        $('.cap1').addClass('absolute');
        $('.cap1').get(0).style.top=posTop-30+'px';
     }

     if($('.cap2').length>0){
        $('.cap2').addClass('absolute');
        $('.cap2').get(0).style.top=posTop2-30+'px';
     }

     $('table td').css('width',leftWidth)




      $('.next').hide();
      $('.prev').click(function(){
          $('.newTable').animate({'left':-rightWidth+'px'},function(){
             $('.next').show();$('.prev').hide();
          });
         
        });
      $('.next').click(function(){
          $('.newTable').animate({'left':0+'px'},function(){
            $('.prev').show();$('.next').hide();
          });
    });


    setTimeout(function(){
      specificationHeight=posTop+$('.table1').height();
      if($('.table2').length>0){
        specificationHeight=posTop2+$('.table2').height();
      }
        $('.specification-content').height(specificationHeight+100);
    },0);


var beforeFixed=null;//防抖计时器

 $(document).scroll(function(){
    if($('.specification-content').is(':hidden')){
      return ;
    }
  clearTimeout(beforeFixed);
  beforeFixed= setTimeout(addFixed,200);
  });

 function addFixed(){
    if($('.specification-content').offset().top<$('html').scrollTop()&&$('html').scrollTop()<$('.footer').offset().top-200){
       $('.ctrl-button').addClass('fixed-table');
    }else{
        $('.ctrl-button').removeClass('fixed-table');
    }
 }

}


var first=true;

$('.tab-specifications').click(function(){

   if(first){
    first=false;
      changeTables();
   }
});



