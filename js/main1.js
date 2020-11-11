//loader
$(window).load(function() {
    $("#loading").fadeOut(1000);
    $("body").css("overflow-y", "visible");
    $(".titl").slideDown(1000);
    $(".parg").slideDown(1000);
});
$('a[href*=\\#]').on('click', function(event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
});

jQuery(document).ready(function() {

    $(".titl").hide();
    $(".parg").hide();
    $("#men2").css("opacity", "0");
    $("#tobeshownnn").hide();
    $("#men2").css("max-height", "0px");
    $("#tobeshown2").hide();
    if (window.location.href.indexOf("signup") > -1) {
        $("#tobehidden").css("animation", "goLeft 1s ease-in-out forwards");
        $("#tobeshown").css("animation", "goRight 1s ease-in forwards");
        $("#tobeshownnn2").hide();
        $("#tobeshownnn").show();
        $("#tobeshown").fadeOut(500);
        $("#tobeshown2").delay(500).fadeIn(500);
        if ($(window).width() >= 900) {
            $("#tobeshown2").delay(500).css("animation", "goRight 0.5s ease-out forwards");
        } else {

            $("#tobeshown2").css("animation", "goRight 0s reverse forwards");
        }
    } else {

    }

    $("#logg").click(function() {
        $("#tobehidden").css("animation", "goLeft 1s ease-in-out forwards");
        $("#tobeshown").css("animation", "goRight 1s ease-in forwards");
        $("#tobeshownnn2").fadeOut(500);
        $("#tobeshownnn").delay(500).fadeIn(500);
        $("#tobeshown").fadeOut(500);
        $("#tobeshown2").delay(500).fadeIn(500);
        if ($(window).width() >= 900) {
            $("#tobeshown2").delay(500).css("animation", "goRight 0.5s ease-out forwards");
        } else {

            $("#tobeshown2").css("animation", "goRight 0s reverse forwards");
        }
    })
    $("#signn").click(function() {
        $("#tobehidden").css("animation", "goLeft 1s ease-in-out forwards");
        $("#tobeshown").css("animation", "goRight 1s ease-in forwards");
        $("#tobeshownnn2").fadeOut(500);
        $("#tobeshownnn").delay(500).fadeIn(500);
        $("#tobeshown").fadeOut(500);
        $("#tobeshown2").delay(500).fadeIn(500);
        if ($(window).width() >= 900) {
            $("#tobeshown2").delay(500).css("animation", "goRight 0.5s ease-out forwards");
        } else {

            $("#tobeshown2").css("animation", "goRight 0s reverse forwards");
        }
    })
    $("#signnn").click(function() {
        $("#tobehidden").css("animation", "goLeft 1s ease-in-out forwards");
        $("#tobeshown").css("animation", "goRight 1s ease-in forwards");
        $("#tobeshownnn2").fadeOut(500);
        $("#tobeshownnn").delay(500).fadeIn(500);
        $("#tobeshown").fadeOut(500);
        $("#tobeshown2").delay(500).fadeIn(500);
        if ($(window).width() >= 900) {
            $("#tobeshown2").delay(500).css("animation", "goRight 0.5s ease-out forwards");
        } else {

            $("#tobeshown2").css("animation", "goRight 0s reverse forwards");
        }
    })
    $("#loggg").click(function() {
        $("#tobehidden").css("animation", "goLeft2 1s  ease-in-out forwards");
        $("#tobeshown2").css("animation", "goRight2 0.5s  ease-in forwards");
        $("#tobeshownnn").fadeOut(500);
        $("#tobeshownnn2").delay(500).fadeIn(500);
        $("#tobeshown2").fadeOut(500);
        $("#tobeshown").delay(500).fadeIn(500);
        $("#tobeshown").css("animation", "goRight2  0.5s ease-out forwards");

    })
    $("#logggg").click(function() {
        $("#tobehidden").css("animation", "goLeft2 1s  ease-in-out forwards");
        $("#tobeshown2").css("animation", "goRight2 0.5s  ease-in forwards");
        $("#tobeshownnn").fadeOut(500);
        $("#tobeshownnn2").delay(500).fadeIn(500);
        $("#tobeshown2").fadeOut(500);
        $("#tobeshown").delay(500).fadeIn(500);
        $("#tobeshown").css("animation", "goRight2  0.5s ease-out forwards");

    })
    $(this).scrollTop(0, 0);
    var mouseX = 0,
        mouseY = 0;
    var xp = 0,
        yp = 0;

    $(document).mousemove(function(e) {
        mouseX = e.pageX - 80;
        mouseY = e.pageY - 80;
    });
    timeFunction();

    setInterval(function() {
        xp += ((mouseX - xp) / 6);
        yp += ((mouseY - yp) / 6);
        $("#circle").css({ left: xp + 'px', top: yp + 'px' });
    }, 20);
    setInterval(function() {
        if ($(window).width() < 900) {
            $("#tobehidden").hide();
            $("#tobeshown").css("width", "100%");
            $("#tobeshown2").css("width", "100%");
            $("#tobeshown2").css("animation", "goRight 0s reverse forwards");
            $(".foot").show();
            $("#tobeshownn").show();
        } else {
            $("#tobehidden").show();
            $("#tobeshown2").css("animation", "goRight 0s  forwards");
            $("#tobeshown").css("width", "60%");
            $("#tobeshown2").css("width", "60%");
            $(".foot").hide();
            $("#tobeshownn").hide();
        }
    }, 20);
});
$("body").css("overflow", "hidden");

function timeFunction() {
    setTimeout(function() { $("body").css("overflow-y", "visible"); }, 7100);
}
$(window).delay(6000).scrollTop(0, -100);
$(window).scroll(function() {
    var hT = $('#contests').offset().top,
        hH = $('#contests').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH - 1200)) {
        $("#circle").fadeOut(1000);
    } else {
        $("#circle").fadeIn(1000);
    }
});
$(window).scroll(function() {
    var hT = $('#contests').offset().top,
        hH = $('#contests').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH - 1200)) {
        $("#wintercup").css("animation", "slidedown2 3s ease-in-out")
    } else {
        $("#wintercup").css("animation", "slideUp 0.5s ease-out")
    }
});
$(window).scroll(function() {
    var hT = $('#wintercup').offset().top,
        hH = $('#wintercup').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH - 1200)) {
        $("#shesolves").css("animation", "slidedown2 3s ease-in-out ")
    } else {
        $("#shesolves").css("animation", "slideUp 0.5s ease-out")
    }
});

$(window).scroll(function() {
    var hT = $('#det').offset().top,
        hH = $('#det').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS <= 0) {
        $("#men2").css("animation", "slideUp 1s forwards ");
        $("#men1").css("animation", "slideDown 1s forwards ");
        $("#men2").css("z-index", "1 ");

        $("#men1").css("z-index", "10 ");
    } else {

        $("#men1").css("animation", "slideUp 1s forwards ");
        $("#men2").css("z-index", "10 ");
        $("#men2").css("animation", "slidedown 1s forwards");
        $("#men1").css("z-index", "1 ");
    }
});
$(window).scroll(function() {
    var hT = $('.map').offset().top,
        hH = $('.map').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH - 300)) {
        $("#map").css("animation", "slidedown2 2s ease-out ")
    } else {
        $("#map").css("animation", "slideUp 1s ease-out ")
    }
});
$(window).scroll(function() {
    var hT = $('#drop').offset().top,
        hH = $('#drop').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH - 600)) {
        $(".tropdown").slideDown(2000);
    } else {
        $(".tropdown").slideUp(0);
    }
});

//appear on scrolling
$(document).ready(function() {
    $('.parag').css('opacity', '0');
    /* Every time the window is scrolled ... */
    $(window).scroll(function() {

        /* Check the location of each desired element */
        $('.parag').each(function(i) {

            var top_of_object = $(this).offset().top + 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > top_of_object) {

                $(this).animate({ opacity: "1", transform: "translateX(-50px)", transition: "transform 0.5s" }, 1000);
            }

        });

    });

});

//Smooth scrolling
$(document).ready(function() {
    // Add smooth scrolling to all links
    $(".linker").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior

            var patt = new RegExp(/^#/);
            var fileName = location.href.split("/").slice(-1);
            if (fileName == "" || patt.test(fileName)) {
                event.preventDefault();
            }

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        }
    });
});

//which about is active
$(document).ready(function() {

    function aboutMenu(element) {
        if (element == "acm") {

            $("#aboutAcmInsatButton").removeClass();
            $("#awardsButton").removeClass();
            $(document.getElementById("aboutAcmButton").parentElement).css("margin-top", "-12px");
            $("#aboutAcmButton").removeClass().addClass("active");

            $(document.getElementById("aboutAcmInsatButton").parentElement).css("margin-top", "0px");
            $("#aboutAcmInsat").css("display", "none");

            $(document.getElementById("awardsButton").parentElement).css("margin-top", "0px");
            $("#awards").css("display", "none");
            $("#aboutAcm").fadeIn();
            $("#aboutAcm").css("display", "flex");
        } else if (element == "acmInsat") {
            $("#aboutAcmButton").removeClass();
            $("#awardsButton").removeClass();
            $(document.getElementById("aboutAcmInsatButton").parentElement).css("margin-top", "-12px");
            $("#aboutAcmInsatButton").removeClass().addClass("active");
            $(document.getElementById("aboutAcmButton").parentElement).css("margin-top", "0px");
            $("#aboutAcm").css("display", "none");
            console.log($(document.getElementById("awards").parentElement).marginTop);
            $(document.getElementById("awardsButton").parentElement).css("margin-top", "0px");
            console.log($(document.getElementById("awards").parentElement).marginTop);
            $("#awards").css("display", "none");
            $("#aboutAcmInsat").fadeIn();
            $("#aboutAcmInsat").css("display", "flex");
        } else if (element = "awards") {
            $("#aboutAcmInsatButton").removeClass();
            $("#aboutAcmButton").removeClass();
            $(document.getElementById("awardsButton").parentElement).css("margin-top", "-12px");
            $("#awardsButton").removeClass().addClass("active");
            $(document.getElementById("aboutAcmInsatButton").parentElement).css("margin-top", "0px");
            $("#aboutAcmInsat").css("display", "none");
            $(document.getElementById("aboutAcmButton").parentElement).css("margin-top", "0px");
            $("#aboutAcm").css("display", "none");
            $("#awards").fadeIn();
            $("#awards").css("display", "flex");
        }
    }
    $('#aboutAcmButton').click(function() {
        aboutMenu('acm');
    });

    $('#aboutAcmInsatButton').click(function() {
        aboutMenu('acmInsat');
    });
    $('#awardsButton').click(function() {
        aboutMenu('awards');
    });

});

//Selected award
$(document).ready(function() {
    function moveToSelectedAward(element) {

        if (element == "nextAward") {
            if (($(".selectedAward").next()).length == 0) {
                var selected = $(".selectedAward").prev().prev();


            } else {

                var selected = $(".selectedAward").next();

            }
        } else if (element == "prevAward") {
            if (($(".selectedAward").prev()).length == 0) {
                var selected = $(".selectedAward").next().next();

            } else {
                var selected = $(".selectedAward").prev();
            }
        }
        if (($(selected).next()).length == 0) {
            var next = $(selected).prev().prev();
            var prev = $(selected).prev();
        } else if (($(selected).prev()).length == 0) {
            var next = $(selected).next();
            var prev = $(selected).next().next();
        } else {

            var next = $(selected).next();
            var prev = $(selected).prev();
        }

        $(selected).removeClass().addClass("row h-100 selectedAward");
        $(selected).fadeIn();
        $(selected).css("display", "flex");
        $(prev).removeClass().addClass("row h-100 prevAward");
        $(prev).css("display", "none");
        $(next).removeClass().addClass("row h-100 nextAward");
        $(next).css("display", "none");
    }

    var code = setInterval(function() {
        moveToSelectedAward("nextAward");
        $('#prevButton').click(function() { clearInterval(code); });
        $('#nextButton').click(function() { clearInterval(code); })
    }, 4000, code);

    $('#prevButton').click(function() {
        moveToSelectedAward('prevAward');
    });

    $('#nextButton').click(function() {
        moveToSelectedAward('nextAward');
    });
});

//little of description
$(document).ready(function() {
    var posts = document.getElementsByClassName("post-description");
    for (i = 0; i < (posts.length); i++) {
        if (posts[i].innerHTML.length > 120) {
            posts[i].innerHTML = posts[i].innerHTML.substring(0, 120);
            posts[i].innerHTML = posts[i].innerHTML.substr(0, Math.min(posts[i].innerHTML.length, posts[i].innerHTML.lastIndexOf(" "))) + " ...";
        }
    }
});

//team
$(document).ready(function() {
    function moveToSelected(element) {

        if (element == "next") {
            var selected = $(".selected").next();
        } else if (element == "prev") {
            var selected = $(".selected").prev();
        } else {
            var selected = element;
        }

        var next = $(selected).next();
        var prev = $(selected).prev();
        var prevSecond = $(prev).prev();
        var nextSecond = $(next).next();

        $(selected).removeClass().addClass("selected");

        $(prev).removeClass().addClass("prev");
        $(next).removeClass().addClass("next");

        $(nextSecond).removeClass().addClass("nextRightSecond");
        $(prevSecond).removeClass().addClass("prevLeftSecond");

        $(nextSecond).next().removeClass().addClass('hideRight');
        $(nextSecond).next().next().removeClass().addClass('nexthideRight');
        $(prevSecond).prev().removeClass().addClass('hideLeft');

    }

    // Eventos teclado
    $(document).keydown(function(e) {
        switch (e.which) {
            case 37: // left
                moveToSelected('prev');
                break;

            case 39: // right
                moveToSelected('next');
                break;

            default:
                return;
        }
        e.preventDefault();
    });


    $('#prev').click(function() {
        moveToSelected('prev');
    });

    $('#next').click(function() {
        moveToSelected('next');
    });
});