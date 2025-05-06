export const BREAKPOINTS = {
  lg: 1199.98,
  sm: 767.98,
  xs: 575.98,
};

export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  centerMode: true,
  centerPadding: '160px',

  responsive: [
    {
      breakpoint: BREAKPOINTS.lg,
      settings: {
        centerPadding: '80px',
      },
    },
    {
      breakpoint: BREAKPOINTS.sm,
      settings: {
        slidesToShow: 1,
        centerPadding: '100px',
      },
    },
    {
      breakpoint: BREAKPOINTS.xs,
      settings: {
        slidesToShow: 1,
        centerPadding: '0px',
      },
    },
  ],
};
