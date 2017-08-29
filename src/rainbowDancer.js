
class RainbowDancer extends Dancer {
  constructor(top, left, timeBetweenSteps, step, $node) {
    super(top, left, timeBetweenSteps, step, $node);
    this.$node = $('<span class="dancer rainbow"></span>');
    this.setPosition();
    this.step();
  }
  //returns a random valid color
  pickColor() {
    var colors = [
      "red", "blue", "green", "yellow", "aqua", "pink", "blue", "blueviolet",
      "coral", "chartreuse",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  step() {
    //We bind 'this', to make setTimeout function correctly.
    var dancer = this;

    //We set the left and top properties to random points within the screen
    this.left = (Math.random() * $("body").width());
    this.top = (($("body").height()-32) * Math.random())+32;

    //We create an object to set the css properties with
    var styleSettings = {
      left: this.left,
      top: this.top,
    };

    //We create an animation which moves the node to the new position and changes color
    this.$node.animate(styleSettings, 200).css('color', this.pickColor());

    setTimeout(() => {
      dancer.step();
    }, this.timeBetweenSteps);
  }
}
