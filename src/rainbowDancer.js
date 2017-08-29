class RainbowDancer extends Dancer {
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
    //debugger;
    setInterval(() => {
      dancerNode.toggle();
      //stepUp;
      var styleSettings = {
        left: (Math.random() * $("body").height()),
        top: (Math.random() * $("body").width()),
      };
      var colors = ["red", "blue", "green", "yellow", "aqua", "pink"];
      var color = Math.floor(Math.random() * colors.length);
      dancerNode.animate(styleSettings, 200).css('color', colors[color]);
    }, this.timeBetweenSteps);
  }
}
