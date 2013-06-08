Things = new Meteor.Collection("things");

Meteor.startup(function () {
	// code to run on server at startup
	if(Things.find().count() === 0) {
		Things.insert({name: "thing 1" });
		Things.insert({name: "thing 2" });
	}
});
