$((function(){$(".burger__menu").on("click",(function(){$(".burger__menu").toggleClass("burger__menu--active"),$(".header__inner-wrapper").toggleClass("header__wrapper--active")})),$(".back-top").hide(),$((function(){$(window).scroll((function(){$(this).scrollTop()>400?$(".back-top").fadeIn():$(".back-top").fadeOut()})),$(".back-top a").click((function(){return $("body,html").animate({scrollTop:0},0),!1}))})),$(".products-get__wrapper").on("click",(function(){$(this).toggleClass("wrapper--active"),$(this).children(".products-get__list").slideToggle(300)})),function(){"use strict";var e=document.querySelectorAll(".needs-validation");Array.prototype.slice.call(e).forEach((function(e){e.addEventListener("submit",(function(o){e.checkValidity()||(o.preventDefault(),o.stopPropagation()),e.classList.add("was-validated")}),!1)}))}(),$(window).resize((function(){$(window).width()<992?($(".header__menu-dropdown").on("click",(function(){$(this).children(".dropdown-list").toggleClass("dropdown--active")})),$(".header__menu-dropdown").removeClass("hover")):$(".header__menu-dropdown").addClass("hover")}))}));