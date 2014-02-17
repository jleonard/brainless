(function($){ 
  /* code */
  resizeExamples();
  $(window).resize(function(e){ resizeExamples() });

  $(".text-demo").each(function(e){
  	var list = $(this).attr('class').split(/\s+/);
  	var len = list.length;
  	for (var i = 0; i < len; i++) {
  	    if(list[i] != "text-demo"){
  	    	$(this).text(list[i] + " "+ $(this).text());
  	    }
  	}
  });
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