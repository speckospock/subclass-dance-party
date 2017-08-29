
class SizeDancer extends Dancer {
  constructor(top, left, timeBetweenSteps, step, $node) {
    super(top, left, timeBetweenSteps, step, $node);
    //We create a span tag with jQuery with class dancer and class sizeDancer
    //This way, we can inherit dancer styles and change sizeDancer styles
    this.$node = $('<span class="dancer sizeDancer"></span>');
    this.setPosition();
    this.step();
    this.oddStep = true;
  }

  step() {
    //We want to create a a variable to remember current 'this'
    var dancerNode = this.$node;
    //We want a css object with border and border-radius properties
    var styleSettings = {
      'border': '30px solid', //we want this to be randomly sized
      'border-radius': '30px',
    };
    //We want to apply these styles to the $node.
    setInterval(() => {
      //take the styleSettings and animate them
      //dancerNode.animate(styleSettings, 400);
      //dancerNode.css('border': '30px');
      if (dancerNode.oddStep) {
        var randomSize = Math.floor(Math.random() * 75);
        var pixels = randomSize + 'px';
        dancerNode.width(pixels);
        dancerNode.height(pixels);
      } else {
        dancerNode.width('25px');
        dancerNode.height('25px');
      }
      //console.log(dancerNode.oddStep);
      dancerNode.oddStep = !dancerNode.oddStep
      //dancerNode.css('border', '50px');
    }, this.timeBetweenSteps);
  }
}
