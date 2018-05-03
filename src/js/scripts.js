$( document ).ready(function() {
    
    var fooReveal = {
        origin      : 'bottom',
        distance    : '20px',
        duration    : 1500,
        delay       : 0,
        // rotate      : { x : 0, y : 0, z : 0 },
        opacity     : 0,
        scale       : 1,
        easing      : 'cubic-bezier(0.6, 0.2, 0.1, 1)'
        // container   : null,
        // mobile      : true,
        //  reset       : false,
        // useDelay    : 'always',
        // viewFactor  : 0.2,
        // viewOffset  : { top : 0, right : 0, bottom : 0, left : 0 },
        // afterReveal : function( domEl ){},
        // afterReset  : function( domEl ){}
    };

    window.sr = ScrollReveal();
    sr.reveal('.jumbotron', fooReveal);
    
    $('.heading').css('display', 'none');
    $('.icons').css('display', 'none');
    $('.read-more').css('display', 'none');
    
    $('.pulse').click(function() {
      $('.popup').fadeToggle(1000, 'swing').toggleClass('expand');
        
    if ($('.popup').hasClass('expand')) {
        $('.heading').fadeIn(1600);
        $('.icons').fadeIn(2400);
        $('.read-more').fadeIn(3000);
    } else {
        $('.heading').css('display', 'none');
        $('.icons').css('display', 'none');
        $('.read-more').css('display', 'none');
    }
        
    });
    
});

