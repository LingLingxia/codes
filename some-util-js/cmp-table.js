
 function productRendered(){
	if($('#shop-comparison').length==0){
			if(location.hash==""){
				$('.comparision-content .nav li').eq(0).trigger('click');
			}else{
				var category=location.hash.slice(1);
				$('.comparision-content .nav li.'+category).trigger('click');
			}
	}
}

function selectChanged(){
	    if($('.active .show-amazon-button').length==0){
	    	$('.active .comactive-amz').addClass('none');
	    }else{
	    	$('.active .comactive-amz').removeClass('none');
	    }
		var leftDes=$('.active  .absolute-left>p');
		var rightTr=$('.active  .absolute-right tr');
		fixedTable(leftDes,rightTr)
}
jQuery(function(){
		$('#m-comparison').append('<span class="control icon-icon_arrow-left prev none" ></span><span class="control icon-icon_arrow-right next none"></span>');
		
		var panels=$('.panel');
		for(var i=0;i<panels.length;i++){
			if( panels.eq(i).find('.select-version-wrap.really').length==0){
						panels.eq(i).find('.select-version-wrap').remove();
			}
		}
        

		var currentPosition=0,productNum=0,w=0;//每一栏的宽度

		$('.comparision-content .nav li').click(function(){

			$('.comparision-content .nav li').removeClass('active');
			$(this).addClass('active');
			$('.comparision-content .panel').removeClass('active');
			var id=$(this).find('a').data('toggle');
			$('#'+id).addClass('active');
			if($('.comparision-content  .panel.active').find('.pro-description').length>2){
					$('.control').removeClass('none');
					$('.active .absolute-right').eq(0).scrollLeft(0);//复位
					productNum=$('.active .absolute-right .pro-description').length-2;//滑动最大的位置
					w= $('.active .pro-title>td').eq(0).outerWidth();
					currentPosition=0;
			}else{
				$('.control').addClass('none');
			}

			if($('.active .show-amazon-button').length==0){
		    	$('.active .comactive-amz').addClass('none');
		    }else{
		    	$('.active .comactive-amz').removeClass('none');
		    }

			fixedHeight(id);
		});



		function fixedHeight(id){
				var leftDes=$('#'+id+' .absolute-left>p');
				var rightTr=$('#'+id+' .absolute-right tr');
				fixedTable(leftDes,rightTr);
			}

		window.fixedTable=function(leftDes,rightTr){
				leftDes.eq(0).outerHeight(rightTr.eq(0).outerHeight()+rightTr.eq(1).find('td').eq(0).outerHeight());

			  var len=leftDes.length;

			  for(var i=1;i<len;i++){
			  	var maxHeight=Math.max(leftDes.eq(i).outerHeight(),rightTr.eq(i+1).find('td').eq(0).outerHeight());
			  	leftDes.eq(i).outerHeight(Math.ceil(maxHeight));
			  	rightTr.eq(i+1).find('.tdchild').outerHeight(Math.ceil(maxHeight));
			  }
		}



		if($('#m-comparison').length==0)	{
				    var position={
				        click:false,
				        start:0,
				        maxLeft:0
				    };
		    $('.absolute-right').mousedown(function(event){
		        position.click=true;
		        position.start=event.offsetX;
		        position.maxLeft=$(' .active .absolute-right tbody').width()- $(' .active .absolute-right').width()+17;
		    });
		    $('.absolute-right').on('mousemove',function(event){
		        if(!position.click){
		            return ;
		        }
		        var le=$('.active .absolute-right').scrollLeft();
		        if(le + position.start-event.offsetX<0||le + position.start-event.offsetX>position.maxLeft ){
		            position.click=false;
		            return ;
		        }
		        event.preventDefault();
		        event.stopPropagation();
		        $('.active .absolute-right').scrollLeft( le + position.start-event.offsetX);
		    });
		    $('.absolute-right').on('mouseup',function(event){
		            position.click=false;
		    })
	}



		if($('#m-comparison').length>0){

				$('.control.next').click(function(){
					currentPosition=getCurrentPosition();
					
					currentPosition+=2;//往后移动两个位置
					currentPosition=currentPosition>productNum?productNum:currentPosition;
					
					$('.active .absolute-right').eq(0).animate({'scrollLeft':w*currentPosition},500);
				})

				$('.control.prev').click(function(){

					currentPosition=getCurrentPosition();
					currentPosition-=2;//往后移动两个位置
					currentPosition=currentPosition<0?0:currentPosition;
					$('.active .absolute-right').eq(0).animate({'scrollLeft':w*currentPosition},500);
				})

				function getCurrentPosition(){
					
                     var originDistance=$('.active .absolute-right').eq(0).scrollLeft()/w;
					 var fixedD=Math.floor(originDistance);
					   return ((originDistance +0.05)>fixedD+1?(fixedD+1):fixedD);
				}

				$('.categories-bar').click(function(){
					$('#sort').slideToggle(300);
					$('#select-arrow').toggleClass('icon-icon_arrow-up').toggleClass('icon-icon_arrow-down');
				})


				var newTime=null;
				$(document).scroll(function(){
				    clearTimeout(newTime);
					newTime = setTimeout(removeCtrl,100);
				});

				function removeCtrl(){
					if($(document).scrollTop()> $('.question-bottom').offset().top-300){
						$('.control').addClass('scrollnone');
					}else{
						$('.control').removeClass('scrollnone');
					}
				}
           
            $('.nav li').on('click',function(){
            	 $('.control').removeClass('panelscrollnone');
            	if(!$('.control').hasClass('none')){
            		var newTime=null;
            		$('.control.prev').addClass('panelscrollnone');
            		$('.active .absolute-right').scroll(function(){
				        clearTimeout(newTime);
						newTime = setTimeout(hideCtrl,100);
					});	
			   }

			   function hideCtrl(){
			   	 if($('.active .absolute-right').scrollLeft()<10){
                      $('.control.prev').addClass('panelscrollnone');  
                      $('.control.next').removeClass('panelscrollnone'); 
			   	 }else if($('.active .absolute-right').scrollLeft()+10>productNum*w){
  					  $('.control.prev').removeClass('panelscrollnone');  
  					  $('.control.next').addClass('panelscrollnone');  
			   	 }else{
			   	 	  $('.control').removeClass('panelscrollnone');
			   	 }
			   }
            })


		} 

	 });