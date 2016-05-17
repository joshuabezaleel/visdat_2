socialMedia = {
    "facebook" : true,
    "twitter" : false,
    "instagram" : false,
    "line" : false,
};

batch = {
    "2012" : true,
    "2013" : false,
    "2014" : false
};

MINVALUE = "00:00";
MAXVALUE = "23:00";

var w = 900;
var h = 345;

var margin = {
    top: 10,
    bottom: 30,
    left: 40,
    right: 40,
};

var width = w - margin.right - margin.left;
var height = h - margin.top - margin.bottom;

function convertToTime(time){
	return time>9?""+time+":00":"0"+time+":00";
}
/* LOAD DATA FROM CSV */
var numReady=0;
var dataFacebook = [];
d3.csv("https://raw.githubusercontent.com/joshuabezaleel/visdat_2/gh-pages/facebook.csv", function(d) {
  return {
    value: +d.Percentage,
    time: convertToTime(+d.Time),
    batch: d.Batch,
  };
}, function(error, rows) {
	dataFacebook=rows;
	numReady++;
	if (numReady>=4)allReady();
});

var dataTwitter=[];
d3.csv("https://raw.githubusercontent.com/joshuabezaleel/visdat_2/gh-pages/twitter.csv", function(d) {
  return {
    value: +d.Percentage,
    time: convertToTime(+d.Time),
    batch: d.Batch,
  };
}, function(error, rows) {
	dataTwitter=rows;
	numReady++;
	if (numReady>=4)allReady();
});

var dataLine = [];
d3.csv("https://raw.githubusercontent.com/joshuabezaleel/visdat_2/gh-pages/line.csv", function(d) {
  return {
    value: +d.Percentage,
    time: convertToTime(+d.Time),
    batch: d.Batch,
  };
}, function(error, rows) {
	dataLine=rows;
	numReady++;
	if (numReady>=4)allReady();
});

var dataInstagram = [];
d3.csv("https://raw.githubusercontent.com/joshuabezaleel/visdat_2/gh-pages/instagram.csv", function(d) {
  return {
    value: +d.Percentage,
    time: convertToTime(+d.Time),
    batch: d.Batch,
  };
}, function(error, rows) {
	dataInstagram=rows;
	numReady++;
	if (numReady>=4)allReady();
});

function allReady(){
	showChart.call(facebook,{
		data: dataFacebook,
	});
}

/* INIT CHART */
var svg = d3.select(".visualization").append('svg')
            .attr("id", "chart")
            .attr("width", width + 110)
            .attr("height", height+60);
var chart = svg.append("g")
            .classed("display", true)
            .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

var facebook = chart.append("g")
                .classed("facebook-chart", true);
var twitter = chart.append("g")
                .classed("twitter-chart", true);
var line = chart.append("g")
                .classed("line-chart", true);
var instagram = chart.append("g")
                .classed("instagram-chart", true);

var timeParser = d3.time.format("%H:%M").parse;

// console.log("23:00");
// console.log(timeParser("23:00"));

xScale = d3.time.scale()
            /*.domain(d3.extent(dataFacebook, function(d){
                return timeParser(d.time);
            }))*/
			// .domain([0, 0])
            .domain([timeParser(MINVALUE), timeParser(MAXVALUE)])
            .range([0, width]);
yScale = d3.scale.linear()
            .domain([0, 100])
            .range([height, 0]);

var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .ticks(23)
            .tickFormat(d3.time.format("%H"));
var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");

var path = d3.svg.line()
            .x(function(d){
                var time = timeParser(d.time);
                return xScale(time);
            })
            .y(function(d){
                return yScale(d.value);
            })
            .interpolate("basic");

var color = [];
color["2012"] = "#aaa";
color["2013"] = "#555";
color["2014"] = "#111";

chart.append("g")
    .classed("y-axis", true)
    .attr("transform", "translate(0, 0)")
    .call(yAxis);

var tip = d3.tip()
	.attr('class', 'd3-tip')
	.offset([-10, 0])
	.html(function(d) {
		return "<span style='color:red'>" + d.value + "</span>";
	});
svg.call(tip);

/* DECLARE FUNCTION */
function showChart(params){
	//console.log(params.data);
    xScale = d3.time.scale()
            // .domain(d3.extent(params.data, function(d){
            //     return timeParser(d.time);
            // }))
            .domain([timeParser(MINVALUE), timeParser(MAXVALUE)])
            .range([0, width]);
    var maxval = timeParser(MAXVALUE).getHours();
    var minval = timeParser(MINVALUE).getHours();
    var ticksCount = maxval - minval + 1;
	var xAxis = d3.svg.axis()
				.scale(xScale)
				.orient("bottom")
				.ticks(ticksCount)
				.tickFormat(d3.time.format("%H"));
	chart.append("g")
        .classed("x-axis", true)
        .attr("transform", "translate(0, " + height + ")")
        .call(xAxis);
	
    var dataNest = d3.nest()
            .key(function(d) {return d.batch;})
            // .key(function(d) {return d.time;})
            .entries(params.data);
    var chartThis = this;

    dataNest.forEach(function(d) {
        // console.log(d);
        var e = [];
        for (var i = minval; i < maxval + 1 ; i++){
            e.push(d.values[i]);
        }
        if (batch[d.key] == true){
            var garis = chartThis.append("path")
                        .attr("class", "trendline")
                        .style("stroke", function(){
                            return color[d.key];
                        })
                        .attr("d", path(e));
            var totalLength = garis.node().getTotalLength();

            garis
              .attr("stroke-dasharray", totalLength + " " + totalLength)
              .attr("stroke-dashoffset", totalLength)
              .transition()
                .duration(3000)
                .ease("linear")
                .attr("stroke-dashoffset", 0);

        }
    });

    this.selectAll(".point")
        .data(params.data)
        .enter()
            .append("circle").filter(function(d){
                // console.log(d);
                // console.log(d.time);
                var time = timeParser(d.time).getHours();
                var condition = (time >= minval) && (time <=maxval) ;
                // console.log(condition);
				return (batch[d.batch] && condition);
            })
            .classed("point", true)
            .attr("r", 4)
        .attr("cx", function(d){
            var time = timeParser(d.time);
            return xScale(time);
        })
        .attr("cy", function(d){
            return yScale(d.value);
        })
		.on('mouseover', tip.show)
		.on('mouseout', tip.hide);
}

$(".social-media-button").click(function(){
    if ($(this).hasClass('active')){
        if (!checkOnlySocialMedia(whatSocialMedia($(this)))){
            $(this).removeClass('active');
            var thisSocialMedia = whatSocialMedia($(this));
            alterSocialMedia(thisSocialMedia);
            deleteChart(thisSocialMedia);
            showAChart(thisSocialMedia);
        }               
    } else {
        $(this).addClass('active');
        var thisSocialMedia = whatSocialMedia($(this));
        alterSocialMedia(thisSocialMedia);
		deleteChart(whatSocialMedia( $(this).siblings('.active')));
        $(this).siblings('.active').removeClass('active');
        deleteChart(thisSocialMedia);
        showAChart(thisSocialMedia);
    }
});

$(".batch-button").click(function(){
    if ($(this).hasClass('active')){
        var thisBatch = checkBatch($(this));
        if (!checkOnlyBatch(thisBatch)){
            $(this).removeClass('active');
            batch[thisBatch] = false;
            activeSocialMedia = whatSocialMedia($(".social-media-button.active"));
            deleteChart(activeSocialMedia);
            showAChart(activeSocialMedia);
        }
        debugBatch();
    } else {
        $(this).addClass('active');
        var thisBatch = checkBatch($(this));
        batch[thisBatch] = true;
        activeSocialMedia = whatSocialMedia($(".social-media-button.active"));
        deleteChart(activeSocialMedia);
        showAChart(activeSocialMedia);
    }
})

function whatSocialMedia($element){
    if ($element.hasClass('facebook')){
        return "facebook";
    }
    if ($element.hasClass('twitter')){
        return "twitter";
    }
    if ($element.hasClass('line')){
        return "line";
    }
    if ($element.hasClass('instagram')){
        return "instagram";
    }
}

function checkBatch($element){
    if($element.hasClass('2012')){
        return "2012";
    }
    if($element.hasClass('2013')){
        return "2013";
    }
    if($element.hasClass('2014')){
        return "2014";
    }
}

function alterSocialMedia(name){
    var x;
    for (x in socialMedia){
        if (x == name){
            socialMedia[x] = true;
        } else {
            socialMedia[x] = false; 
        }
        console.log(x + " : " + socialMedia[x]);
    }
}

function debugBatch(){
    var x;
    for (x in batch){
        console.log(x + " : " + batch[x]);
    }
}

function checkOnlyBatch(name){
    var count = 0;
    var size = 0;
    var x;
    for (x in batch){
        size++;
        if (x != name && batch[x] == false ) {
            count++;
        }
    }
    if (count == (size-1) ){
        return true;
    } else {
        return false;
    }
}

function checkOnlySocialMedia(name){
    var count = 0;
    var size = 0;
    var x;
    for (x in socialMedia){
        size++;
        if (x != name && socialMedia[x] == false ) {
            count++;
        }
    }
    if (count == (size-1) ){
        return true;
    } else {
        return false;
    }   
}

function trueSocialMedia(){
    var x;
    for (x in socialMedia){
        if (socialMedia[x] == true){
            return("" + x);
        }   
    }
    return null;
}

function showAChart(name){
    if (name == "facebook"){
        showChart.call(facebook,{
            data: dataFacebook,
        });
    }
    if (name == "twitter"){
        showChart.call(twitter,{
            data: dataTwitter,
        });
    }
    if (name == "line"){
        showChart.call(line,{
            data: dataLine,
        });
    }
    if (name == "instagram"){
        showChart.call(instagram,{
            data: dataInstagram,
        });
    }
}

function deleteChart(name){
    if (name == "facebook"){
        $(".facebook-chart").empty();
    }
    if (name == "twitter"){
        $(".twitter-chart").empty();
    }
    if (name == "line"){
        $(".line-chart").empty();
    }
    if (name == "instagram"){
        $(".instagram-chart").empty();
    }
    $("g.x-axis").remove();
}


$(".facebook-tab").click(function () {
    $(".facebook-tab").css("background-color","#3b5998");
    $(".facebook-panel").css("background-color","#3b5998");
})

if ($("#slider-range").length){
    console.log("ada nih");
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 23,
      values: [ 0, 23 ],
      step: 1,
      change: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        $(".min-range-text").text("min: " + ui.values[0]);
        $(".max-range-text").text("max: " + ui.values[1]);
        MINVALUE = ""+ ui.values[ 0 ] + ":00";
        MAXVALUE = ""+ ui.values[ 1 ] + ":00";
        reChart();
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
}

function reChart(){
    // console.log("rechart");
    var active = trueSocialMedia();
    // console.log(active);
    deleteChart(active);
    showAChart(active);
}
