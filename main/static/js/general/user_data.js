(function() {

	var userid = parseInt(window.location.pathname.split("/")[2]);
	$(".user_name").html(userid);
	$.ajax({
		method: "GET",
		url: "/friends/"+userid
	}).done(function(data) {
		var s = "";
		for(var i=0;i<data.results.length; i++) {
			s += "<tr><td>"+data.results[i]+"</td></tr>";
		}
		$(".tabb").html(s);
	});
			
	$.ajax({
		method: "GET",
		url: "/songs/"+userid
	}).done(function(data) {
		var s = "";
		for(var i=0;i<data.results.length; i++) {
			s += "<tr><td>"+data.results[i]+"</td></tr>";
		}
		$(".tabbs").html(s);
	});
			
})();