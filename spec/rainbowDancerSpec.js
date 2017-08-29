describe('rainbowDancer', () => {

  var rainbowDancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
    rainbowDancer = new RainbowDancer(40, 50, timeBetweenSteps);
  });

  it('should have a jQuery $node object', () => {
    expect(rainbowDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a $node class of rainbow and dancer', () => {
    expect(rainbowDancer.$node.hasClass('rainbow')).to.be.true;
    expect(rainbowDancer.$node.hasClass('dancer')).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(rainbowDancer, 'step');
      expect(rainbowDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(rainbowDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(rainbowDancer.step.callCount).to.be.equal(2);
    });
    it('should move to a random position on screen every step', () => {
      var originalLeft = rainbowDancer.left + 'px';
      var originalTop = rainbowDancer.top + 'px';
      rainbowDancer.step();
      clock.tick(timeBetweenSteps);
      expect(rainbowDancer.$node.css('top') !== originalTop).to.be.true;
      expect(rainbowDancer.$node.css('left') !== originalLeft).to.be.true;
    });
  });

});
