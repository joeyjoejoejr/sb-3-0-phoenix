import TweenMax from 'gsap/src/uncompressed/TweenMax';
import ScrollMagic from 'scrollmagic';
import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';

import 'normalize.css'
import './styles.css'

const controller = new ScrollMagic.Controller({
  globalSceneOptions: { triggerHook: "onCenter", duration: "200%" }
});

const bottomController = new ScrollMagic.Controller({
  globalSceneOptions: { triggerHook: "onEnter", duration: "40%" }
});

new ScrollMagic.Scene({ triggerElement: '.case-study' })
               .setTween(".case-study__video", { y: "-20%", ease: Linear.easeOut })
               .addTo(controller);

new ScrollMagic.Scene({ triggerElement: '.case-study' })
               .setTween(".case-study__image", { y: "-45%", ease: Linear.easeOut })
               .addTo(controller);

new ScrollMagic.Scene({ triggerElement: '.collections' })
               .setTween(".collections__image", { y: "-35%", ease: Linear.easeOut })
               .addTo(controller);

new ScrollMagic.Scene({ triggerElement: '.footer' })
               .setTween(".footer", { "margin-top": "-80px", ease: Linear.easeOut })
               .addTo(bottomController);
