/**
 * 풀페이지 (Pageable)
 * https://github.com/Mobius1/Pageable#browser
 */
const pages = new Pageable("#container", {
  pips: false,
  events: {
    keydown: false, // enable / disable keyboard navigation
  },
});
