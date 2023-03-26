/**
 * 풀페이지 (Pageable)
 * https://github.com/Mobius1/Pageable#browser
 */
const pages = new Pageable("#container", {
  pips: true,
  events: {
    keydown: true, // enable / disable keyboard navigation
  },
});

document.querySelector("nav li a").setAttribute("tabindex", "0");
