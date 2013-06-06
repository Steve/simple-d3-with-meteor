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
					.on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
					.on("mouseout", function(){d3.select(this).style("fill", "white");});

		// remove unneeded circles
		circles.exit().remove();
	}
}
