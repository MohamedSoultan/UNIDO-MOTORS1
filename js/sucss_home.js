var sucss_home = new Splide(".sucss_home", {
  type: "loop",
  gap: '2rem',
  focus: "0",
  pagination: false,
  perPage:2,
  breakpoints: {
    800: {
      pagination:true,
    },
  },
});
sucss_home.mount();
