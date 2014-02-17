;(function($){
	hljs.initHighlightingOnLoad();
  $(document).ready(function(e){
    $('.sidebar').on('click', function(e){
      $(this).toggleClass('off');
      $('main').toggleClass('off');
    });
  });			
})(jQuery);