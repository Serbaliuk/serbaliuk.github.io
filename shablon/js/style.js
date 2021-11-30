 $('.first-item').slick({
      infinite: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>'
    });
 $('.second-item').slick({
      infinite: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button class="slide-arrow prev-arrow"></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>'
    });


$(document).ready(function() {
  // hide all div with class .content by default
  $('.row .content').hide(); 

  // when the class .header is clicked,
  // toggle div with class .content
  $('.row .heading').click(function() { 
    $(this).parent().find('.content').slideToggle(500);
  });
});

let burger = document.getElementById('burger')
burger.addEventListener('click', function(){
  document.getElementById('menu').classList.toggle('hide-menu')
})