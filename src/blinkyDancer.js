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
  constructor(top, left, timeBetweenSteps, step, $node) {
    super(top, left, timeBetweenSteps, step, $node);
    this.$node = $('<span class="dancer blinky"></span>');
    this.setPosition();
    this.step();
  }
  step() {
    var dancerNode = this.$node;
    dancerNode.toggle();
    //var toggled = this.$node.toggle.bind(this.$node);
    var dancer = this;
    var leftPos = this.left;
    //debugger;
    setTimeout(() => {
      //dancerNode.toggle();
      dancer.step();
    }, this.timeBetweenSteps);
  }
}
