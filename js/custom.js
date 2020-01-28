

jQuery(document).ready(function(){
    gsap.to(".hero-icon-light", {duration: 2, y: 200});
    gsap.to(".hero-icon-light-2", {duration: 5, y: 300});
    // gsap.to("#packages-panel", {duration: 2, y:10});
    gsap.to(".hero-icon-mobile", {duration: 5, y:-50});
    gsap.to(".hero-icon-desk", {duration: 5, x:50});
    gsap.to(".hero-icon-flower", {duration: 5, y:-50});
    gsap.to(".hero-icon-price", {duration: 2, y:-30});
    gsap.to(".hero-icon-price-2", {duration: 2, y:-30});

    // Scroll Magic
    let controller = new ScrollMagic.Controller();
    let tween = TweenMax.fromTo("#packages-panel", 0.2, {ease: "power1.out", y:100, opacity:0}, {ease: "power1.out", y:-100, opacity:1});

    let ourScene = new ScrollMagic.Scene({
        triggerElement: "#packages-panel",
        duration: '100%',
    })
    ourScene.setClassToggle("#packages-panel", 'animClass')
    ourScene.addIndicators()
    ourScene.removeIndicators()
    ourScene.setTween(tween)
    ourScene.addTo(controller);

    $(".animation-image").each(function () {
            let animiImg = $(this).find("img");
            // // let animiBox = $(this).find(".features-box-inner");
            // let animiBoxTitle = $(this).find("h2");
            // let animiBoxContent = $(this).find("p");

        let AnimationCls = new TimelineMax();
        AnimationCls
            .fromTo(animiImg, 2, {ease: "power4.out",opacity:.5, scale:.5}, {ease: "power4.out",scale:1, opacity: 1},"-=2.7")
            // .from(animiBox, 1, {autoAlpha: 0, y:100, ease: "power4.easeOut"}, "-=.3")
            // .from(animiBoxTitle, .5, { autoAlpha: 0, y:30, ease: "power4.easeOut"} )
            // .from(animiBoxContent, .5, { autoAlpha: 0, y:30, ease: "power4.easeOut"})
            // .fromTo(this, 1, {ease: "back.out(1.7)", opacity:0, y:-500}, {ease: "back.out(1.7)", opacity:1, y:0} )

        let ourScene2 = new ScrollMagic.Scene({
            triggerElement: this,
            duration: '150%',
        })
        ourScene2.addIndicators()
        ourScene2.removeIndicators()
        ourScene2.setTween(AnimationCls)
        ourScene2.addTo(controller);
    });
});

$("#hero-section").mousemove(function(event){
    var xPos = (event.clientX/$(window).width())-0.5,
        yPos = (event.clientY/$(window).height())-0.5,
        box = $('.hero-mouse-event'),
        mobile = $('.hero-icon-mobile')

    TweenLite.to(box, 0.6, {
        rotationY: 10 * xPos,
        rotationX: 10 * yPos,
        ease: Power1.easeOut,
        transformPerspective: 900,
        transformOrigin: 'center'
    });

    TweenLite.to(mobile, 0.6, {
        ease: Power1.easeOut,
        // rotation:"1.25rad",
        rotationY: 15 * xPos,
        rotationX: 15 * yPos,
        transformPerspective: 900,
        transformOrigin: 'center'
    });

});


$(document).ready(function () {
    var estado = 0,
        vw = $(window).width();


    $("#hamburger").click(function() {
        var delay_time = 0;
        $(this).toggleClass('open');

        if (estado === 0) {
            TweenMax.to($("#bg-menu-mobile"), 1, {
                x:-vw,
                ease: Expo.easeInOut
            });


            TweenMax.to($("#menu-mobile ul"),1,{
                css:{zIndex:200, display:"flex"}
            });

            $("#menu-mobile li").each(function() {
                TweenMax.to($(this), 1.2, {
                    x:-vw,
                    scaleX: 1,
                    delay: delay_time,
                    ease: Expo.easeInOut
                });
                delay_time += .04;
            });
            estado = 1;
        } else {
            estado = 0;
            TweenMax.to($("#bg-menu-mobile"), 1.2, {
                x:0,
                ease: Expo.easeInOut
            });

            TweenMax.to($("#menu-mobile ul"),1,{
                css:{zIndex:0, display:"none"}
            });

            $("#menu-mobile li").each(function() {
                TweenMax.to($(this), 1, {
                    x:0,
                    /*
                    x:vw,
                    scaleX: 2.3,
                    */
                    delay: delay_time,
                    ease: Expo.easeInOut
                });
                delay_time += .02;
            });
        }
    });
    /*
      if (estado === 0) {
        $("#bg-menu-mobile").animate({
          top: 0,
          right: 0
        }, {
          duration: 520,
          easing: "easeInOutStrong"
        });

        $("ul").delay(50).animate({
          top:"50px",
          left:"40px"
        }, { duration:640, easing:"easeInOutStrong" });

        $("li").each(function() {
          TweenMax.to($(this), 0.7, {"left": "40px", opacity: 1, delay: delay_time, ease: Power2.easeInOut});
          delay_time += 25;
        });
        estado = 1;
      } else {
        //
        $("#bg-menu-mobile").delay(300).animate({
          top: 0,
          right: "-100%"
        }, {
          duration: 650,
          easing: "easeInOutStrong"
        });

        $("li").each(function() {
          $(this).delay(delay_time).animate({
            "left": "100%",
            opacity: 0
          }, {
            duration: 720,
            easing: "easeInOutStrong"
          });
          delay_time += 20;
        });
        estado = 0;
      }
      console.log(estado);

    });
    */
});