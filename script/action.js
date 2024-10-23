$('#header').load('include/header.html', function(){
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

$('footer').load('include/footer.html', function(){
    $('.lang_box a').click(function(event){
        event.preventDefault();
        $('.lang_box .lang').toggle();
    })
})



// sub menu
$('#sub_section .menu li').click(function() {
    $(this).addClass('on').siblings().removeClass('on')
})

gsap.registerPlugin(ScrollTrigger);

        let list = gsap.utils.toArray('#story_section7 .list li')
        let listA = gsap.utils.toArray('#story_section7 .list .a')
        let listB = gsap.utils.toArray('#story_section7 .list .b')
        let listC = gsap.utils.toArray('#story_section7 .list .c')

        let scrollTween = gsap.to(list, {
            xPercent : -100 * (list.length -1),
            ease: 'none',
            scrollTrigger:{
                trigger:'#story_section7',
                pin : true,
                scrub:1,
                start:'center center',
                end:'200%',
                markers:true
            }
        });

        gsap.to(listA, {
            y:50,
            rotation:10,
            scrollTrigger:{
                trigger:'#story_section7',
                scrub:2,
                end:'200%'
            }
        })
        gsap.to(listB, {
            y:-50,
            rotation:20,
            scrollTrigger:{
                trigger:'#story_section7',
                scrub:2,
                end:'200%'
            }
        })
        gsap.to(listC, {
            y:-50,
            x:20,
            rotation:-10,
            scrollTrigger:{
                trigger:'#story_section7',
                scrub:2,
                end:'200%'
            }
        })