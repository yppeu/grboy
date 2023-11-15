// 0. a클릭시 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});



// 1. approach 영역
$(window).on('scroll resize', function(){
    console.log(1);
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    fix();
    fixHeader();

    function fix(){
        if(scrollPos > 1150){
            $('.fix .text').addClass('on');
        }else{
            $('.fix .text').removeClass('on');
        }if(scrollPos > 2700){
            $('.fix .text').removeClass('on');
        }
    }
    function fixHeader(){
        if(scrollPos > 80){
            $('header').addClass('on');
        }else{
            $('header').removeClass('on');
        }
    }
});