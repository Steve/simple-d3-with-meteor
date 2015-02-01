Template.vthings.helpers({
  vthings:function() {
	return Things.find({});
  },
});

Template.vthings.events({
	'click input.increment' : function() {
		count = Things.find().count();

		Things.insert({name: "thing " + (count + 1)});
	},
	'click input.decrement' : function() {
		count = Things.find().count();
		
		if(count > 0) {
			Things.remove({_id: Things.findOne({name: "thing " + count})['_id']});
		}
	}
});

Template.vthing.helpers({
    circle:function() {
	var id = "a" + this._id;
	var selector_id = "#" + id;

	existing_circles = d3.select("#vthings").selectAll("g");
	console.log("current # of things = " + existing_circles.size());

	x_increment = (500 - 50) / (existing_circles.size() + 2);
	x_next = x_increment + 50;

	Template.vthing._draw_existing(existing_circles, x_next, x_increment);

	x_next = x_next + (x_increment * existing_circles.size());

	circle = d3.select("#vthings").selectAll(selector_id)
	circle_data = circle.data([id]);
	g_container = circle_data.enter()
					.append("g")
					.classed("thing", true)
					.attr("id", function(d) { return d })
					.attr("transform", function(d){
						i = x_next;
						x_next = x_next + x_increment;
						console.log("new circle at x = " + i);
						return "translate("+i+",100)"
					});

		g_container.append("circle")
					.style("stroke", "gray")
					.style("fill", "white")
					.attr("r", 40)
					.on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
					.on("mouseout", function(){d3.select(this).style("fill", "white");});

		g_container.append("text")
					.attr("dx", function(d) { return -20 })
					.text(this.name);
}
});

Template.vthing._draw_existing = function(existing_circles, x_next, x_increment) {
	existing_circles
			.transition()
			.duration(750)
			.style("stroke", "gray")
			.attr("transform", function(d){
				i = x_next;
				x_next = x_next + x_increment;
				console.log("move existing circle to x = " + i);
				return "translate("+i+",100)"
			});
}

d3.selection.prototype.size = function() {
	var n = 0;
	this.each(function() { ++n; });
	return n;
};
