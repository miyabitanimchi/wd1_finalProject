$(document).ready(function(){

    $(function(){
        $("body").hide().fadeIn(1000);
    })

    //test
    // $("#toStart").hover(function(){
    //     $(this).css("background", "purple");
    // }, function(){
    //     $(this).css("background", "red");
    // });

    

    $("#toStart").hover(function(){
        $(".flash").addClass("activeForFlash")
        $(".utsurundesu").addClass("activeForCamera");
        $(".running").addClass("active1");
        $(".sunsetInSg").addClass("active2");
        $(".karaoke").addClass("active3");
        $(".marlion").addClass("active1")
        $(".noto").addClass("active3");
        $(".goodFriends").addClass("active1");
        $(".keithResting").addClass("active1");
        $(".cheers").addClass("active2");
        $(".hydrangea").addClass("active1");
        $(".giraffe").addClass("active2");
        $(".blueSky").addClass("active1");
    }
    // , 
        // function() {
        //     $(".running").unbind("mouseenter mouseleave").css(styleCss);
        // }
       
    );

    $("#toStart").mouseleave(function(){
        $(".flash").removeClass("activeForFlash")
        $(".utsurundesu").removeClass("activeForCamera");
        $(".running").removeClass("active1");
        $(".sunsetInSg").removeClass("active2");
        $(".karaoke").removeClass("active3");
        $(".marlion").removeClass("active1")
        $(".noto").removeClass("active3");
        $(".goodFriends").removeClass("active1");
        $(".keithResting").removeClass("active1");
        $(".cheers").removeClass("active2");
        $(".hydrangea").removeClass("active1");
        $(".giraffe").removeClass("active2");
        $(".blueSky").removeClass("active1");
        
    })

    // $("#toStart").on("click",function(){
    //     $(".blueSky").css("transform", 'scale(10.1)');
    //     $(".blueSky").css("opacity", '0');
    // });

    

    // $("#toStart").hover(function(){
    //     $(".sunsetInSg").css("animation-play-state", "running");
    // }, function() {
        
    //     $(".sunsetInSg").unbind("mouseenter mouseleave").css(styleCss);
    // });

    // $("#toStart").hover(function(){
    //     $(".karaoke").css("animation-play-state", "running");
    // }, function() {
        
    //     $(".karaoke").unbind("mouseenter mouseleave").css(styleCss);
    // });

    // $("#toStart").hover(function(){
    //     $(".marlion").css("animation-play-state", "running");
    // }, function() {
        
    //     $(".marlion").unbind("mouseenter mouseleave").css(styleCss);
    // });

    // $("#toStart").hover(function(){
    //     $(".noto").css("animation-play-state", "running");
    // }, function() {
        
    //     $(".noto").unbind("mouseenter mouseleave").css(styleCss);
    // });

    // $("#toStart").hover(function(){
    //     $(".goodFriends").css("animation-play-state", "running");
    // }, function() {
        
    //     $(".goodFriends").unbind("mouseenter mouseleave").css(styleCss);
    // });

    // $("#toStart").hover(function(){
    //     $(".keithResting").css("animation-play-state", "running");
    // }, function() {
        
    //     $(".keithResting").unbind("mouseenter mouseleave").css(styleCss);
    // });

    // $("#toStart").hover(function(){
    //     $(".cheers").css("animation-play-state", "running");
    // }, function() {
        
    //     $(".cheers").unbind("mouseenter mouseleave").css(styleCss);
    // });

    // $("#toStart").hover(function(){
    //     $(".hydrangea").css("animation-play-state", "running");
    // }, function() {
        
    //     $(".hydrangea").unbind("mouseenter mouseleave").css(styleCss);
    // });
   
    
    // $("#toStart").hover(function(){
    //     $(".giraffe").css("animation-play-state", "running");
    // }, function() {
        
    //     $(".giraffe").unbind("mouseenter mouseleave").css(styleCss);
    // });

    // $("#toStart").hover(function(){
    //     $(".blueSky").css("animation-play-state", "running");
    // }, function() {
        
    //     $(".blueSky").unbind("mouseenter mouseleave").css(styleCss);
    // });

    
});