// Generated by CoffeeScript 1.3.3

/*
 * Description or Responsability
 *
 * @namespace KINOUT
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {
  var KINOUT;

  KINOUT = {
    slides: 0,
    index: {
      horizontal: 0,
      vertical: 0
    },
    init: function(config) {
      if (config == null) {
        config = {};
      }
      this.Element.init(config);
      this.Events.init();
      this.Url.read();
    }
  };

  window.KINOUT = KINOUT;

}).call(this);
