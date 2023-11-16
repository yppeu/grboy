// 0. a클릭시 위로 튕기는 이벤트제거
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});


// 1. approach 영역
$(window).on('scroll resize', function(){
    var scrollPos = 0;
    scrollPos = $(document).scrollTop();
    fix();
    fixHeader();
    fixList();

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
    function fixList(){
        $('section.approach .inner .list li a').removeClass('on');
        if(scrollPos > 1250){
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(0) a').addClass('on');
            // eq(0) : 인덱스값
        }if(scrollPos > 1650){
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(1) a').addClass('on');
            // eq(0) : 인덱스값
        }if(scrollPos > 2050){
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(2) a').addClass('on');
            // eq(0) : 인덱스값
        }
        if(scrollPos > 2550){
            $('section.approach .inner .list li a').removeClass('on');
            $('section.approach .inner .list li:eq(3) a').addClass('on');
            // eq(0) : 인덱스값
        }if(scrollPos > 2900){
            $('section.approach .inner .list li a').removeClass('on');
        }
    }
});



// 2. 스크롤 이벤트
$(function(){
    console.log('스크롤 작동 시작');
    $('.animate').scrolla({
        mobile: true, // disable animation on mobiles
        once: false // only once animation play on scroll
    });
    console.log('스크롤 작동 끝');
});


// 3. 텍스트 애니메이션
$(function(){
    Splitting();
});