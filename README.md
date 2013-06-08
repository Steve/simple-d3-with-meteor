simple-d3-with-meteor
=====================

simplest d3 + meteor example I could make v2

Learning meteor & d3 together – I wanted a simple example to build on. Since I didn’t find one, I’m sharing this.  The minimal (for me) was that it took advantage of the reactive data synced between client & server to affect something I drew with d3.

* Add & remove records in "Things" collection using the "+" and "-" buttons
* Circles will rendered for each record in the "Things" collection, with the "name" attribute as the text inside of the circle.

![Screen Shot](https://raw.github.com/steve/simple-d3-with-meteor/master/screenshots/v2.png)

## History

* v2 - now, individual circles are drawn by d3 (via a template), each one as a result of individual record changes managed by Meteor. This is more like what (I think) Meteor intended, as it's much closer to how HTML is created by Meteor templates. One difference, the removal of something from d3 is triggered by use of a callback from observing the Things collection.

* v1 - handled the drawing of all the circles in a single call, only using rendering call for that Meteor template. While d3 was intergrated with Meteor & Meteor triggered the drawing, the association between indiviudal circles (drawn by d3) and individual records (managed by Meteor) wasn't handled by Meteor.

