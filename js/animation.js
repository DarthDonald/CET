var main=function(){
    $('.acquaintance').hover(function(){
        
        $('.acquaintance img').stop(true, true).animate({
            opacity: "0",
            marginTop: "-350px"
        }, 1500).siblings().animate({
            opacity : "1"
        }, 1500);
        
    });
    
    $('.planning').hover(function(){
        
        $('.planning img').stop(true, true).animate({
            opacity: "0",
            marginTop: "-350px"
        }, 1500).siblings().animate({
            opacity : "1"
        }, 1500);
        
    });
    
    $('.learn').hover(function(){
        
        $('.learn img').stop(true, true).animate({
            opacity: "0",
            marginTop: "-350px"
        }, 1500).siblings().animate({
            opacity : "1"
        }, 1500);
        
    });
    
    $('.share').hover(function(){
        
        $('.share img').stop(true, true).animate({
            opacity: "0",
            marginTop: "-350px"
        }, 1500).siblings().animate({
            opacity : "1"
        }, 1500);
        
    });
    
    var aui = 0, oai = 0, zi = 0, ci = 0,
        screenWidth = screen.width;
    
    if(screenWidth>991){
        $('.drop').css("marginLeft", "244px");
    } else {
        $('.drop').css("marginLeft", "325px");
    }
    
    $('.aboutUsI .col-md-2').click(function(){

        aui = (aui+1)%2;
        
        if( aui === 0 ){
            $('.aboutUsMenu').stop(true, true).fadeOut(500);
            $('.aboutUsI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        } else{
            $('.aboutUsMenu').stop(true, true).fadeIn(500);
            $('.aboutUsI .col-md-2 .fa').removeClass("fa-angle-right").addClass("fa-angle-left");
        }
        
        $('.ourAchievementsMenu, .znoMenu, .contactsMenu').stop(true, true).fadeOut(300);
        
        $('.ourAchievementsI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        
        $('.znoI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        
        $('.contactsI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        
        oai = 0; zi = 0; ci = 0;
        
    });
    
    $('.ourAchievementsI .col-md-2').click(function(){

        oai = (oai+1)%2;
        if( oai === 0 ){
            $('.ourAchievementsMenu').stop(true, true).fadeOut(500);
            $('.ourAchievementsI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        } else{
            $('.ourAchievementsMenu').stop(true, true).fadeIn(500);
            $('.ourAchievementsI .col-md-2 .fa').removeClass("fa-angle-right").addClass("fa-angle-left");
        }
        
        $('.aboutUsMenu, .znoMenu, .contactsMenu').fadeOut(300);
        
        $('.contactsI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        
        $('.znoI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        
        $('.aboutUsI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        
        aui = 0; zi = 0; ci = 0;
        
    });
    
    $('.znoI .col-md-2').click(function(){

        zi = (1+zi)%2;
        if( zi === 0 ){
            $('.znoI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
            $('.znoMenu').stop(true, true).fadeOut(500);
        } else {
            $('.znoI .col-md-2 .fa').removeClass("fa-angle-right").addClass("fa-angle-left");
            $('.znoMenu').stop(true, true).fadeIn(500);
        }
        
        $('.ourAchievementsMenu, .aboutMenu, .contactsMenu').stop(true, true).fadeOut(500);
        
        $('.ourAchievementsI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        
        $('.contactsI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        
        $('.aboutUsI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        
        aui = 0; oai = 0; ci = 0;
        
    });
    
    $('.contactsI .col-md-2').click(function(){
        
        ci = (ci+1)%2;
        if( ci === 0 ){
            $('.contactsMenu').stop(true, true).fadeOut(500);
            $('.contactsI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        } else {
            $('.contactsMenu').stop(true, true).fadeIn(500);
            $('.contactsI .col-md-2 .fa').removeClass("fa-angle-right").addClass("fa-angle-left");
        }
        
        $('.ourAchievementsMenu, .znoMenu, .aboutUsMenu').stop(true, true).fadeOut(500);
        
        $('.ourAchievementsI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        
        $('.znoI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        
        $('.aboutUsI .col-md-2 .fa').removeClass("fa-angle-left").addClass("fa-angle-right");
        
        aui = 0; zi = 0; oai = 0;
        
    });
    
};

$(document).ready(main);