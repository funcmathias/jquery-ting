$("body").append(
	$("<div id=head></div>").text("Website of awesome stuff and things")
);

$("body").append(
	$("<div id=text></div>").html("Welcome to this site. <br> Here you can explore everything it has to offer! <br> Which isn't much, but still...")
);

$("body").append(
	$("<div id=wikiped></div>").html("I can tell you what Wikipedia is doing! (soon i hope) <br>")
);

$("#wikiped").append(
	$("<button id=craveinfo></button>").html("I'm craving info!")
);

$("body").append(
	$("<div id=soup></div>").html("You can click here for a bonus souprice if you don't like the rest of the site :D")
);

$("body").append(
	$("<div id=rainbow></div>").html("")
);



$("div").css({
	"border":"1px solid #0000FF",
	"background-color":"#0099FF",
	"margin":"0 auto",
	"margin-top":"16px",
	"padding":"8px",
	"width":"710px",
	"text-align":"center"
});

$("#head").css({
	"color":"#FF9900",
	"font-size":"32px",
	"font-weight":"900"
});

$("#wikiped").css({
	"background-color":"#FF9900"
});

$("#rainbow").css({
	"background-image":"url(http://www.pilgrimshospices.org/wp-content/uploads/artworks-000050032335-le33za-original.jpg)",
	"background-size":"100% 100%",
	"height":"400px",
	"border":"none",
	"display":"none"
});

$("html").css({
	"font-family":"Electrolize, Arial, serif"
});






$("#soup").click(function(){
	$("#rainbow").slideToggle("slow");
	$("#soup").text("And now click the rainbow!");
});

$("#rainbow").click(function(){
	$("div").css({
		"background-color":"#444400",
		"color":"#009999"
	});

	$("#rainbow").fadeOut(0)
	$("#rainbow").css({
		"background-image":"url(http://hoopinator.com/wp-content/uploads/2013/10/cannabisTRANS-1.png)",
		"background-color":"transparent",
		"height":"710px"
	});
	$("#rainbow").fadeIn(4096)
	$("#head").empty().html("Wow, this site is such dynamic!");
	$("#text").empty().html("Feels good man. <br> Once you go 420, <br> theres no turning back!");
	$("#soup").delay(50).fadeOut(300).html();

	var min= 0;
	var max= 255;

setInterval(function(){
	var r = (Math.floor(Math.random() * (max - min + 1)) + min);
	var g = (Math.floor(Math.random() * (max - min + 1)) + min);
	var b = (Math.floor(Math.random() * (max - min + 1)) + min);

	var color = "rgb(" + r + "," + g + "," + b + ")";
	var color2 = "rgb(" + g + "," + b + "," + r + ")";

	$("body").css({"background-color":color});

	$("#head").css({"background-color":color2});
	$("#text").css({"background-color":color2});

	/*alert(color);*/
},50);
});






$("#craveinfo").click(function(){
	$.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=recentchanges&rcprop=title|ids|sizes|flags|user&rclimit=1&format=json&callback=?", function(json) {
		var jstr = JSON.stringify(json, undefined, 2); // indentation level = 2
	$("#wikiped").html(json.recentchanges[1].title);
});
});






























