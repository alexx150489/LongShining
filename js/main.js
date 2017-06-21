$(document).ready(function() {

	$(".block-offers .reserve-btn").on("click", function(e) {
		e.preventDefault();
		var currentBlock = $(this).attr("href"),
		currentBlockOffset = $(currentBlock).offset().top;
		$("html, body").animate({
			scrollTop: currentBlockOffset
		}, 500);
	});

});