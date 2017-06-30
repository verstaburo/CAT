const $ = window.$;

export default () => {
  $('.popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    fixedContentPos: true,
    mainClass: 'mfp-fade', // class to remove default margin from left and right side
    image: {
      verticalFit: true,
      hozizontalFit: true,
    },
    removalDelay: 300,
  });
};
