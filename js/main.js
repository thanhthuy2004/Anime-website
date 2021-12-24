/*  ---------------------------------------------------
    Theme Name: Anime
    Description: Anime video tamplate
    Author: Colorib
    Author URI: https://colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            FIlter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.filter__gallery').length > 0) {
            var containerEl = document.querySelector('.filter__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });
    /*------------------
		Dark/Light Changer
	--------------------*/

    var isLight = localStorage.getItem('isLight');
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement("link");
    link.rel = 'stylesheet';
    link.href = 'css/light-style.css';
    link.type = 'text/css';
    if (isLight == 'true') {
        head.appendChild(link);
        document.getElementById('light-dark').checked = true;
    } else {
        head.removeChild(head.lastChild);
    }
    var checkbox_toggle = document.getElementById('light-dark');
    checkbox_toggle.addEventListener('change', function () {
        document.body.classList.toggle('light');
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement("link");
        let isLight = false;
        link.rel = 'stylesheet';
        link.href = 'css/light-style.css';
        link.type = 'text/css';
        if (head.lastChild.href != link.href) {
            head.appendChild(link);
            isLight = true;
        } else {
            head.removeChild(head.lastChild);
            isLight = false;
        }
        localStorage.setItem('isLight', isLight);
    });
    /*------------------
		Hero Slider
	--------------------*/
    var hero_s = $(".hero__slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        nav: true,
        navText: ["<span class='arrow_carrot-left'></span>", "<span class='arrow_carrot-right'></span>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false
    });

    /*------------------
        Video Player
    --------------------*/
    const player = new Plyr('#player', {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'captions', 'settings', 'fullscreen'],
        seekTime: 25
    });

    /*------------------
        Niceselect
    --------------------*/
    $('select').niceSelect();

    /*------------------
        Scroll To Top
    --------------------*/
    $("#scrollToTopButton").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });

})(jQuery);

/////////////////////////////////////////// Admin JS /////////////////////////////////////////////////////

document.getElementById("loginBtn").onclick = function(){
    var myEmail = document.getElementById("email").value;
    var myPass = document.getElementById("pass").value;
    var linkToAdmin = document.getElementById("loginNow");
    var listEmail = new Array("nhom11@gmail.com", "nhom11hci@gmail.com");
    var listPass = new Array("1234567890", "nhom11");
 
   var checkU = false;
   var indexU = 0;
    for(var i=0; i<listEmail.length; i++){
        if(myEmail==listEmail[i]){
            checkU = true;
            indexU = i;
            break;
        }else{
            checkU = false;
        }
    }
    if(checkU === true){
        if(myPass==listPass[indexU]){
            alert("Login Thành công")
            linkToAdmin.innerHTML = '<a href="./admin/index.html" id="loginBtn" type="submit" class="site-btn"> Go To Admin </a> ';
            
        }else{
            alert("Password không chính xác")
            alert("Nhập lại password")
            
        }
        
    }else{
        alert("User không hợp lệ, vui lòng nhập lại user name")
    }
 
}
