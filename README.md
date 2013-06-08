simple-d3-with-meteor
=====================

simplest d3 + meteor example I could make v2

Learning meteor & d3 together – I wanted a simple example to build on. Since I didn’t find one, I’m sharing this.  The minimal (for me) was that it took advantage of the reactive data synced between client & server to affect something I drew with d3.

* Add & remove records in "Things" collection using the "+" and "-" buttons
* Each record in the "Things" collection will be shown as a circle, with the "name" attribute as the text inside of the circle.

![Screen Shot](https://raw.github.com/steve/simple-d3-with-meteor/master/screenshots/v2.png)

## History

* v2 - now, individual circles are drawn by d3 (via a template), each one as a result of individual record changes managed by Meteor. This is more like what (I think) Meteor intended, as it's much closer to how HTML is created by Meteor templates. One difference, the removal of something from d3 is triggered by use of a callback from observing the Things collection.

* v1 - handled the drawing of all the circles in a single call, only using rendering call for that Meteor template. While d3 was intergrated with Meteor & Meteor triggered the drawing, the association between indiviudal circles (drawn by d3) and individual records (managed by Meteor) wasn't handled by Meteor.

## Sources
* [http://christopheviau.com/d3_tutorial/](http://christopheviau.com/d3_tutorial/)
* [http://mbostock.github.io/d3/tutorial/circle.html](http://mbostock.github.io/d3/tutorial/circle.html)
* [http://d3js.orgfor lots of help, esp. the transitions](http://d3js.org) for lots of help, esp. the transitions
* [http://blog.benmcmahen.com/post/41124327100/using-d3-and-meteor-to-generate-scalable-vector](http://blog.benmcmahen.com/post/41124327100/using-d3-and-meteor-to-generate-scalable-vector)
* [http://stackoverflow.com/questions/15464507/understanding-not-permitted-untrusted-code-may-only-update-documents-by-id-m] (http://stackoverflow.com/questions/15464507/understanding-not-permitted-untrusted-code-may-only-update-documents-by-id-m) to help figure out how to remove a single Mongo record from client (since client is "untrusted")
* [http://stackoverflow.com/questions/13615381/d3-add-text-to-circle](http://stackoverflow.com/questions/13615381/d3-add-text-to-circle) to help figure out how to add text to a SVG circle
* [https://groups.google.com/forum/?fromgroups#!topic/d3-js/qSwsOYMo9mA](https://groups.google.com/forum/?fromgroups#!topic/d3-js/qSwsOYMo9mA) to help count number of visible "things" to compute layout based just on what the client has visible at the moment (instead of depending on queries to DB)
