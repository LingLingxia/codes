$(function(){

  var isM=false;
  if($('.mobile-body').length>0){
    isM=true;
  }
  if(isM){
    FastClick.attach(document.body);
    var windowHeight=$(document).height();
    $('.black-bg').eq(0).get(0).style.top=windowHeight+'px';
  }
    initMod(0);
    var count=$('.alert-mod').length-1,//int 产品数量减一,最大滑动数量
        dis,//int 每一个tab的宽度
        accuracy=0.5,//float 精确度
        curp,//int 目前展示的tab的编号
        left,//float 内容区域向左滑动的距离，负数
        firstHide=true;//第一次点击初始化需要隐藏高度的描述块
    
    $('.control-left').click(function(event,arg2){
        if($('.accessories-alert').is(":animated")){
            return ;
        }
     
        curp= getCurrentCount(left);

         $('.control-right').removeClass('none');
           if(-curp==count-1||curp==count-1){
                $('.control-left').addClass('none');
            }
         left=(curp-1)*dis;//负数减少

         acceSlide(left);
    });

    $('.control-right').click(function(event,arg2){
        if($('.accessories-alert').is(":animated")){
            return ;
        }
        curp= getCurrentCount(left);
        if(arg2=='touch'){
          curp--;
        }
        $('.control-left').removeClass('none');
        if( curp==-1 ||curp== 1){
                $('.control-right').addClass('none');
            }
        left=(curp+1)*dis;
      
        acceSlide(left);
    });


    $('.acc-item').click(function(){
        var num=parseInt($(this).data('show'));
        $('.acce-control').removeClass('none');

        if(num==count){
            $('.control-left').addClass('none');
        }else if(num==0){
            $('.control-right').addClass('none');
        }else{
             $('.acce-control').removeClass('none');
        }
        $('.black-bg').removeClass('none');


        dis = $('.accessories-alert .alert-mod').outerWidth();
        if(firstHide){
          initHideDes();
          firstHide=false;
        }
        var left= -num*dis;
        initMod(left);
        if(isM){
           $('.black-bg').animate({'top':'0px'},500);
        }
       
    })

    $('.control-close').click(function(){
        if(!isM){
          $('.black-bg').addClass('none');
        }else{
          $('.black-bg').animate({'top':windowHeight+'px'},500,function(){
            $('.black-bg').addClass('none');
          })
        }
    })


    $('.pc-body .black-bg').on('click',this,function(e){
         if($(e.target).hasClass('black-bg')){
             $('.pc-body .black-bg').addClass('none');
         }
    })


    $('#select-acce').change(function(){
        if($('#select-acce').val()=="all"){
            $('.acc-item').removeClass('none');
          }else{
            $('.acc-item').addClass('none');
            $('.acc-item.'+$('#select-acce').val()).removeClass('none');
          }
    });

  if(isM){
    var clearT=null;
    function fs(){
      if($(document).scrollTop() + 10>$('.show-panel ').offset().top){
          $('#select-acce').addClass('fixed');
      }else{
          $('#select-acce').removeClass('fixed');
      }
    }
    $(document).scroll(function(){
       clearTimeout(clearT);
      clearT=setTimeout(fs,500);
   })
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
        posObj.startL=parseFloat($('.accessories-alert').get(0).style.left);
     }
     function touchM(event){
        var tmpDis = event.touches[0].clientX - posObj.startX;
        if(posObj.startL + tmpDis>0||posObj.startL + tmpDis<- count * dis){
          return ;
        }
        $('.accessories-alert').get(0).style.left= posObj.startL + tmpDis +'px';
     }
     function touchE(event){

        var tmpDis = event.changedTouches[0].clientX - posObj.startX;
        if(tmpDis<50&&tmpDis>-50){
             $('.accessories-alert').get(0).style.left= posObj.startL +'px';
            return ;
          }else if(tmpDis>50&&$('.control-right').is(':visible')){

            $('.control-right').trigger('click');

          }else if(tmpDis<-50&&$('.control-left').is(':visible')){
             $('.control-left').trigger('click');;
          }
     
        }

    function initMod(l){
          $('.accessories-alert').eq(0).get(0).style.left=l+'px';
    }
    function getCurrentCount(l){
          left=parseInt($('.accessories-alert').eq(0).get(0).style.left);
          return parseInt((left-1.0)/dis);
    }
    function acceSlide(d){
          $('.accessories-alert').animate({'left':d+'px'},300);
    }

    function initHideDes(){
          $('.alert-mod  .accessories-decription').each(function(index,item){
                if($(item).height()>95){
                  $(item).parent('.accessories-des').addClass('hidden-text');
                }
          });
    }

    if(location.hash!=""){
         var showId=location.hash.slice(1);
         setTimeout(function(){
            $('.acc-item.'+showId).trigger('click');
        },0);
    }

})