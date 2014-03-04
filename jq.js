$("body").append(
	$("<div id=head></div>").text("Website of awesome stuff and things")
);

$("body").append(
	$("<div id=text></div>").html("Welcome to this site. <br> Here you can explore everything it has to offer! <br> Which isn't much, but still...")
);

$("body").append(
	$("<div id=soup></div>").html("You can click here for a souprice tho :D")
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

$("#rainbow").css({
	"background-image":"url(http://www.pilgrimshospices.org/wp-content/uploads/artworks-000050032335-le33za-original.jpg)",
	"background-size":"100% 100%",
	"height":"400px",
	"border-color":"#FFF",
	"display":"none"
});

$("html").css({
	"font-family":"Electrolize, Arial, serif"
});






$("#soup").click(function(){
    $("#rainbow").slideToggle("slow");
  });

$("#rainbow").click(function(){
    $("div").css({
		"background-color":"#444400",
		"color":"#009999"
	});

	$("#rainbow").delay(50).fadeOut(300)	
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
	$("body").css({
	"background-color":color
	});
	/*alert(color);*/
},50);

	});





































