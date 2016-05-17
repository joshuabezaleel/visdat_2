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

var insight = new Array(30);
var contentInsight = new Array(30);

/* Facebook Insight */
insight[0+1] = "Facebook 2012 only";
contentInsight[0+1] = "Facebook Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[0+2] = "Facebook 2013 only";
contentInsight[0+2] = "Facebook Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[0+4] = "Facebook 2014 only";
contentInsight[0+4] = "Facebook Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[0+3] = "Facebook 2012 vs 2013";
contentInsight[0+3] = "Facebook Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[0+5] = "Facebook 2012 vs 2014";
contentInsight[0+5] = "Facebook Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[0+6] = "Facebook 2013 vs 2014";
contentInsight[0+6] = "Facebook Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[0+7] = "Facebook 2012 vs 2013 vs 2014";
contentInsight[0+7] = "Facebook Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
/* Twitter Insight */
insight[7+1] = "Twitter 2012 only";
contentInsight[7+1] = "Twitter Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[7+2] = "Twitter 2013 only";
contentInsight[7+2] = "Twitter Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[7+4] = "Twitter 2014 only";
contentInsight[7+4] = "Twitter Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[7+3] = "Twitter 2012 vs 2013";
contentInsight[7+3] = "Twitter Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[7+5] = "Twitter 2012 vs 2014";
contentInsight[7+5] = "Twitter Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[7+6] = "Twitter 2013 vs 2014";
contentInsight[7+6] = "Twitter Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[7+7] = "Twitter 2012 vs 2013 vs 2014";
contentInsight[7+7] = "Twitter Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
/* Instagram Insight */
insight[14+1] = "Instagram 2012 only";
contentInsight[14+1] = "Instagram Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[14+2] = "Instagram 2013 only";
contentInsight[14+2] = "Instagram Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[14+4] = "Instagram 2014 only";
contentInsight[14+4] = "Instagram Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[14+3] = "Instagram 2012 vs 2013";
contentInsight[14+3] = "Instagram Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[14+5] = "Instagram 2012 vs 2014";
contentInsight[14+5] = "Instagram Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[14+6] = "Instagram 2013 vs 2014";
contentInsight[14+6] = "Instagram Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[14+7] = "Instagram 2012 vs 2013 vs 2014";
contentInsight[14+7] = "Instagram Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
/* Line Insight */
insight[21+1] = "Line 2012 only";
contentInsight[21+1] = "LINE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[21+2] = "Line 2013 only";
contentInsight[21+2] = "LINE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[21+4] = "Line 2014 only";
contentInsight[21+4] = "LINE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[21+3] = "Line 2012 vs 2013";
contentInsight[21+3] = "LINE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[21+5] = "Line 2012 vs 2014";
contentInsight[21+5] = "LINE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[21+6] = "Line 2013 vs 2014";
contentInsight[21+6] = "LINE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."
insight[21+7] = "Line 2012 vs 2013 vs 2014";
contentInsight[21+7] = "LINE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum quibusdam labore illum tenetur nam reprehenderit pariatur quia porro quam minus distinctio, temporibus eius cum doloribus rem voluptatem voluptates totam."

/* Shown insight code*/
var insight_code = 1;
var ins_b_code = [];
ins_b_code["2012"] = 1;
ins_b_code["2013"] = 2;
ins_b_code["2014"] = 4;
var ins_s_code = [];
ins_s_code["facebook"] = 0;
ins_s_code["twitter"] = 1;
ins_s_code["instagram"] = 2;
ins_s_code["line"] = 3;
$(".selection-insight").text(insight[insight_code]);
$(".content-insight").text(contentInsight[insight_code]);
var InsightLogo = [];
InsightLogo["facebook"] = "images/logo-facebook.png";
InsightLogo["twitter"] = "images/logo-twitter.png";
InsightLogo["instagram"] = "images/logo-instagram.png";
InsightLogo["line"] = "images/logo-line.png";
$(".insight-logo").attr('src', InsightLogo["facebook"]);

MINVALUE = "00:00";
MAXVALUE = "23:00";


var w = 880;
var h = 510;

var margin = {
    top: 75,
    bottom: 70,
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
            .attr("width", width + 130)
            .attr("height", height+100);
var chart = svg.append("g")
            .classed("display", true)
            .attr("transform", "translate(" + margin.left + ", " + (margin.top-40) + ")");
var facebook = chart.append("g")
                .classed("facebook-chart", true)
                .attr("transform", "translate(30, 0)");
var twitter = chart.append("g")
                .classed("twitter-chart", true)
                .attr("transform", "translate(30, 0)");
var line = chart.append("g")
                .classed("line-chart", true)
                .attr("transform", "translate(30, 0)");
var instagram = chart.append("g")
                .classed("instagram-chart", true)
                .attr("transform", "translate(30, 0)");
var timeParser = d3.time.format("%H:%M").parse;

var color = [];
color["2012"] = "#80cbc4";
color["2013"] = "#ab47bc";
color["2014"] = "#ff5722";



chart.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("(Percentage of User Online)");

chart.append("text")
    .attr("transform", "translate(" + (width / 2) + " ," + (height + margin.bottom - 20) + ")")
    .style("text-anchor", "middle")
    .text("(Time in Hour)");

var tip = d3.tip()
	.attr('class', 'd3-tip')
	.offset([-10, 0])
	.html(function(d) {
		return "<span>" + d.value + "%</span>";
	});
svg.call(tip);

var defs = chart.append('svg:defs');

/* DECLARE FUNCTION */
function showChart(params){
    var nVal = [];
    for ( x in params.data){
        nVal.push(params.data[x].value);
    }
    xScale = d3.time.scale()
            .domain([timeParser(MINVALUE), timeParser(MAXVALUE)])
            .range([0, width]);
    yScale = d3.scale.linear()
            .domain([0, d3.max(nVal) + 5])
            .range([height, 0]);
    var path = d3.svg.line()
            .x(function(d){
                var time = timeParser(d.time);
                return xScale(time);
            })
            .y(function(d){
                return yScale(d.value);
            })
            .interpolate("basic");
    var maxval = timeParser(MAXVALUE).getHours();
    var minval = timeParser(MINVALUE).getHours();
    var ticksCount = maxval - minval + 1;
	var xAxis = d3.svg.axis()
				.scale(xScale)
				.orient("bottom")
				.ticks(ticksCount)
				.tickFormat(d3.time.format("%H"));
    var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");
	chart.append("g")
        .classed("x-axis", true)
        .attr("transform", "translate(30, " + (height) + ")")
        .call(xAxis);
	chart.append("g")
        .classed("y-axis", true)
        .attr("transform", "translate(30, 0)")
        .call(yAxis);

    this.selectAll(".bar")
        .data(params.data)
        .enter()
            .append("rect").filter(function(d){
                var time = timeParser(d.time).getHours();
                var condition = (time >= minval) && (time <maxval) ;
                return (batch[d.batch] && condition);
            })
            .classed("bar", true)
            .attr("class", function(d){
                return d3.select(this).attr("class") + "-" + timeParser(d.time).getHours();
            })
            .attr("x", function(d) { return xScale(timeParser(d.time)); })
            .attr("width", function(d){
                var thisVal = "" + (minval + 1) + ":00";
                console.log(thisVal);
                return xScale(timeParser(thisVal));
            })
            .attr("y", function(d) { return 0; })
            .attr("height", function(d) { return height; });

    var dataNest = d3.nest()
            .key(function(d) {return d.batch;})
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
                var time = timeParser(d.time).getHours();
                var condition = (time >= minval) && (time <=maxval) ;
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
			insight_code = (ins_s_code[thisSocialMedia]*7) + (insight_code%7==0?7:insight_code%7);
			$(".insight-logo").attr('src', InsightLogo[thisSocialMedia]);
        }
    } else {
        $(this).addClass('active');
        var thisSocialMedia = whatSocialMedia($(this));
        alterSocialMedia(thisSocialMedia);
		deleteChart(whatSocialMedia( $(this).siblings('.active')));
        $(this).siblings('.active').removeClass('active');
        deleteChart(thisSocialMedia);
        showAChart(thisSocialMedia);
		insight_code = (ins_s_code[thisSocialMedia]*7) + (insight_code%7==0?7:insight_code%7);
		$(".insight-logo").attr('src', InsightLogo[thisSocialMedia]);
    }
	$(".selection-insight").text(insight[insight_code]);
    $(".content-insight").text(contentInsight[insight_code]);
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
			insight_code = insight_code - ins_b_code[thisBatch];
        }
        debugBatch();
    } else {
        $(this).addClass('active');
        var thisBatch = checkBatch($(this));
        batch[thisBatch] = true;
        activeSocialMedia = whatSocialMedia($(".social-media-button.active"));
        deleteChart(activeSocialMedia);
        showAChart(activeSocialMedia);
		insight_code = insight_code + ins_b_code[thisBatch];
    }
	$(".selection-insight").text(insight[insight_code]);
    $(".content-insight").text(contentInsight[insight_code]);
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
    $("g.y-axis").remove();
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
      slide: function(event, ui){
        $(".min-range-text").text("min: " + ui.values[0]);
        $(".max-range-text").text("max: " + ui.values[1]);
      },
      change: function( event, ui ) {
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
