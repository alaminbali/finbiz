
(function ($) {
    'use strict';
  
    var imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
        },
        methods: function (e) {
            imJs.swiperActivation();
            imJs.vedioActivation();
            imJs.counterUp();
            imJs.salActive();
            imJs.progressAvtivation();
            imJs.stickyHeader();
            imJs.backToTopInit();
        },
        swiperActivation: function (){
          $(document).ready(function() {
            var swiper = new Swiper(".mySwiper", {
                loop: true,
                loopedSlides: 50,
                autoHeight: true,
                shortSwipes: false,
                longSwipes: false,
                // effect: 'fade',
                speed:3000,
                autoplay: {
                    delay: 3000,
                },
                pagination: {
                  el: ".swiper-pagination",
                  dynamicBullets: true,
                },
              });
          });
          $(document).ready(function() {
            var swiper = new Swiper(".mySwipers", {
                loop: true,
                loopedSlides: 50,
                autoHeight: true,
                shortSwipes: false,
                longSwipes: false,
                effect: 'fade',
                speed: 500,
                autoplay: {
                    delay: 1500,
                },
                pagination: {
                  el: ".swiper-pagination",
                  type: "fraction",
                },
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
              });
          });
          $(document).ready(function() {
            var swiper = new Swiper(".mySwipertestimonial", {
              loop: true,
              loopedSlides: 50,
              autoHeight: true,
              shortSwipes: false,
              longSwipes: false,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            });
          });
        },
        vedioActivation: function (e) {
          $('#play-video, .play-video').on('click', function (e) {
              e.preventDefault();
              $('#video-overlay, .video-overlay').addClass('open');
              $("#video-overlay, .video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/6stlCkUDG_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
          });

          $('.video-overlay, .video-overlay-close').on('click', function (e) {
              e.preventDefault();
              close_video();
          });

          $(document).keyup(function (e) {
              if (e.keyCode === 27) {
                  close_video();
              }
          });

          function close_video() {
              $('.video-overlay.open').removeClass('open').find('iframe').remove();
          };
        },
        counterUp: function (e) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
              });
              $('.counter').addClass('animated fadeInDownBig');
              $('h3').addClass('animated fadeIn');
        },
        salActive: function () {
          sal({
              threshold: 0.1,
              once: true,
          });
        },
        progressAvtivation: function(){
          $(window).scroll(function () {
            if ($(this).scrollTop() > 250) {
              var bars = document.querySelectorAll('.meter > span');
              console.clear();
              setInterval(function(){
                bars.forEach(function(bar){
                  var getWidth = parseFloat(bar.dataset.progress);
                  for(var i = 0; i < getWidth; i++) {
                    bar.style.width = i + '%';
                  }
                });
              }, 100);
            }
          })
        },
        stickyHeader: function (e) {
          $(window).scroll(function () {
              if ($(this).scrollTop() > 150) {
                  $('.header--sticky').addClass('sticky')
              } else {
                  $('.header--sticky').removeClass('sticky')
              }
          })
        },
        backToTopInit: function () {
          $(document).ready(function(){
          "use strict";
      
          var progressPath = document.querySelector('.progress-wrap path');
          var pathLength = progressPath.getTotalLength();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
          progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
          progressPath.style.strokeDashoffset = pathLength;
          progressPath.getBoundingClientRect();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
          var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
          }
          updateProgress();
          $(window).scroll(updateProgress);	
          var offset = 50;
          var duration = 550;
          jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
              jQuery('.progress-wrap').addClass('active-progress');
            } else {
              jQuery('.progress-wrap').removeClass('active-progress');
            }
          });				
          jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
          })
          
          
        });
  
        },
    }
  
    imJs.m();
  })(jQuery, window)
  