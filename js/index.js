/**
 * 풀페이지 (Pageable)
 * https://github.com/Mobius1/Pageable#browser
 */
new Pageable("#container", {
  events: {
    keydown: false, // enable / disable keyboard navigation
  },
});

// /**
//  * 한글자씩 타이핑
//  */
// let titleContent = "안녕하세요! \n 웹퍼블리셔 김다희 입니다. :)";
// let typing = document.querySelector(".home__title");
// let i = 0;

// function typingText() {
//   if (i < titleContent.length) {
//     let txt = titleContent.charAt(i);
//     typing.innerHTML += txt == "\n" ? "<br/>" : txt;
//     i++;
//   }
// }

// setInterval(typingText, 50);
