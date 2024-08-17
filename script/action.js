$(document).ready(function(){
    $('.lang_box a').click(function(event){
        event.preventDefault();
        $('.lang_box .lang').toggle();
    })
    $('.gnb li').hover(
        function() {
            // 마우스를 올렸을 때 header의 배경색을 검정색으로 변경
            $('#header').css('background-color', 'black');
        },
        function() {
            // 마우스를 내렸을 때 header의 배경색을 원래대로 복원
            $('#header').css('background-color', '');
        }
    );
})