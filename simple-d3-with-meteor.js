Count = new Meteor.Collection("count");


if (Meteor.isClient) {

  Template.count.number = function () {
    c =  Count.findOne();
		// make sure c is defined
		if(typeof c === 'object'){
			return c.number;
		}
  };

	Template.count.events({
		'click input.increment' : function() {
			c = Count.findOne();
      Count.update(c._id, {$inc: {number: 1}});
		},
		'click input.decrement' : function() {
			c = Count.findOne();
      Count.update(c._id, {$inc: {number: -1}});
		}
	});
			
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    if (Count.find().count() === 0) {
			Count.insert({number: 1});
		}
  });
}
