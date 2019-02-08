$(function () {
    
        'use strict';
    
        $(window).on('load', function () {
            setTimeout(function () {
                $(".page_loader").fadeOut("fast");
            }, 100);
            if ($('body .filtr-container').length > 0) {
                // Filterizr initialization
                $(function () {
                    $('.filtr-container').filterizr(
                        {
                            delay: 1
                        }
                    );
                });
                $('.portfolio-navigation li').on('click', function () {
                    $('.portfolio-navigation .filtr').removeClass('active');
                    $(this).addClass('active');
                });
            }
            placementTypedParticles();
        });

    // Header shrink while page scroll
    $(window).scroll(function () {
        if ($(document).scrollTop() > 150) {
            $('.header').addClass('header-shrink');
        }
        else {
            $('.header').removeClass('header-shrink');
        }
    });

    // Page scroll
    $('body').scrollspy({target: ".navbar", offset: 50});
    $("#navigation a").on('click', function(event) {
        $('#navigation').removeClass('in');
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });

    function propagationSkills() {
        $(".skills").addClass("active");
        $(".skills .skill .skill-bar span").each(function() {
            $(this).animate({
                "width": $(this).parent().attr("data-bar") + "%"
            }, 1000);
            $(this).append('<b>' + $(this).parent().attr("data-bar") + '%</b>');
        });
        setTimeout(function() {
            $(".skills .skill .skill-bar span b").animate({"opacity":"1"},1000);
        }, 2000);
    }

    function isSkillsVisible($elementToBeChecked) {
        var TopView = $(window).scrollTop();
        var BotView = TopView + $(window).height();
        var TopElement = $elementToBeChecked.offset().top;
        var BotElement = TopElement + $elementToBeChecked.height();
        return ((BotElement <= BotView) && (TopElement >= TopView));
    }

    $(window).scroll(function () {
        $(".skills").each(function () {
            var isOnView = isSkillsVisible($(this));
            if (isOnView && !$(this).hasClass('active')) {
                propagationSkills();
            }
        });
    });

    // Implement typed.js
    if($('#typed-strings').length > 0){
        typedOne();
    }
    if($('#typed-strings-2').length > 0){
        typedTwo();
    }
    if($('#typed-strings-3').length > 0){
        typedThree();
    }

    function typedOne() {
        var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 100,
            backSpeed: 0,
            backDelay: 1000,
            startDelay: 1000,
            loop: true
        });
    }

    function placementTypedParticles() {

        var practiceHeight;
        if($('#particles-background').length > 0){
            practiceHeight = parseInt($('#particles-background').height(), 10);
        }
        else if($('#particles-dots').length > 0){
            practiceHeight = parseInt($('#particles-dots').height(), 10);
        }

        var headerHeight = parseInt($('.header').height(), 10);
        var practiceInsiderHeight = $('.particles-insider').height();
        var particleTop = (practiceHeight - practiceInsiderHeight) / 2;

        if($(window).width > 992){
            headerHeight = headerHeight + 100;
        } else {
            headerHeight = headerHeight + 20;
        }
        particleTop = (headerHeight / 2) +  particleTop;
        $('.particles-insider').css('top', particleTop);
    }




    /* ---- particles.js config ---- */
    if($('#particles-background').length > 0){
        loadParticlesBackground();
    }
    if($('#particles-dots').length > 0){
        loadParticlesDots();
    }

    function loadParticlesBackground() {
        particlesJS("particles-background", {
            "particles": {
                "number": {
                    "value": 100,
                    "density": {
                        "enable": true,
                        "value_area":1000
                    }
                },
                "color": {
                    "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
                },

                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#fff"
                    },
                    "polygon": {
                        "nb_sides": 2
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.6,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 120,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }

    function loadParticlesDots() {
        particlesJS(
            "particles-dots", {
                "particles": {
                    "number": {
                        "value": 180
                    },
                    "color": {
                        "value": "#eee"
                    },
                    "shape": {
                        "type": "circle"
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": true,
                        "anim": {
                            "enable": false
                        }
                    },
                    "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                            "enable": false,
                        }
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "enable": true,
                        "speed": 4,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": false
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "push": {
                            "particles_nb": 10
                        }
                    }
                },
                "retina_detect": true
            });
    }
});




