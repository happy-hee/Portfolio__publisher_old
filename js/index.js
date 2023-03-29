/**
 * 터치 기기 & 모바일 사이즈 풀페이지 예외처리
 */
// 터치 기기 여부
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
// 모바일 사이즈 여부
const isMobile = window.innerWidth < 768;

if (isTouchDevice || isMobile) {
  // 모바일 사이즈 or 터치 가능 기기일 경우
  document.querySelector("#container").classList.add("not-pageable");
} else {
  // 풀페이지 (Pageable)
  new Pageable("#container", {
    pips: true,
    animation: 450,
    swipeThreshold: 1000,
  });
  document.querySelector("#container").classList.remove("not-pageable");
}
