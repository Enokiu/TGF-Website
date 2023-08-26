//Change Headerbackground
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    var $color = $(".changeNavColor");
    var $listContainer = $(".list-container");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $color.height());
    $color.toggleClass('scrolled', $(this).scrollTop() > $color.height());
    $listContainer.toggleClass('scrolled', $(this).scrollTop() > $color.height());

    if ($(this).scrollTop() > $color.height()) {
      document.getElementById("menu").src = 'assets/imgs/bars_color.svg';
    }
    else {
      document.getElementById("menu").src = 'assets/imgs/bars_black.svg';
    }
  });
});


//FAQS
//Licence: licence/faqs_licence.txt https://codepen.io/FlorinPop17/details/xxbdmYz
const toggles = document.querySelectorAll('.faq-toggle');
toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});


const toggleButton = document.getElementsByClassName("toggle-button")[0]
const listContainer = document.getElementsByClassName("list-container")[0]
const mobile = document.getElementsByClassName("mobile")[0]
const mobile1 = document.getElementById("mobile1")
const mobile2 = document.getElementById("mobile2")
const mobile3 = document.getElementById("mobile3")
const mobile4 = document.getElementById("mobile4")
const mobile5 = document.getElementById("mobile5")
const menu = document.getElementById("menu")
//const discord = document.getElementById("discord")
const twitter = document.getElementById("twitter")

//Smooth Scroll
$("a").click(function () {
  if (pageId = $(this).attr("data-page")) {
    if ($(window).width() < 600 && $(window).width() > 899) {
      sizeOff = 120
    }
    else if ($(window).width() < 1199) {
      sizeOff = 260
      listContainer.classList.toggle("active")
      mobile.classList.toggle("active")
      mobile1.classList.toggle("active")
      mobile2.classList.toggle("active")
      mobile3.classList.toggle("active")
      mobile4.classList.toggle("active")
      mobile5.classList.toggle("active")
      menu.classList.toggle("active")
      //discord.classList.toggle("active")
      twitter.classList.toggle("active")
    }
    else {
      sizeOff = 160
    }
    var pageId = $(this).attr("data-page");
    $("html, body").animate({ scrollTop: $("#" + pageId).offset().top - sizeOff }, 1000);
  }
});


//Menu Click Design
firstClick = true
toggleButton.addEventListener("click", () => {
  if (firstClick) {
    document.getElementById("menu").src = 'assets/imgs/bars_color.svg';
    firstClick = false;
  }
  else {
    document.getElementById("menu").src = 'assets/imgs/bars_black.svg';
    firstClick = true

  }
  listContainer.classList.toggle("active")
  mobile.classList.toggle("active")
  mobile1.classList.toggle("active")
  mobile2.classList.toggle("active")
  mobile3.classList.toggle("active")
  mobile4.classList.toggle("active")
  mobile5.classList.toggle("active")
  menu.classList.toggle("active")
  //discord.classList.toggle("active")
  twitter.classList.toggle("active")
})


//Cube automatic click
$(document).ready(function () {
  var element1 = document.getElementById("_3dbox1");
  var element2 = document.getElementById("_3dbox2");
  var element3 = document.getElementById("_3dbox3");

  $("#radio_group1 input:radio").click(() => {
    const wait = (seconds = 1) => new Promise((r) => setTimeout(r, seconds * 1e3));
    (async function () {

      var front = false;
      while (true) {
        if (front) {
          await wait(1.5);
          element1.classList.add("roate-front")
          element1.classList.remove("roate-right")
          element1.classList.remove("roate-left")
          element1.classList.remove("roate-bottom")
          element1.classList.remove("roate-back")
          element1.classList.remove("roate-top")
          await wait(1.5);
          element2.classList.add("roate-front")
          element2.classList.remove("roate-right")
          element2.classList.remove("roate-left")
          element2.classList.remove("roate-bottom")
          element2.classList.remove("roate-back")
          element2.classList.remove("roate-top")
          await wait(1.5);
          element3.classList.add("roate-front")
          element3.classList.remove("roate-right")
          element3.classList.remove("roate-left")
          element3.classList.remove("roate-bottom")
          element3.classList.remove("roate-back")
          element3.classList.remove("roate-top")
        }
        await wait(1.5);
        element1.classList.add("roate-left")
        element1.classList.remove("roate-right")
        element1.classList.remove("roate-top")
        element1.classList.remove("roate-bottom")
        element1.classList.remove("roate-back")
        element1.classList.remove("roate-front")
        await wait(1.5);
        element2.classList.add("roate-left")
        element2.classList.remove("roate-right")
        element2.classList.remove("roate-top")
        element2.classList.remove("roate-bottom")
        element2.classList.remove("roate-back")
        element2.classList.remove("roate-front")
        await wait(1.5);
        element3.classList.add("roate-left")
        element3.classList.remove("roate-right")
        element3.classList.remove("roate-top")
        element3.classList.remove("roate-bottom")
        element3.classList.remove("roate-back")
        element3.classList.remove("roate-front")
        await wait(1);
        element1.classList.add("roate-right")
        element1.classList.remove("roate-left")
        element1.classList.remove("roate-top")
        element1.classList.remove("roate-bottom")
        element1.classList.remove("roate-back")
        element1.classList.remove("roate-front")
        await wait(1.5);
        element2.classList.add("roate-right")
        element2.classList.remove("roate-left")
        element2.classList.remove("roate-top")
        element2.classList.remove("roate-bottom")
        element2.classList.remove("roate-back")
        element2.classList.remove("roate-front")
        await wait(1.5);
        element3.classList.add("roate-right")
        element3.classList.remove("roate-left")
        element3.classList.remove("roate-top")
        element3.classList.remove("roate-bottom")
        element3.classList.remove("roate-back")
        element3.classList.remove("roate-front")
        await wait(1.5);
        element1.classList.add("roate-top")
        element1.classList.remove("roate-right")
        element1.classList.remove("roate-left")
        element1.classList.remove("roate-bottom")
        element1.classList.remove("roate-back")
        element1.classList.remove("roate-front")
        await wait(1.5);
        element2.classList.add("roate-top")
        element2.classList.remove("roate-right")
        element2.classList.remove("roate-left")
        element2.classList.remove("roate-bottom")
        element2.classList.remove("roate-back")
        element2.classList.remove("roate-front")
        await wait(1.5);
        element3.classList.add("roate-top")
        element3.classList.remove("roate-right")
        element3.classList.remove("roate-left")
        element3.classList.remove("roate-bottom")
        element3.classList.remove("roate-back")
        element3.classList.remove("roate-front")
        await wait(1.5);
        element1.classList.add("roate-bottom")
        element1.classList.remove("roate-right")
        element1.classList.remove("roate-top")
        element1.classList.remove("roate-left")
        element1.classList.remove("roate-back")
        element1.classList.remove("roate-front")
        await wait(1.5);
        element2.classList.add("roate-bottom")
        element2.classList.remove("roate-right")
        element2.classList.remove("roate-top")
        element2.classList.remove("roate-left")
        element2.classList.remove("roate-back")
        element2.classList.remove("roate-front")
        await wait(1.5);
        element3.classList.add("roate-bottom")
        element3.classList.remove("roate-right")
        element3.classList.remove("roate-top")
        element3.classList.remove("roate-left")
        element3.classList.remove("roate-back")
        element3.classList.remove("roate-front")
        await wait(1.5);
        element1.classList.add("roate-back")
        element1.classList.remove("roate-right")
        element1.classList.remove("roate-top")
        element1.classList.remove("roate-bottom")
        element1.classList.remove("roate-left")
        element1.classList.remove("roate-front")
        await wait(1.5);
        element2.classList.add("roate-back")
        element2.classList.remove("roate-right")
        element2.classList.remove("roate-top")
        element2.classList.remove("roate-bottom")
        element2.classList.remove("roate-left")
        element2.classList.remove("roate-front")
        await wait(1.5);
        element3.classList.add("roate-back")
        element3.classList.remove("roate-right")
        element3.classList.remove("roate-top")
        element3.classList.remove("roate-bottom")
        element3.classList.remove("roate-left")
        element3.classList.remove("roate-front")
        front = true;
      }
    })();
  });
  $("#radio-back1").prop("checked", true).trigger("click")
});






