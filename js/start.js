$(document).ready(function(){

    $(function(){
        $("body").hide().fadeIn(1000);
    });


    $(".randomFace").hide();

    $("#toStart").hover(function(){
        $(".flash").addClass("activeForFlash");
        $(".utsurundesu").addClass("activeForCamera");
        $(".running, .marlion, .goodFriends, .keithResting, .hydrangea, .blueSky").addClass("active1");
        $(".sunsetInSg, .cheers, .giraffe").addClass("active2");
        $(".karaoke, .noto").addClass("active3");

        $(".defaultSmile").hide();
        
        var random = Math.floor(Math.random()*$(".randomFace").length);
        $(".randomFace").hide().eq(random).show();
        
    });

    $("#toStart").mouseleave(function(){
        $(".flash").removeClass("activeForFlash")
        $(".utsurundesu").removeClass("activeForCamera");
        $(".running, .marlion, .goodFriends, .keithResting, .hydrangea, .blueSky").removeClass("active1");
        $(".sunsetInSg, .cheers, .giraffe").removeClass("active2");
        $(".karaoke, .noto").removeClass("active3");
        $(".defaultSmile").show();
        $(".randomFace").hide();
    });

    $("#toStart").on("click",function() {
        $("#toStart, .utsurundesu").addClass("makeButtonTransparent");
        $(this).parent().siblings("h1").addClass("opacityForh1");
        $(".blueSky").addClass("scale1");
        $(".giraffe, .noto").addClass("scale2");
        $(".hydrangea, .marlion").addClass("scale3");
        $(".cheers, .karaoke").addClass("scale4");
        $(".keithResting, .sunsetInSg").addClass("scale5");
        $(".goodFriends, .running").addClass("scale6");
    });

    $("#toStart").on("click",function() {
        var delay = 2800; 
        setTimeout(function(){ window.location.href= "browsePhoto.html"; }, delay);

    });


});

