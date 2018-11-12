"use strict";

new Vue({
  el: '#app',
  template: "\n<div class='app'>\n  <div class='app__inner'>\n    <div class='pages'>\n      <div class='bio page js-active'>\n        <div class='page__inner'>\n          <div class='page__left'>\n            <div class='bio__img'>\n              <picture>\n                  <source srcset=\"../img/bio-pic.png\" media=\"(min-width: 1024px)\" />\n                  <source srcset=\"../img/bio-pic.png\" media=\"(min-width: 700px)\" />\n                  <img srcset=\"../img/bio-pic.png\" alt=\"Sample pic\" />\n                </picture>\n              </div>\n          </div>\n          <div class='page__right'>\n            <h1>Here is an H1</h1>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>\n            <h2>Here is an H2</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>\n            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>\n            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>\n            <h1>Here is an H1</h1>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>\n            <h2>Here is an H2</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>\n            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>\n            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>\n            <h1>Here is an H1</h1>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>\n            <h2>Here is an H2</h2>\n            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>\n            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>\n            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>\n            </div>\n        </div>\n      </div>\n\n      <div class='page'>\n        <div class='page__inner'>\n          <div class='page__left'>\n              <h1>Here is an H1</h1>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>\n              <h2>Here is an H2</h2>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>\n              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>\n              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>\n          </div>\n          <div class='page__right'>\n              <h1>Here is an H1</h1>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>\n              <h2>Here is an H2</h2>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>\n              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>\n              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>\n          </div>\n        </div>\n      </div>\n\n      <div class='page'>\n        <div class='page__inner'>\n          <div class='page__left'>\n              <h1>Here is an H1</h1>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>\n              <h2>Here is an H2</h2>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>\n              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>\n              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>\n          </div>\n          <div class='page__right'>\n              <h1>Here is an H1</h1>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>\n              <h2>Here is an H2</h2>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>\n              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>\n              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>\n          </div>\n        </div>\n      </div>\n\n      <div class='page'>\n        <div class='page__inner'>\n          <div class='page__left'>\n              <h1>Here is an H1</h1>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>\n              <h2>Here is an H2</h2>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>\n              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>\n              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>\n          </div>\n          <div class='page__right'>\n              <h1>Here is an H1</h1>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis esse dignissimos enim numquam. Consectetur veritatis quam nesciunt tempore, voluptatem natus dolore odit maxime iusto culpa? Fugiat magnam quod voluptas nam.</p>\n              <h2>Here is an H2</h2>\n              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut, quam inventore quisquam voluptatem magnam itaque dolores corrupti, reiciendis dolorum quae omnis id? Eveniet beatae quae sapiente cum porro culpa?</p>\n              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, totam. Consequuntur dicta asperiores doloremque voluptatum quas. Mollitia, numquam illum. Odit error perspiciatis iure ut amet aspernatur exercitationem quae, enim velit.</p>\n              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad facilis rem hic, distinctio deserunt sint reprehenderit voluptates adipisci, commodi, quidem magni delectus quis iste. Maxime accusamus quia eligendi aliquid deleniti?</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <nav class='main-nav'>\n      <ul class='nav__list'>\n        <li class='nav__item js-active'>\n          <a href='#' @click='changePage'>\n            <span>Bio</span>\n          </a>\n        </li>\n        <li class='nav__item'>\n          <a href='#' @click='changePage'>\n            <span>Work</span>\n          </a>\n        </li>\n        <li class='nav__item'>\n          <a href='#' @click='changePage'>\n            <span>Hobbies + Interests</span>\n          </a>\n        </li>\n        <li class='nav__item'>\n          <a href='#' @click='changePage'>\n            <span>Contact</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</div>\n",
  data: {
    speed: 700,
    animating: false
  },
  methods: {
    changePage: function changePage(e) {
      e.preventDefault();
      var $this = this;
      var $targetIndex = $(e.target).parent().index();
      var $navIndex = $('.nav__item.js-active').index();
      var $originalPage = $('.page').eq($navIndex);
      var $nextPage = $('.page').eq($targetIndex);

      if (!$(e.target).parent().hasClass('js-active') && this.animating == false) {
        this.animating = true;

        if ($targetIndex > $navIndex) {
          // Move current slide out of view
          $originalPage.addClass('js-up').removeClass('js-active');
          $nextPage.addClass('js-down');
        } else {
          $originalPage.addClass('js-down').removeClass('js-active');
          $nextPage.addClass('js-up');
        } // Remove nav active state


        $('.nav__item').removeClass('js-active');
        setTimeout(function () {
          $originalPage.removeClass('js-up js-down');
          $nextPage.removeClass('js-up js-down').addClass('js-active');
          $(e.target).parent().addClass('js-active');
          $this.animating = false;
        }, this.speed);
      } else if ($(e.target).parent().hasClass('js-active')) {
        $(e.target).parent().addClass('shake-little');
        setTimeout(function () {
          $(e.target).parent().removeClass('shake-little');
        }, this.speed / 2);
      }

      return false;
    }
  }
});