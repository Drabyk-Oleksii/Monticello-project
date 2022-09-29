$(document).ready(function (){
    $('.slider').slick({
        arrows: false,
        dots: true,
    })
    $('.slider_second').slick({
        dots: true,
        slidesToShow: 3,
        responsive:[
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2
                }
            },{
                breakpoint: 900,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
});


const header_burger = document.querySelector(".header_burger");
const menu_list = document.querySelector(".menu_list");
const body = document.querySelector("body")
const about_us = document.querySelector(".about_us")
const news = document.querySelector(".news")
const projects = document.querySelector(".projects")
const contact = document.querySelector(".contact")

function lets (let){
        let.addEventListener("click",function (e){
        header_burger.classList.toggle('_active')
        menu_list.classList.toggle('_active')
        body.classList.toggle('_active')
    });
};
lets(header_burger)
lets(about_us)
lets(news)
lets(projects)
lets(contact)



$(document).ready(function($){
    $('a[href*="#"]').on('click.smoothscroll', function( e ){
        var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
        if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
        var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
        if( ! $target.length ) return;
        e.preventDefault();
        $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 700, 'swing', function(){
            window.location.hash = hash;
        });
    });
});


