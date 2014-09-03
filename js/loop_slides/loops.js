


// jQuery
  var slide = $('.slider-wrapper img'), i = -1;
  var delay = 3000;

  function nextCurrent() {
    slide.eq(i).removeClass('current');
    slide.eq(i = (i+1) % slide.length ).addClass('current');
    setTimeout(nextCurrent, delay);
  }
  nextCurrent();

