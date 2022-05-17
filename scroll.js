window.onscroll = function () {
  scroll_indicator();
};

let contentHeight = document.documentElement.scrollHeight;
let displayHeight = document.documentElement.clientHeight;
let height = contentHeight - displayHeight;

function scroll_indicator() {
  let window_scroll = window.scrollY;
  let scrolled = (window_scroll / height) * 100;
  document.getElementById("bar").style.width = scrolled + "%";
}
