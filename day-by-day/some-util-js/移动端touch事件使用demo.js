$(function(){

    //本代码只保留移动端事件操作代码,
    //注意,移动端中  touchstart事件和touchmove事件对应的坐标取值为e.touches[0].clientX
    //touchend事件中对应的坐标取值为e.changedTouches[0].clientX
    if(isM){
      FastClick.attach(document.body);

    }
      var posObj={
          startX:'',
          startL:'',
      };
  
       var nodeL=document.querySelectorAll('.accessories-des');
         for(var i=0;i<nodeL.length;i++){
             nodeL[i].addEventListener('touchstart', touchS, false);
            // nodeL[i].addEventListener('touchmove',touchM,false);
             nodeL[i].addEventListener('touchend', touchE, false);
         }
  
  
       function touchS(event){
          posObj.startX = event.touches[0].clientX;
         // posObj.startL=parseFloat($('.accessories-alert').get(0).style.left);
       }
       function touchM(event){
          var tmpDis = event.touches[0].clientX - posObj.startX;
        //   if(posObj.startL + tmpDis>0||posObj.startL + tmpDis<- count * dis){
        //     return ;
        //   }
        //   $('.accessories-alert').get(0).style.left= posObj.startL + tmpDis +'px';
       }
       function touchE(event){
  
          var tmpDis = event.changedTouches[0].clientX - posObj.startX;
        //   if(tmpDis<50&&tmpDis>-50){
        //        $('.accessories-alert').get(0).style.left= posObj.startL +'px';
        //       return ;
        //     }else if(tmpDis>50&&$('.control-right').is(':visible')){
  
        //       $('.control-right').trigger('click');
  
        //     }else if(tmpDis<-50&&$('.control-left').is(':visible')){
        //        $('.control-left').trigger('click');;
        //     }
       
          }
  

  
  
  })