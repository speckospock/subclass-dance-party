describe('sizeDancer', () => {

  var sizeDancer, clock;
  var timeBetweenSteps = 1000;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
    sizeDancer = new SizeDancer(20, 30, timeBetweenSteps);
  });

  it('should have a jQuery $node object', () => {
    expect(sizeDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a $node class of sizeDancer and dancer', () => {
    expect(sizeDancer.$node.hasClass('dancer')).to.be.true;
    expect(sizeDancer.$node.hasClass('sizeDancer')).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(sizeDancer, 'step');
      expect(sizeDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      expect(sizeDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(sizeDancer.step.callCount).to.be.equal(2);
    });
    it('should change its width and height every step', () => {
      var originalWidth = sizeDancer.$node.css('width');
      var originalHeight = sizeDancer.$node.css('height');
      sizeDancer.step();
      clock.tick(timeBetweenSteps);
      expect(sizeDancer.$node.css('width') !== originalWidth).to.be.true;
      expect(sizeDancer.$node.css('height') !== originalHeight).to.be.true;
    });
  });
});
