$(document).foundation();

// Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -100
        }, 1000);
        return false;
      }
    }
  });
});

// Say 'Hello' in different Languages
$(function() {
  var count = 0;
  var words = ["Hello", "Bonjour", "Ciao", "Hola", "Hallo", "Aloha", "Ola", "Konnichiwa"]
  setInterval(function () {
    count++;
    $(".js-hello").fadeOut(400, function () {
      $(this).text(words[count % words.length]).fadeIn(400);
    });
  }, 3000);
});
