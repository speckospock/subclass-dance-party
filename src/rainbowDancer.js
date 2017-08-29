class RainbowDancer extends Dancer {
  constructor(top, left, timeBetweenSteps, step, $node) {
    super(top, left, timeBetweenSteps, step, $node);
    this.$node = $('<span class="dancer rainbow"></span>');
    this.setPosition();
    this.step();
  }
  step() {
    var dancerNode = this.$node;
    //dancerNode.toggle();
    //var toggled = this.$node.toggle.bind(this.$node);
    //var stepUp = this.step.bind(this);
    //var leftPos = this.left;
    //debugger;
    //schedules a function to be called each time a specific interval has passed
    setInterval(() => {
      //dancerNode.toggle();
      //stepUp;
      var styleSettings = {
        left: (Math.random() * $("body").width()),
        top: (($("body").height()-32) * Math.random())+32,
      };
      var colors = ["red", "blue", "green", "yellow", "aqua", "pink"];
      var color = Math.floor(Math.random() * colors.length);
      dancerNode.animate(styleSettings, 200).css('color', colors[color]);
    }, this.timeBetweenSteps);
  }
}
