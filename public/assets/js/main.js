/*
	Prologue by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


(function($) {
  var	$window = $(window),
    $body = $('body'),
    $nav = $('#nav');

  // Breakpoints.
  breakpoints({
    wide:      [ '961px', '1880px' ],
    normal:    [ '961px', '1620px' ],
    narrow:    [ '961px', '1320px' ],
    narrower:  [ '737px', '960px' ],
    mobile:    [ null, '736px' ]
  });

  // Play initial animations on page load.
  $window.on('load', function() {
    window.setTimeout(function() {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Nav.
  var $nav_a = $nav.find('a');

  $nav_a
    .addClass('scrolly')
    .on('click', function(e) {

      var $this = $(this);

      // External link? Bail.
      if ($this.attr('href').charAt(0) != '#')
        return;

      // Prevent default.
      e.preventDefault();

      // Deactivate all links.
      $nav_a.removeClass('active');

      // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
      $this
        .addClass('active')
        .addClass('active-locked');

    })
    .each(function() {

      var	$this = $(this),
        id = $this.attr('href'),
        $section = $(id);

      // No section for this link? Bail.
      if ($section.length < 1)
        return;

      // Scrollex.
      $section.scrollex({
        mode: 'middle',
        top: '-10vh',
        bottom: '-10vh',
        initialize: function() {

          // Deactivate section.
          $section.addClass('inactive');

        },
        enter: function() {

          // Activate section.
          $section.removeClass('inactive');

          // No locked links? Deactivate all links and activate this section's one.
          if ($nav_a.filter('.active-locked').length == 0) {

            $nav_a.removeClass('active');
            $this.addClass('active');

          }

          // Otherwise, if this section's link is the one that's locked, unlock it.
          else if ($this.hasClass('active-locked'))
            $this.removeClass('active-locked');

        }
      });

    });

  // Scrolly.
  $('.scrolly').scrolly();

  // Header (narrower + mobile).

  // Toggle.
  $(
    '<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
  )
    .appendTo($body);

  // Header.
  $('#header')
    .panel({
      delay: 500,
      hideOnClick: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: 'left',
      target: $body,
      visibleClass: 'header-visible'
    });


  // carousel
  function change_background ( new_img ) {
    var myImage = $('#main > section.one');
    myImage.css('src', new_img);

    setTimeout ( function(){
      myImage.css('opacity', 0.8);
    }, 300);
    setTimeout ( function(){
      myImage.css('opacity', 0.6);
    }, 400);
    setTimeout ( function(){
      myImage.css('opacity', 0.4);
    }, 500);
    setTimeout ( function(){
      myImage.css('opacity', 0.2);
    }, 600);
    setTimeout ( function(){
      myImage.css('background-image', new_img);
      myImage.css('opacity', 0.1);
    }, 700);
    setTimeout ( function(){
      myImage.css('opacity', 0.2);
    }, 800);
    setTimeout ( function(){
      myImage.css('opacity', 0.3);
    }, 900);
    setTimeout ( function(){
      myImage.css('opacity', 0.4);
    }, 1000);
    setTimeout ( function(){
      myImage.css('opacity', 0.5);
    }, 1100);
    setTimeout ( function(){
      myImage.css('opacity', 0.6);
    }, 1200);
    setTimeout ( function(){
      myImage.css('opacity', 0.7);
    }, 1300);
    setTimeout ( function(){
      myImage.css('opacity', 0.8);
    }, 1400);
    setTimeout ( function(){
      myImage.css('opacity', 0.9);
    }, 1500);
    setTimeout ( function(){
      myImage.css('opacity', 1);
    }, 1600);

  }
  change_background('url("../../images/pic02_02.jpg")');

})(jQuery);
