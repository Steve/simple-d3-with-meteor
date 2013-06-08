simple-d3-with-meteor
=====================

simplest d3 + meteor example I could make v2

* v1 - handled the drawing of all the circles in a single call, only using rendering call for that Meteor template. While d3 was intergrated with Meteor & Meteor triggered the drawing, the association between indiviudal circles (drawn by d3) and individual records (managed by Meteor) wasn't handled by Meteor.

* v2 - now, individual circles are drawn by d3 (via a template), each one as a result of individual record changes managed by Meteor. This is more like what (I think) Meteor intended, as it's much closer to how HTML is created by Meteor templates. One difference, the removal of something from d3 is triggered by use of a callback from observing the Things collection.


