import './vendor/slick.min.js';

const workSlider = (() => {
  const initialize = () => {
    $(document).on('ready', ()=> {
      setTimeout(()=> {
        $('.work .page__inner').slick({
          slidesToShow: 1,
        });
      }, 1000);
    })
  }

  return {
    initialize,
  };
})();

export default workSlider;
