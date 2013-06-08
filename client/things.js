Things = new Meteor.Collection("things");

Things.find({}).observeChanges({
	removed: function(id) {
		console.log("In client, Thing removed " + id );
		var id = "a" + id;
		var selector_id = "#" + id;

		var removing_circle = d3.select("#vthings").selectAll(selector_id);
		removing_circle.remove();

		existing_circles = d3.select("#vthings").selectAll("g");
		console.log("new # of things = " + existing_circles.size());

		x_increment = (500 - 50) / (existing_circles.size() + 1);
		x_next = x_increment + 50;

		Template.vthing._draw_existing(existing_circles, x_next, x_increment);
	}
});

