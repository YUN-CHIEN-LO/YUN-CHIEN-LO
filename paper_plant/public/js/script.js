var sm_window = 770;
var md_window = 1080;
// var md_window = 980;

function resize(viewW) {
    if (viewW > md_window) {
        $('#secHome').addClass('home-bg')
        $('#secHome').removeClass('home-sm')
        $('.aboutText').css("transform", "translateX(-10%)")
        $('#secAbout').addClass('about-bg')
        $('#secAbout').removeClass('about-sm')
        $('#aboutinfo').replaceWith('<h6 id="aboutinfo">藝術家Wuba沉浸剪紙藝術10年<br>擅長以蕨類植物作為創作題材<br>讓不易照顧的蕨類植物以紙質的方式重現生活中<br>也讓逐漸式微的剪紙工藝得以延續下去</h6>')
        $('#secAbout-1').addClass('about-1-bg')
        $('#secAbout-1').removeClass('about-1-sm')
        $('#secPaper').addClass('paper-bg')
        $('#secPaper').removeClass('paper-sm')
        $('#secPlant').addClass('plant-bg')
        $('#secPlant').removeClass('plant-sm')
        $('.morePlant').addClass('morePlant-bg')
        $('.morePlant').removeClass('morePlant-sm')
    } else {
        $('#secHome').addClass('home-sm')
        $('#secHome').removeClass('home-bg')
        $('.aboutText').css("transform", "translateX(0%)")
        $('#secAbout').addClass('about-sm')
        $('#secAbout').removeClass('about-bg')
        $('#aboutinfo').replaceWith('<h6 id="aboutinfo">藝術家Wuba沉浸剪紙藝術10年，擅長以蕨類植物作為創作題材，讓不易照顧的蕨類植物以紙質的方式重現生活中，也讓逐漸式微的剪紙工藝得以延續下去。</h6>')
        $('#secAbout-1').addClass('about-1-sm')
        $('#secAbout-1').removeClass('about-1-bg')
        $('#secPaper').addClass('paper-sm')
        $('#secPaper').removeClass('paper-bg')
        $('#secPlant').addClass('plant-sm')
        $('#secPlant').removeClass('plant-bg')
        $('.morePlant').addClass('morePlant-sm')
        $('.morePlant').removeClass('morePlant-bg')
    }
}

function resizeNav(viewW) {
    if (viewW < sm_window) {
        $('.nav_list').hide()
        $('#secHome').css("padding-top", "50px")
        $("#goHome, #goAbout, #goPaper").click(function() {
            $('.nav_list').slideToggle()
        })
    } else {
        $('.nav_list').show()
        $('#secHome').css("padding-top", "0px")
    }
}

function resizeVid(viewW) {
    if (viewW < sm_window) {
        console.log("resize vid sm")
        parent.document.getElementById("mainframe").width = viewW * 0.98
        parent.document.getElementById("mainframe").height = viewW * 0.98 * 0.5625
        parent.document.getElementById("mainframe2").width = viewW
        parent.document.getElementById("mainframe2").height = viewW * 0.5625
    } else {
        console.log("resize vid")
        parent.document.getElementById("mainframe").width = viewW * 0.7
        parent.document.getElementById("mainframe").height = viewW * 0.7 * 0.5625
        parent.document.getElementById("mainframe2").width = 600
        parent.document.getElementById("mainframe2").height = 600 * 0.5625
    }
}
window.onload = function() {
    var viewW = $(window).width()
    setTimeout(function() {
        $('html,body').animate({
                scrollTop: $("#secHome").offset().top
            },
            100)
        $('#secLoad').fadeOut()

    }, 5000)
    if (viewW < sm_window) {
        $('#bgimage').delay(5600).animate({ marginTop: "0px" }, 300, "linear")
        $('#fgcontent').delay(6000).animate({ marginTop: "0px" }, 300, "linear")
        $('.nav_list').hide()
    } else {
        $('.blockrow').delay(5500).animate({ marginLeft: "20px" }, 300, "linear")
        $('.textbox3').delay(5600).animate({ marginLeft: "20px" }, 300, "linear")
        $('.textbox4').delay(5700).animate({ marginLeft: "0px" }, 300, "linear")
        $('#bgimage').delay(5500).animate({ marginRight: "0px" }, 300, "linear")
    }

}
$(document).ready(function() {
    var viewW = $(window).width()
    resize(viewW)
    resizeVid(viewW)
    $('#secMorePaper,#leave_btn, .morePlant').hide()

    $(window).resize(function() {
        var viewW = $(window).width()
        resizeNav(viewW)
        resize(viewW)
        resizeVid(viewW)
    })
})


$('#icon').click(function() {
    var viewW = $(window).width()
    if (viewW < sm_window) {
        $('.nav_list').slideToggle()
    } else {
        $('.nav_list').show()
        $('html,body').animate({
                scrollTop: $("#secHome").offset().top
            },
            'slow')
    }
})
$('#work-btn, #leave_btn').click(function() {
    console.log("click work btn")
    $('#secMorePaper').slideToggle()
    $('#leave_btn').slideToggle()
})

$('.plantMoreContent').click(function() {
    console.log("click work plant")
    $('#plantMore').hide()
})

$("#goHome").click(function() {
    var viewW = $(window).width()
    $('html,body').animate({
            scrollTop: $("#secHome").offset().top
        },
        'slow')
    if (viewW < sm_window) $('.nav_list').slideToggle()
});
$("#goAbout").click(function() {
    var viewW = $(window).width()
    $('html,body').animate({
            scrollTop: $("#secAbout").offset().top
        },
        'slow')
    if (viewW < sm_window) $('.nav_list').slideToggle()
});
$("#goPaper").click(function() {
    var viewW = $(window).width()
    $('html,body').animate({
            scrollTop: $("#secPaper").offset().top
        },
        'slow')
    if (viewW < sm_window) $('.nav_list').slideToggle()
});
$("#goPlant").click(function() {
    var viewW = $(window).width()
    $('html,body').animate({
            scrollTop: $("#secPlant").offset().top
        },
        'slow')
    if (viewW < sm_window) $('.nav_list').slideToggle()
});
$("#goInfo").click(function() {
    var viewW = $(window).width()
    $('html,body').animate({
            scrollTop: $("#secInfo").offset().top
        },
        'slow')
    if (viewW < sm_window) $('.nav_list').slideToggle()
});

var photo_data = [{
    id: 1,
    url: "image/photo-01.jpg"
}, {
    id: 2,
    url: "image/photo-02.jpg"
}, {
    id: 3,
    url: "image/photo-03.jpg"
}, {
    id: 4,
    url: "image/photo-03.jpg"
}];

var vm_photo = new Vue({
    el: "#media_photo",
    data: {
        photos: photo_data
    }
});

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
})
var s = skrollr.init({
    mobileCheck: function() {
        //hack - forces mobile version to be off
        return false;
    }
});