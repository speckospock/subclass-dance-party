
// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
//
//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
//
//   var oldStep = blinkyDancer.step;
//
//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };
//
//   return blinkyDancer;
// };
/*
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
*/

class BlinkyDancer extends Dancer {
  constructor(top, left, timeBetweenSteps, step) {
    super(top, left, timeBetweenSteps, step);
    this.setPosition();
    this.step();
  }
  step() {
    var dancerNode = this.$node;
    dancerNode.toggle();
    //var toggled = this.$node.toggle.bind(this.$node);
    var stepUp = this.step.bind(this);
    var leftPos = this.left;
    var colors = ["red", "blue", "green", "yellow"];
    //debugger;
    setInterval(() => {
      var styleSettings = {
        left: (Math.random() * $("body").height()),
        top: (Math.random() * $("body").width()),
      };
      dancerNode.animate(styleSettings, 200);
      dancerNode.toggle();
      stepUp;
    }, this.timeBetweenSteps);
  }

}
