(function($) {
    "use strict";
  
    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
      if ($(window).width() > 768) {
        var e0 = e.originalEvent,
          delta = e0.wheelDelta || -e0.detail;
        this.scrollTop += (delta < 0 ? 1 : -1) * 30;
        e.preventDefault();
      }
    });
  
  
    // Refresh function
    function refresh() {
      location.reload();
    }
  
    var refreshButton = document.getElementById('refresh-button');
    refreshButton.addEventListener('click', refresh);
  
  })(jQuery);
  