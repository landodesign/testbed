$( document ).ready(function() {
    
    $('.heading').css('display', 'none');
    $('.icons').css('display', 'none');
    $('.read-more').css('display', 'none');
    
    $('.pulse-y').click(function() {
      $('.info-box').fadeToggle(1000, 'swing').toggleClass('expand');
        
    if ($('.info-box').hasClass('expand')) {
        $('.heading').fadeIn(1600);
        $('.icons').fadeIn(2400);
        $('.read-more').fadeIn(3000);
    } else {
        $('.heading').css('display', 'none');
        $('.icons').css('display', 'none');
        $('.read-more').css('display', 'none');
    }
        
    });
    
    var fooReveal = {
        origin      : 'bottom',
        distance    : '20px',
        duration    : 1500,
        delay       : 0,
        opacity     : 0,
        scale       : 1,
        easing      : 'cubic-bezier(0.6, 0.2, 0.1, 1)'
    };

    window.sr = ScrollReveal();
    sr.reveal('.jumbotron', fooReveal);
    sr.reveal('.box-shadow, .sq', {
      origin: 'bottom',
      duration : 1000,
      distance : '50px',
      delay    : 200,
      easing   : 'ease-in-out',
      scale    : 1
    }, 100);
    sr.reveal('.pin', {
      origin: 'top',
      duration : 1000,
      distance : '80px',
      delay    : 200,
      easing   : 'ease-in-out',
      scale    : 1
    }, 300);
    sr.reveal('.pulse-l', {
      origin: 'top',
      duration : 1000,
      distance : '80px',
      delay    : 200,
      easing   : 'ease-in-out',
      scale    : 1
    }, 300);
    
});

