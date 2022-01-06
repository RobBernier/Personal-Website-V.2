import Vue from './vendor/vue.min.js';

const vueApp = (() => {
  const initialize = () => {
    new Vue({
      el: '#app',
      template: `
<div class='app'>
  <div class='splash'>
    <div class='splash__inner'>
      <div class='splash__content'>
        <h1 class='splash__header'>Robert Bernier</h1>
        <p class='splash__subtext'>Web Developer</p>
      </div>
    </div>
  </div>
  <div class='app__inner'>
    <div class='pages'>
      <div class='bio page'>
        <div class='page__inner'>
          <div class='page__left'>
            <div class='bio__img'>
              <picture>
                <source srcset="./info/img/bio-pic.png" media="(min-width: 1024px)" />
                <source srcset="./info/img/bio-pic.png" media="(min-width: 700px)" />
                <img srcset="./info/img/bio-pic.png" alt="Sample pic" />
              </picture>
            </div>
          </div>
          <div class='page__right'>
            <h2 class='page__title'>Hi there!</h2>
            <div class='bio__desc'>
              <p>I'm Rob. I'm a frontend developer with 5 years of professional experience developing websites.</p>
            </div>
          </div>
        </div>
      </div>

      <div class='work page'>
        <div class='page__inner page__inner--center'>
          <div class='page__center'>
            <h2 class='page__title'>Work</h2>
            <p>I have worked on websites for web agencies, higher education, and the U.S. Army.</p>
            <p>I love developing compelling user experiences, from static websites to dynamic applications.</p>
            <p>You can view my <a href='https://robbernier.com/resume/' target='_blank'>resume</a> (built with HTML and CSS) and view past projects on my <a href='https://github.com/RobBernier' target='_blank'>GitHub</a> page.</p>
          </div>
        </div>
      </div>

      <div class='work page'>
      <div class='page__inner page__inner--center'>
        <div class='page__center'>
          <h2 class='page__title'>Skills</h2>
          <p>Over my five years of professional development, I've become familiar with the following skills and tools:</p>
          
          <ul>
            <li>HTML and CSS</li>
            <li>BEM convention</li>
            <li>JavaScript</li>
            <li>Vue Framework</li>
            <li>WCAG Accessibiliy</li>
            <li>REST API</li>
            <li>WordPress CMS</li>
            <li>Drupal CMS</li>
            <li>Gulp</li>
          </ul>

          <p>There are many more as well. Have another technology in mind?</p>
          <p><a href="#" @click='changePage($event, 3)'>Contact Me</a></p>
        </div>
      </div>
    </div>
    
      <div class='page contact'>
        <div class='page__inner page__inner--center'>
          <div class='page__center'>
            <h2 class='page__title'>Contact</h2>
            <p>I'm happy to look at any and all inqueries. Let's make something great together!</p>
            <p>Please feel free to contact me by <a href="mailto:robbernierweb@gmail.com">Email</a>.</p>
          </div>
        </div>
      </div>
    </div>

    <nav class='main-nav'>
      <button class='nav__button' @click='openMenu($event)'>
        <span></span>
        <span></span>
        <span></span>
        <span class='visually-hidden'>Main Navigation</span>
      </button>
      <ul class='nav__list'>
        <li class='nav__item js-active'>
          <a href='#' @click='changePage($event, 0)'>
            <span>About</span>
          </a>
        </li>
        <li class='nav__item'>
          <a href='#' @click='changePage($event, 1)'>
            <span>Work</span>
          </a>
        </li>
        <li class='nav__item'>
          <a href='#' @click='changePage($event, 2)'>
            <span>Skills</span>
          </a>
        </li>
        <li class='nav__item'>
          <a href='#' @click='changePage($event, 3)'>
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
`,
      data: {
        speed: 800,
        animating: false,
      },

      mounted: function () {
        const $delay = this.speed;

        // Splash screen animation on page ready
        $(document).ready(function () {
          $('.splash').addClass('js-loaded');

          setTimeout(() => {
            $('.splash').addClass('js-hide');
          }, Math.ceil($delay) * 2);

          setTimeout(() => {
            $('.bio').addClass('js-active');
            $('.main-nav').addClass('js-visible');
          }, Math.ceil($delay) * 2.5);
        })
      },

      methods: {
        changePage: function (e, $targetIndex) {
          e.stopPropagation();
          e.preventDefault();

          const $this = this;
          const $navIndex = $('.nav__item.js-active').index();

          const $originalPage = $('.page').eq($navIndex);
          const $nextPage = $('.page').eq($targetIndex);

          if (!$('.nav__item > a').eq($targetIndex).parent().hasClass('js-active') && this.animating == false) {
            this.animating = true;

            // Close menu on mobile
            $('.nav__button').removeClass('js-active');
            $('.nav__list').removeClass('js-open');

            if ($targetIndex > $navIndex) {
              // Move current slide out of view
              $originalPage.addClass('js-up').removeClass('js-active');
              $nextPage.addClass('js-down');
            } else {
              $originalPage.addClass('js-down').removeClass('js-active');
              $nextPage.addClass('js-up');
            }

            // Remove nav active state
            $('.nav__item').removeClass('js-active');

            setTimeout(function () {
              $originalPage.removeClass('js-up js-down');
              $nextPage.removeClass('js-up js-down').addClass('js-active');
              $('.nav__item > a').eq($targetIndex).parent().addClass('js-active');
              $this.animating = false;
            }, this.speed);
          } else if ($('.nav__item > a').eq($targetIndex).parent().hasClass('js-active')) {
            $('.nav__item > a').eq($targetIndex).parent().addClass('shake-little');

            setTimeout(function () {
              $('.nav__item > a').eq($targetIndex).parent().removeClass('shake-little');
            }, this.speed / 2);
          }

          return false;
        },

        openMenu: function (e) {
          e.stopPropagation();
          e.preventDefault();

          $(e.target).toggleClass('js-active');
          $('.nav__list').toggleClass('js-open');
        }
      }
    });
  }

  return {
    initialize,
  };
})();

export default vueApp;