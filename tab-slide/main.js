const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const tabElement = $(".tabs");
const panes = $$(".tab-pane");
const btnNext = $(".next");
const btnPrev = $(".prev");
let indexElement = 0;

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

// SonDN fixed - Active size wrong size on first load.
// Original post: https://www.facebook.com/groups/649972919142215/?multi_permalinks=1175881616551340
requestIdleCallback(function () {
  line.style.left = tabActive.offsetLeft + "px";
  line.style.width = tabActive.offsetWidth + "px";
  tabElement.scrollLeft = tabActive.offsetLeft / 2;
});

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
    indexElement = index;
    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});
btnNext.addEventListener("click", () => {
  console.log(tabElement.scrollLeft);
  tabElement.scrollLeft += 160;
});
btnPrev.addEventListener("click", () => {
  console.log(tabElement.scrollLeft);
  tabElement.scrollLeft -= 160;
});
