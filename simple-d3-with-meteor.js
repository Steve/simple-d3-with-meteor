Count = new Meteor.Collection("count");
Things = new Meteor.Collection("things");


if (Meteor.isClient) {

	Template.vthings.vthings = function() {
		return Things.find({});
	}
	Template.vthing.cx = function() {
		return 50;
	}

	Template.vthing.cy = function() {
		return 50;
	}

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


}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (Count.find().count() === 0) {
			Count.insert({number: 1});
		}

		if(Things.find().count() === 0) {
			Things.insert({name: "thing 1" });
			Things.insert({name: "thing 2" });
		}
  });
}
