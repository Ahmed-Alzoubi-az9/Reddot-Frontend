
/*****************Navbar_Button******************/
function handleClick(button) {
  // Remove 'btn-clicked' class from all buttons
  document.querySelectorAll('form .btn').forEach(btn => btn.classList.remove('btn-clicked'));

  // Add 'btn-clicked' class to the clicked button
  button.classList.add('btn-clicked');
}


/*****************Navbar_Scrolled******************/
window.addEventListener('DOMContentLoaded', (event) => {
  window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Change 50 to whatever scroll threshold you want
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
});


/*****************Aos_Animation******************/
AOS.init({
  duration: 1000,
  once: true,
});


/*****************Question_Arrow******************/
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-list-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".question");
    const answer = item.querySelector(".collapse");
    const arrowIcon = item.querySelector(".arrow-icon");

    question.addEventListener("click", function () {
      // Handle arrow rotation on click
      if (answer.classList.contains("show")) {
        arrowIcon.classList.remove("rotate-up");
      } else {
        arrowIcon.classList.add("rotate-up");
      }
    });

    // Listen for collapse events to handle the arrow changes more precisely
    answer.addEventListener('shown.bs.collapse', function () {
      arrowIcon.classList.add("rotate-up");
    });

    answer.addEventListener('hidden.bs.collapse', function () {
      arrowIcon.classList.remove("rotate-up");
    });
  });
});



/*****************Testi...&News_Carousal******************/
$(document).ready(function () {
  // Initialize the first carousel
  $('.owl-carousel-first').owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    loop: true,
    navText: [
      '<div class="custom-nav-prev"><i class="fa fa-chevron-left"></i></div>',
      '<div class="custom-nav-next"><i class="fa fa-chevron-right"></i></div>'
    ]
  });

  // Append navigation buttons to the custom container
  $('.owl-nav-container').append($('.owl-nav'));

  // Initialize the second carousel with responsive settings
  $('.owl-carousel-second').owlCarousel({
    loop: true,
    margin: 25,
    nav: false,
    dots: true,
    dotsData: true, // Use custom dots independent of items
    dotsContainer: '.custom-dots-container', // Custom container for dots
    responsive: {
      0: {
        items: 1 // For extra small screens (xs)
      },
      576: {
        items: 1 // For small screens (sm)
      },
      768: {
        items: 1 // For medium screens (md)
      },
      992: {
        items: 3 // For large screens (lg) and above
      }
    },
    onInitialized: function (event) {
      // Debugging: Check if dots are initialized correctly
      console.log('Dots initialized:', $(event.target).find('.owl-dot').length);
    }
  });

});



/*****************Services_Carousal******************/
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 4, // Default items
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 15,
    autoplayHoverPause: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 1 // Show one item for screens 0px and up
      },
      576: {
        items: 1 // Show one item for screens 576px and up
      },
      768: {
        items: 2 // Show two items for screens 768px and up
      },
      992: {
        items: 3 // Show three items for screens 992px and up
      },
      1200: {
        items: 4 // Show four items for screens 1200px and up
      }
    }
  });
});


/*****************Brand_Carousal******************/
document.addEventListener('DOMContentLoaded', function () {
  var carouselElement = document.querySelector('#brand-carousel');

  // Initialize the carousel
  var carousel = new bootstrap.Carousel(carouselElement, {
    interval: 2000, // 10 seconds for each slide
    ride: 'carousel' // Start the carousel automatically
  });

  // Modify the transition speed via CSS for smooth ticker effect
  const tickerItems = document.querySelectorAll('.carousel-item');
  tickerItems.forEach(item => {
    item.style.transition = 'transform 10s linear'; // Adjust the speed of sliding
  });

  // Optionally, listen to slide event to add custom behavior
  carouselElement.addEventListener('slide.bs.carousel', function () {
    // Custom behavior on slide change, if needed
  });
});



/*****************Password******************/
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
  // Toggle the type attribute of the password field
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);

  // Toggle the icon class between fa-eye and fa-eye-slash
  this.classList.toggle('fa-eye');
  this.classList.toggle('fa-eye-slash');
});


/*****************FAQ_Question******************/

document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    item.addEventListener('click', function() {
      const icon = this.querySelector('.icon-toggle');
      const answer = this.querySelector('.faq-answer');

      // Toggle icon and answer visibility
      if (icon.classList.contains('fa-plus')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
        answer.classList.remove('d-none');
      } else {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
        answer.classList.add('d-none');
      }
    });
  });
});