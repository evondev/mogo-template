"use strict";$(document).ready(function(){$(".quote-list").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,prevArrow:'<i class="fal fa-angle-left slick-prev"></i>',nextArrow:'<i class="fal fa-angle-right slick-next"></i>',responsive:[{breakpoint:480,settings:{arrows:!1}}]})});var menuToggle=document.querySelector(".menu-toggle"),menuList=document.querySelector(".menu-list"),menuShowClass="is-show";menuToggle.addEventListener("click",function(){menuList.classList.add(menuShowClass)}),window.addEventListener("click",function(e){menuList.contains(e.target)||e.target.matches(".menu-toggle")||menuList.classList.remove(menuShowClass)});