class SizeDancer extends Dancer {
  constructor(top, left, timeBetweenSteps, step, $node) {
    super(top, left, timeBetweenSteps, step, $node);
    //We create a span tag with jQuery with class dancer and class sizeDancer
    //This way, we can inherit dancer styles and change sizeDancer styles
    this.$node = $('<span class="dancer sizeDancer"></span>');
    this.$node.hover(() => {
      this.$node.css('color', 'green');
    }, () => {
      this.$node.css('color', 'blue');
    });
    this.setPosition();
    this.step();
    this.oddStep = true;
  }

  step() {
    if (!this.linedUp) {
      //We want to create a a variable to remember current 'this'
      var dancer = this;
      this.setPosition();
      //We want a css object with border and border-radius properties
      var styleSettings = {
        'border': '30px solid', //we want this to be randomly sized
        'border-radius': '30px',
      };
      if (this.oddStep) {
        var randomSize = Math.floor(Math.random() * 75);
        var pixels = randomSize + 'px';
        this.$node.width(pixels);
        this.$node.height(pixels);
      } else {
        this.$node.width('25px');
        this.$node.height('25px');
      }
      this.oddStep = !this.oddStep;
      //We want to apply these styles to the $node.
      setTimeout(() => {
        //take the styleSettings and animate them
        //dancerNode.animate(styleSettings, 400);
        //dancerNode.css('border': '30px');
        dancer.step();
        //this.css('border', '50px');
      }, this.timeBetweenSteps);
    }
  }
  lineUp() {
    this.top = $('body').height() - 250;
    this.setPosition();
    this.top = (($('body').height() - 32) * Math.random()) + 32;
  }
}
