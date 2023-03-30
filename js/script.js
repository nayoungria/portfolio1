let n = 0;
let state = 1;
$(window).on('wheel', function(event) {
    if ( event.wheelDelta < 0 && state == 1 ) {
        state = 0;        
        n++;
        if ( n > 3 ) n = 3;
        let next =  $('.sect').eq(n);
        $('html, body').stop().animate({ scrollTop: next.position().top }, 500, function() {
            state = 1;
        });
        // console.log(n)
    }
    else if ( event.wheelDelta > 0 && state == 1) {
        state = 0;
        n--;
        if ( n < 0 ) n = 0;
        let prev =  $('.sect').eq(n);
        $('html, body').animate({ scrollTop: prev.position().top }, 500, function() {
            state = 1;
        });
        // console.log(n)
    }
})
$(".left_btn a").on('click', function(e) {
    e.preventDefault();
    n = $(this).index();
    let pos = $('.sect').eq(n)
    $('html, body').animate({ scrollTop: pos.position().top }, 500)
    // console.log(n)
})
