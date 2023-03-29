// 터치 기기 여부
const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
// 모바일 사이즈 여부
const isMobile = window.innerWidth < 768;

/**
 * PC사이즈 or 터치 기기일 경우만 풀페이지 적용
 */
if (!isTouchDevice || !isMobile) {
  /**
   * 풀페이지 (Pageable)
   * https://github.com/Mobius1/Pageable
   */
  const pages = new Pageable("#container", {
    pips: true, // 우측 네비게이션 여부
    animation: 450, //스크롤 애니메이션의 지속 시간
  });

  // 풀페이지 애니메이션 효과 적용
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    sections[0].classList.add("animated");
    //스크롤 시작시 애니메이션 클래스명 추가/제거
    pages.on("scroll.start", (data) => {
      section.classList.remove("animated");
      sections[data.index].classList.add("animated");
    });
  });

  document.querySelector("#container").classList.remove("not-pageable");
} else {
  // 모바일 사이즈 or 터치 가능 기기일 경우
  document.querySelector("#container").classList.add("not-pageable");
}
