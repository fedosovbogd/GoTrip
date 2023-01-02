//carousel//
const owl = $('.owl-carousel');
owl.owlCarousel({

    center:true,
    loop:true,
    margin:20,
    startPosition:1,
    items:1,
    responsive : {
    640 : {
      items: 3,
      startPosition:1
    },
    850 : {
      items: 3,
      startPosition:1
    },
    1200 : {
      items:3,
       margin:30,
        
    },
},

    });

$('.sliderbtn-prev').click(function() {

    owl.trigger('prev.owl.carousel', [300]);
});

$('.sliderbtn-next').click(function() {
    owl.trigger('next.owl.carousel');
});

//nav icon
const navBtn = document.querySelector('.navtogle');
const nav = document.querySelector('.nav')
const menuIcon = document.querySelector('.menu-icon');

    navBtn.onclick = function(){
    nav.classList.toggle('navmobile')
    menuIcon.classList.toggle('menu-icon-active');
}
