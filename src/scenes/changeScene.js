export { addChangeSceneEventListeners };

function addChangeSceneEventListeners(that) {
  that.input.keyboard.on(
    "keydown_ZERO",
    function() {
      that.scene.start("Scene0");
    }
  );
  that.input.keyboard.on(
    "keydown_ONE",
    function() {
      that.scene.start("Scene1");
    }
  );
  that.input.keyboard.on(
    "keydown_TWO",
    function() {
      that.scene.start("Scene2");
    }
  );
  that.input.keyboard.on(
    "keydown_THREE",
    function() {
      that.scene.start("Scene3");
    }
  );
  that.input.keyboard.on(
    "keydown_FOUR",
    function() {
      that.scene.start("Scene4");
    }
  );
  that.input.keyboard.on(
    "keydown_FIVE",
    function() {
      that.scene.start("Scene5");
    }
  );
  that.input.keyboard.on(
    "keydown_SIX",
    function() {
      that.scene.start("Scene6");
    }
  );
  that.input.keyboard.on(
    "keydown_SEVEN",
    function() {
      that.scene.start("Scene7");
    }
  );
  that.input.keyboard.on(
    "keydown_EIGHT",
    function() {
      that.scene.start("Scene8");
    }
  );
  that.input.keyboard.on(
    "keydown_NINE",
    function() {
      that.scene.start("Scene9");
    }
  );
  that.input.keyboard.on(
    "keydown_ESC",
    function() {
      that.scene.start("Boot");
    }
  );
}
