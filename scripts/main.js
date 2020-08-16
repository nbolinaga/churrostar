$(document).ready(function () {
  // GRID -----------------------------------------------------------------------------------------------------------------------
  about = [
      'ChurroStar started to operate in Texas on October 31st 2014',
      'We are the first Churreria in San Antonio, TX.',
      'With ChurroStar you can see the process of making churros everytime you visit',
      'All of our churros are 100% vegetarian',
      'We are a family owned business',
      'Our goal is to continue sharing our passion and Hispanic tradition with locals and tourists who visit'
  ]
  for (i = 0; i < about.length; i++) {
      var card = document.createElement('div');
      card.setAttribute('class', 'flip-card item');
      var inner = document.createElement('div');
      inner.setAttribute('class', 'flip-card-inner');
      var front = document.createElement('div');
      front.setAttribute('class', 'flip-card-front');
      var back = document.createElement('div');
      back.setAttribute('class', 'flip-card-back');
      var img = document.createElement('img')
      img.setAttribute('src', `./assets/grid${i+1}.jpg`);
      img.setAttribute('alt', `Picture number ${i} of our delicious churros`);
      var h3 = document.createElement('h3');
  
      h3.innerHTML = `${about[i]}`;
      $(card).append(inner);
      $(inner).append(front);
      $(inner).append(back);
      $(front).append(img);
      $(back).append(h3);
      $('#about>#container').append(card);
  }
// NAVBAR -----------------------------------------------------------------------------------------------------------------------
  nav = $('#nav')
  drip = $('#drip')
  delivery = $('#delivery')

  $('#id').click(function () {
    drip.toggleClass('open');
    nav.toggleClass('open');
    
  });
  $('#locations_link').click(function () {
    drip.toggleClass('open');
    nav.toggleClass('open');
  });
  $('#home_link').click(function () {
    drip.toggleClass('open');
    nav.toggleClass('open');
  });
  $('#about_link').click(function () {
    drip.toggleClass('open');
    nav.toggleClass('open');
  });
  $('#faq_link').click(function () {
    drip.toggleClass('open');
    nav.toggleClass('open');
  });
  $('#contact_link').click(function () {
    drip.toggleClass('open');
    nav.toggleClass('open');
  });
  // SLIDES -----------------------------------------------------------------------------------------------------------------------
  var slideIndex = 1;
  showSlides(slideIndex);

  $('.next').click(function(){
    showSlides(slideIndex += 1);
  });

  $('.prev').click(function(){
    showSlides(slideIndex += -1);
  });

  function showSlides(n) {
    var i;
    var slides = $('.mySlides');
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
  }

  // MODALS -----------------------------------------------------------------------------------------------------------------------
  function disableScroll() {
    $('body').css('overflow','hidden');
    document.querySelector('html').scrollTop = window.scrollY;
  }
      
  function enableScroll() {
    $('body').css('overflow','');
  }

  $('.open').click(function(){
    modal = $(`#modal${this.id}`);
    modal.css('display','block');
    disableScroll();
  });

  $('.modal').click(function(){
    modal = $(`#${this.id}`);
    modal.css('display','none');
    enableScroll();
  });
  
  $('#nav').click(function(){
    modal = $(`.modal`).css('display','none');
    enableScroll();
  });
});

