(function($){ 
  /* code */
  resizeExamples();
  $(window).resize(function(e){ resizeExamples() });
})(window.jQuery);

function resizeExamples(){
  	$(".example").each(function(e){
	  	var $pre = $(this).find("pre");
	  	var $content = $(this).find(".content");
	  	var height = $content.height() > $pre.height() ? $content.height() : $pre.height();
	  	$pre.height(height);
	  	$content.height(height);
	});
  }