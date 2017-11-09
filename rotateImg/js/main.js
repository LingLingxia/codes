


	$(function(){
        var posObj={}; 

        //动态计算中间以及右边的图需要在那个位置
        var halfLeft=Math.floor($('.rotate-wrap').width()/2-$('.rotate-active').width()/2);
        var maxLeft=$('.rotate-wrap').width()-$('.rotate-active').width();

        //三张图的位置
        var leftStr='transition:0.3s;left:0;transform:scale(0.8)';
        var rightStr='transition:0.3s;left:'+maxLeft+'px;transform:scale(0.8)';
        var activeStr='transition:0.3s;left:'+halfLeft+'px;transform:scale(1.1)';

        var $active=$('.rotate-active');
        var $left=$('.rotate-left');
        var $right=$('.rotate-right');
        //初始化三张图的位置
      $active.get(0).style=activeStr;$right.get(0).style=rightStr;$left.get(0).style=leftStr;

        $('#rotate-prev').click(function(){
            //每次click需要重新获取节点
            $active=$('.rotate-active');
            $left=$('.rotate-left');
            $right=$('.rotate-right');

            //三张图的动画
          $active.get(0).style=leftStr;$right.get(0).style=activeStr;$left.get(0).style=rightStr;

          //各节点交换位置，class为位置标志。
          $active.addClass('rotate-left').removeClass('rotate-active');
          $right.addClass('rotate-active').removeClass('rotate-right');
          $left.addClass('rotate-right').removeClass('rotate-left');
        });

        $('#rotate-next').click(function(){
            $active=$('.rotate-active');
            $left=$('.rotate-left');
            $right=$('.rotate-right');
            $active.get(0).style=rightStr;$left.get(0).style=activeStr;$right.get(0).style=leftStr;
            $active.addClass('rotate-right').removeClass('rotate-active');
            $left.addClass('rotate-active').removeClass('rotate-left');
            $right.addClass('rotate-left').removeClass('rotate-right');
        });

        function touchS(event){
            posObj.startX=event.touches[0].clientX;

            $active=$('.rotate-active');
            $left=$('.rotate-left');
            $right=$('.rotate-right');

            posObj.activeX=$active.offset().left;
            posObj.leftX=$left.offset().left;
            posObj.rightX=$right.offset().left;
  
        }
        function touchM(event){
            var tmpDis=event.touches[0].clientX - posObj.startX;
            if(tmpDis<2&&tmpDis>-2){//移动的距离很小就不移动
                    return ;
            }
            if(posObj.activeX+ tmpDis<5 || posObj.activeX+ tmpDis>maxLeft){//不能移出去
                return ;
            }
            
            if( tmpDis>0){//向右滑动
                $active.get(0).style.left=posObj.activeX+ tmpDis + 'px';//右
                $left.get(0).style.left=posObj.leftX - tmpDis + 'px';//左
                $right.get(0).style.left=posObj.rightX - tmpDis + 'px';//左

            }else{//小于0 ， 向左
                $active.get(0).style.left=posObj.activeX+ tmpDis + 'px';//
                $left.get(0).style.left=posObj.leftX - tmpDis + 'px';
                $right.get(0).style.left=posObj.rightX - tmpDis + 'px';
            }
        }
        function touchE(event){
            var tmpDis=event.changedTouches[0].clientX-posObj.startX;
                if(tmpDis<2&&tmpDis>-2){
                    return ;
                }
                if(tmpDis<0){//左划
                    $('#rotate-prev').trigger('click');
                }else{
                    $('#rotate-next').trigger('click');
                }

        }
      document.querySelector('.rotate-wrap').addEventListener('touchstart',touchS,false);
      document.querySelector('.rotate-wrap').addEventListener('touchmove',touchM,false);
      document.querySelector('.rotate-wrap').addEventListener('touchend',touchE,false);

        })
