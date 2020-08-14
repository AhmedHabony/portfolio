// // const header = document.querySelector('.header')
// const headerRectBottom = document
//   .querySelector(".header")
//   .getBoundingClientRect().bottom;
//
// let intervalID = setInterval(() => {
//   if (headerRectBottom < 0) {
//     return;
//   }
//   else {
//       const node = document.getElementById("text");
//
//       if (document.body.createTextRange) {
//           const range = document.body.createTextRange();
//           range.moveToElementText(node);
//           range.select();
//       } else if (window.getSelection) {
//           const selection = window.getSelection();
//           const range = document.createRange();
//           range.selectNodeContents(node);
//           selection.removeAllRanges();
//           selection.addRange(range);
//       }
//   }
//
// }, 1);
// const header = document.querySelector(".header");

let pause = false;
let select = window.setInterval(() => {
  const headerRectBottom = document
    .querySelector(".header")
    .getBoundingClientRect().bottom;
  // console.log(pause)
  if (pause) {
    const node = document.getElementById("text");

    if (document.body.createTextRange) {
      const range = document.body.createTextRange();
      range.moveToElementText(node);
      range.select();
    } else if (window.getSelection) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(node);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
  if (headerRectBottom < 0) {
    pause = false;
  } else if (headerRectBottom > 0) {
    pause = true;
  }
});
