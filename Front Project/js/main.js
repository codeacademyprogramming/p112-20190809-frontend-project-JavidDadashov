$(function() {

$('.slide').owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    navSpeed: 800,
    autoplay: false,
    transitionStyle: "fade",
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 1
        }
    }

})

$('.slide2').owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    margin: 20, 
    navSpeed: 800,
    autoplay: false,
    transitionStyle: "fade",
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 1
        },
        992: {
            items: 3
        }
    }

})


// acardion

const accordionItems = document.querySelectorAll('.accordion-item a');

function toggleAccordion () {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

accordionItems.forEach(item => item.addEventListener('click', toggleAccordion))

})

