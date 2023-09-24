// (function (document.querySelector) {
//     "use strict";

//     // Dropdown on mouse hover
//     document.querySelector(document).ready(function () {
//         function toggleNavbarMethod() {
//             if (document.querySelector(window).width() > 992) {
//                 document.querySelector('.navbar .dropdown').on('mouseover', function () {
//                     document.querySelector('.dropdown-toggle', this).trigger('click');
//                 }).on('mouseout', function () {
//                     document.querySelector('.dropdown-toggle', this).trigger('click').blur();
//                 });
//             } else {
//                 document.querySelector('.navbar .dropdown').off('mouseover').off('mouseout');
//             }
//         }
//         toggleNavbarMethod();
//         document.querySelector(window).resize(toggleNavbarMethod);
//     });


//     // Back to top button
//     document.querySelector(window).scroll(function () {
//         if (document.querySelector(this).scrollTop() > 100) {
//             document.querySelector('.back-to-top').fadeIn('slow');
//         } else {
//             document.querySelector('.back-to-top').fadeOut('slow');
//         }
//     });
//     document.querySelector('.back-to-top').click(function () {
//         document.querySelector('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
//         return false;
//     });


//     // Date and time picker
//     document.querySelector('.date').datetimepicker({
//         format: 'L'
//     });
//     document.querySelector('.time').datetimepicker({
//         format: 'LT'
//     });


//     // Testimonials carousel
//     document.querySelector(".testimonial-carousel").owlCarousel({
//         autoplay: true,
//         smartSpeed: 1500,
//         margin: 30,
//         dots: true,
//         loop: true,
//         center: true,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             576: {
//                 items: 1
//             },
//             768: {
//                 items: 2
//             },
//             992: {
//                 items: 3
//             }
//         }
//     });

// })(document.querySelector);