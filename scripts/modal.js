$(document).ready(function () {
  // MODAL
  var modalText = {
    lightVsDark: {
      title: "Light to Dark mode and vice versa",
      tag: "switch to dark or light mode",
      detail:
        "This is a project made with Js and html, in this project I have learned how write code to switch in dark mode or how to get back out light mode",
      link: "https://natureguardianz.me/tarun-kumar-portfolio/(01)light-dark-mode/",
    },

    musicPlayer: {
      title: "Music Player",
      tag: "listening favourite music",
      detail:
        "A music palyer in your browser to listen song, application made with javascript",
      link: "https://natureguardianz.me/tarunkumar-portfolio/(02)music-player",
    },
    customCountdown: {
      title: "Start a Custom Countdown",
      tag: "Let's the countdown begin",
      detail: "mark your important days and wait for stop the countdown",
      link: "https://natureguardianz.me/tarunkumar-portfolio/(03)custom-countdown",
    },
    formValidator: {
      title: "Form Validator",
      tag: "Don't hesitate",
      detail: "Register to the app and then validate your information please",
      link: "https://natureguardianz.me/tarunkumar-portfolio/(04)form-validator",
    },
    spockRockGame: {
      title: "Spock Rock Game",
      tag: "Play this game ",
      detail: "Play it just for fun! Do you like it ?",
      link: "https://natureguardianz.me/tarunkumar-portfolio/(05)spock-rock-game",
    },
    nasaApod: {
      title: "Nasa Apod",
      tag: "Nasa finds something ",
      detail: "What Nasa brings to us find out now ?",
      link: "https://natureguardianz.me/tarunkumar-portfolio/(06)nasa-apod",
    },
    dragNdDrop: {
      title: "Drag and Drop",
      tag: "How to make drag and drop application",
      detail:
        "This is a project made with Js and html, in this project I have learned how write code to make a drag and drop in your web application",
      link: "https://natureguardianz.me/tarunkumar-portfolio/(07)drag-and-drop",
    },
    calculator: {
      title: "A basic Js Calculator",
      tag: "just for making simple calculations",
      detail:
        "Do you want to add or  subtract or divide or multiply numbers then get into it.",
      link: "https://natureguardianz.me/tarunkumar-portfolio/(08)calculator",
    },
    paintClone: {
      title: "Cloning a paint application",
      tag: "Paint your thoughts",
      detail:
        "Clone paint application made in js , html, css and fetching api's.",
      link: "https://natureguardianz.me/tarunkumar-portfolio/(09)paint-clone",
    },
    pong: {
      title: "The Ping Pong Game",
      tag: "Do you like ping pong game",
      detail:
        "This a classic nokia mobile game you are definately familiar with it.",
      link: "https://natureguardianz.me/tarunkumar-portfolio/(10)pong",
    },

    ordering: {
      title: "Food Ordering Web",
      tag: "ONLINE ORDERING SOLUTION.",
      detail:
        "This is not uploaded right now still is progress to made. This is a commission-free online ordering system and food ordering app helping restaurants feed their hungry customers.",
      link: "https://xyz.com",
    },
    nature: {
      title: "Nature Guardian",
      tag: "An NGO platform from India",
      detail:
        "Nature Guardian charitable Foundation (NGCF) is a private indian organisation running by a group indian citizens, our area of interest is in wildlife and nature conservation we are funded by indian, american, france, and britain governments and many other billionaire buisnessmens from all over the globe so far. we are recognised in 23 different contries all over the globe.",
      link: "https://natureguardianz.me",
    },
    player: {
      title: "Video Player",
      tag: "Video player controllers in javascript",
      detail:
        "This is my mini project in my college called video player in javascript, when I was very naive in web development",
      link: "https://natureguardianz.me/video-player",
    },
  }

  $("#gallery .button").on("click", function () {
    fillModal(this.id)
    $(".modal-wrap").addClass("visible")
  })

  $(".close").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible")
  })

  $(".mask").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible")
  })

  var carousel = $("#carousel"),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd

  setDimensions()

  $("#next").click(function () {
    shiftSlide(-1)
  })
  $("#prev").click(function () {
    shiftSlide(1)
  })

  carousel.on("mousedown", function () {
    if (carousel.hasClass("transition")) return
    dragStart = event.pageX
    $(this).on("mousemove", function () {
      dragEnd = event.pageX
      $(this).css("transform", "translateX(" + dragPos() + "px)")
    })
    $(document).on("mouseup", function () {
      if (dragPos() > threshold) {
        return shiftSlide(1)
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1)
      }
      shiftSlide(0)
    })
  })

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth()
    }
    $(".carousel-wrap, .slide").css("width", slideWidth)
    $(".modal").css("max-width", slideWidth)
    $("#carousel").css("left", slideWidth * -1)
  }

  function dragPos() {
    return dragEnd - dragStart
  }

  function shiftSlide(direction) {
    if (carousel.hasClass("transition")) return
    dragEnd = dragStart
    $(document).off("mouseup")
    carousel
      .off("mousemove")
      .addClass("transition")
      .css("transform", "translateX(" + direction * slideWidth + "px)")
    setTimeout(function () {
      if (direction === 1) {
        $(".slide:first").before($(".slide:last"))
      } else if (direction === -1) {
        $(".slide:last").after($(".slide:first"))
      }
      carousel.removeClass("transition")
      carousel.css("transform", "translateX(0px)")
    }, 700)
  }

  function fillModal(id) {
    $("#modal .title").text(modalText[id].title)
    $("#modal .detail").text(modalText[id].detail)
    $("#modal .tag").text(modalText[id].tag)
    if (modalText[id].link)
      $("#modal .button")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].link)

    $.each($("#modal li"), function (index, value) {
      $(this).text(modalText[id].bullets[index])
    })
    $.each($("#modal .slide"), function (index, value) {
      $(this).css({
        background:
          "url('img/slides/" + id + "-" + index + ".jpg') center center/cover",
        backgroundSize: "cover",
      })
    })
  }
})
