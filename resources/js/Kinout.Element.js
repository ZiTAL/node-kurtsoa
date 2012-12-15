// Generated by CoffeeScript 1.3.3

/*
 * Description or Responsability
 *
 * @namespace KINOUT
 * @class Element
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  KINOUT.Element = (function(knt, undefined_) {
    var MARKUP, SELECTOR, init, progress, slides, steps, subslides, _el, _nextStep, _previousStep;
    SELECTOR = knt.Constants.SELECTOR;
    MARKUP = knt.Constants.MARKUP;
    _el = {
      parent: void 0,
      slides: [],
      steps: [],
      progress: {
        horizontal: void 0,
        vertical: void 0
      }
    };
    init = function(config) {
      _el.parent = $$(SELECTOR.KINOUT);
      if (config.template) {
        _el.parent.addClass(config.template);
      }
      return _el.parent.prepend(MARKUP.GLOW).append(MARKUP.COPYRIGHT);
    };
    slides = function() {
      if (!(_el.slides.length > 0)) {
        _el.slides = _el.parent.children('section');
      }
      return _el.slides;
    };
    subslides = function(slide_index) {
      return $$(_el.slides[slide_index]).children('article');
    };
    steps = function(next) {
      if (next) {
        return _nextStep();
      } else {
        return _previousStep();
      }
    };
    progress = function(type, value) {
      var property;
      if (type == null) {
        type = "horizontal";
      }
      if (value == null) {
        value = 0;
      }
      if (!_el.progress[type]) {
        _el.parent.append(MARKUP.PROGRESS[type]);
        _el.progress[type] = _el.parent.children(SELECTOR.PROGRESS[type]).children('span');
      }
      property = type === "horizontal" ? "width" : "height";
      _el.progress[type].style(property, "" + value + "%");
    };
    _nextStep = function() {
      var available, element, step, _i, _len, _steps;
      available = false;
      _steps = $$(SELECTOR.STEP + SELECTOR.STEP_TO_SHOW);
      for (_i = 0, _len = _steps.length; _i < _len; _i++) {
        element = _steps[_i];
        step = $$(element);
        if (step.data("run") !== "success") {
          step.data("run", "success");
          available = true;
          break;
        }
      }
      return available;
    };
    _previousStep = function() {
      var available, i, step, _steps;
      available = false;
      _steps = $$(SELECTOR.STEP + SELECTOR.STEP_TO_HIDE);
      i = _steps.length;
      while (i > 0) {
        step = $$(_steps[i - 1]);
        if (step.data("run") === "success") {
          step.data("run", "");
          available = true;
          break;
        }
        i--;
      }
      return available;
    };
    return {
      init: init,
      slides: slides,
      subslides: subslides,
      steps: steps,
      progress: progress
    };
  })(KINOUT);

}).call(this);
