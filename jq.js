// Selecting and manipulating styles of element in jQuery

jQuery('h1').css('color','red');
$('h1').css('color','blue');
$('h1').css('backgroundColor','pink');
$('h1').css('padding','40px');

// Adding class in jQuery from CSS

$('h1').addClass('title back');
// $('h1').removeClass('title');

$('h1').hasClass('two');

// Manipulating text with jQuery

$('h1').text('Good Bye');
$('button').html('<em>button</em>');

// Manipulating attributes with jQuery

console.log($('a').attr('href'));

$('a').attr('href','https:yahoo.com')

// Adding event listener with jQuery

$('h1').click(function(){
    $('h1').css('color','yellow');
})

$('button').click(function(){
    $('h1').css('color','yellow');
})

$('input').keypress(function(event){
    $('h1').text(event.key);
})

// Timeout function 
$('h1').on('mouseover',function(){
    $('h1').css('color','yellow');
    setTimeout(function(){
        $('h1').css('color','cornflowerblue');
    },300)
})

// Adding and removing elements with jQuery

$('h1').before('<button>new</button>');
$('h1').after('<button>new</button>');
$('h1').prepend('<button>new</button>');
$('h1').append('<button>new</button>');

// element remove
$('button').remove();


// Animation using jQuery
$('button').click(function(){
    $('h1').hide();
    $('h1').show();
    $('h1').toggle();
    $('h1').fadeOut();
    $('h1').fadeIn();
    $('h1').fadeToggle();
    $('h1').slideUp();
    $('h1').slideDown();
    $('h1').slideToggle();
    $('h1').animate({opacity:0.5})
    $('h1').slideUp().slideDown().animate({opacity:0.5});
})