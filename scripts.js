$(".mobile-menu").click(function(){
    
    $('#header nav ul').toggleClass('show');
    
});

var navOffset = $('#steps').offset().top;

console.log(navOffset);

$(window).scroll(function(){

        var scrollPos = $(window).scrollTop();
        
    
        if(scrollPos>navOffset){
            $('nav').addClass('dark-background');
            
        } else{
            
             $('nav').removeClass('dark-background');
        }
});                    