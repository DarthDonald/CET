var main=function(){
    $('.acquaintance').hover(function(){
        
        $('.acquaintance img').stop(true, true).animate({
            opacity: "0",
            marginTop: "-350px"
        }, '400').siblings().animate({
            opacity : "1"
        }, '400');
        
    });
    
    $('.acquaintance').mouseleave(function(){
        $('.acquaintance img').stop(true, true).animate({
            opacity: "1",
            marginTop: "80px"
        }, '400').siblings().animate({
            opacity : "0"
        }, '400');
    });
    
    $('.planning').hover(function(){
        
        $('.planning img').stop(true, true).animate({
            opacity: "0",
            marginTop: "-350px"
        }, '400').siblings().animate({
            opacity : "1"
        }, '400');
        
    });
    
    $('.planning').mouseleave(function(){
        $('.planning img').stop(true, true).animate({
            opacity: "1",
            marginTop: "80px"
        }, '400').siblings().animate({
            opacity : "0"
        }, '400');
    });
    
    $('.learn').hover(function(){
        
        $('.learn img').stop(true, true).animate({
            opacity: "0",
            marginTop: "-350px"
        }, '400').siblings().animate({
            opacity : "1"
        }, '400');
        
    });
    
    $('.learn').mouseleave(function(){
        $('.learn img').stop(true, true).animate({
            opacity: "1",
            marginTop: "80px"
        }, '400').siblings().animate({
            opacity : "0"
        }, '400');
    });
    
    $('.share').hover(function(){
        
        $('.share img').stop(true, true).animate({
            opacity: "0",
            marginTop: "-350px"
        }, '400').siblings().animate({
            opacity : "1"
        }, '400');
        
    });
    
    $('.share').mouseleave(function(){
        $('.share img').stop(true, true).animate({
            opacity: "1",
            marginTop: "80px"
        }, '400').siblings().animate({
            opacity : "0"
        }, '400');
    });
};

$(document).ready(main);