/**
 * 풀페이지 (Pageable)
 * https://github.com/Mobius1/Pageable#browser
 */
const pages = new Pageable("#container", {
  pips: true,
  animation: 450,
  events: {
    keydown: true, // enable / disable keyboard navigation
  },
});
