Template.count.rendered = function () {
	c =  Count.findOne();
	// make sure c is defined
	if(typeof c === 'object'){
		number = c.number

		// get an array of <number> elements, from 1 .. number+1
		var data = _.range(1, number + 1);

		var svg = d3.select("#circles")
		var circles = svg.selectAll("circle")
						.data(data);
		
		// add the missing circles
		circles.enter().append("circle")
					.style("stroke", "gray")
					.style("fill", "white")
					.attr("r", 40)
					.attr("cx", function(d) { return d * 50})
					.attr("cy", function(d) { return d * 50})
					.text("foo")
					.attr("id", function(d) { return d })
					.on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
					.on("mouseout", function(){d3.select(this).style("fill", "white");});

		// remove unneeded circles
		circles.exit().remove();
	}
}

Template.vthing.circle = function() {
	var id = "a" + this._id;
	var selector_id = "#" + id;

	existing_circles = d3.select("#vthings").selectAll("circle");
	console.log("current # of things = " + existing_circles.size());

	x_increment = (500 - 50) / (existing_circles.size() + 2);
	x_next = x_increment + 50;

	Template.vthing._draw_existing(existing_circles, x_next, x_increment);

	x_next = x_next + (x_increment * existing_circles.size());

	circle = d3.select("#vthings").selectAll(selector_id)
	circle_data = circle.data([id]);
	circle_data.enter()
					.append("circle")
					.style("stroke", "gray")
					.style("fill", "white")
					.attr("r", 40)
					.attr("cx", function(d) {
						i = x_next;
						x_next = x_next + x_increment;
						console.log("new circle at x = " + i);
						return i
					})
					.attr("cy", function(d) { return 2 * 50})
					.text(this.name)
					.classed("thing", true)
					.attr("id", function(d) { return d })
					.on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
					.on("mouseout", function(){d3.select(this).style("fill", "white");})
					;

	//var num_circles = 0;
	//circle_data.attr("cx", function(d) {
		//console.log("circle_data d = " + d + " num_circles = " + num_circles);
		//num_circles = num_circles + 1;
		//return num_circles * 50
	//});
}

d3.selection.prototype.size = function() {
	var n = 0;
	this.each(function() { ++n; });
	return n;
};
