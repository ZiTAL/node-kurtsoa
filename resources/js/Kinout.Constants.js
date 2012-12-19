// Generated by CoffeeScript 1.3.3

/*
 * Description or Responsability
 *
 * @namespace KINOUT
 * @class Boot
 *
 * @author Javier Jimenez Villar <javi@tapquo.com> || @soyjavi
*/


(function() {

  KINOUT.Constants = {
    MARKUP: {
      GLOW: "<div class='glow'></div>",
      COPYRIGHT: "<div class='copyright'><a href='http://www.tapquo.com' onclick='window.open(this.href); return false;'>kinout</a>by tapquo</div>",
      COPYLEFT: "<div class='copyleft'><ul><li><a href='#/1'>Indizea</a></li></ul></div>",      
      PROGRESS: {
        horizontal: "<div class='progress horizontal' value='0' max='100'><span></span></div>",
        vertical: "<div class='progress vertical' value='0' max='100'><span></span></div>"
      }
    },
    SELECTOR: {
      KINOUT: ".kinout",
      SLIDE: ".kinout>section",
      SUBSLIDE: ".kinout>section.present>article",
      STEP: "section.present > article.present [data-step]",
      STEP_TO_SHOW: ":not([data-run='success'])",
      STEP_TO_HIDE: "[data-run='success']",
      PROGRESS: {
        horizontal: ".progress.horizontal",
        vertical: ".progress.vertical"
      }
    },
    STYLE: {
      PAST: "past",
      PRESENT: "present",
      FUTURE: "future"
    }
  };

}).call(this);