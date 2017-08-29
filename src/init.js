$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */
    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    //$('this') below refers to the addDancerButton
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name'); //evaluates to "makeBlinkyDancer"

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName]; //=> window["makeBlinkyDancer"] => function makeBlinkyDancer;

    // make a dancer with a random position


    var dancer = new BlinkyDancer(
      (($("body").height()-32) * Math.random())+32, //top
      $("body").width() * Math.random(), //left
      Math.random() * 1000 //timeBetweenSteps
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  $('.addRainbowDancer').click(() => {
    var dancer = new RainbowDancer(
      (($("body").height()-32) * Math.random())+32, //top
      $("body").width() * Math.random(), //left
      Math.random() * 1000 //timeBetweenSteps
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  $('.addSizeDancer').click(() => {
    //instantiate a new sizeDancer
    var sized = new SizeDancer(
      $("body").height() * Math.random(), //top
      $("body").width() * Math.random(), //left
      Math.random() * 200//timeBetweenSteps
    );
    //push the dancer to dancers array
    window.dancers.push(sized);
    //append the dancer to the body
    $('body').append(sized.$node);
  });
  $('.lineUpButton').click(() => {
    window.dancers.forEach((dancer) => {
      dancer.linedUp = true;
      dancer.lineUp();
    });
  });
  $('.goNutsButton').click(() => {
    window.dancers.forEach((dancer) => {
      dancer.linedUp = false;
      dancer.step();
    });
  });
});
