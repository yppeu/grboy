// 1. approach 영역
$(window).on('scroll resize', function(){
    console.log(1);
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    fix();

    function fix(){
        if(scrollPos > 1150){
            $('.fix .text').addClass('on');
        }else{
            $('.fix .text').removeClass('on');
        }if(scrollPos > 2700){
            $('.fix .text').removeClass('on');
        }
    }
});