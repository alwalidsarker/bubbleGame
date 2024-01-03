function makingBubbles() {
  let clutter = " ";
  const pannel_bottom = document.querySelector("#main #pannel #pannel_bottom");
  for (let i = 1; i <= 147; i++) {
    let math = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble"><h1>${math}</h1></div>`;
  }
  pannel_bottom.innerHTML = clutter;
}
makingBubbles();
function timer() {
  let time = 60;
  let timer = document.querySelector("#elem_2 .box");
  let interval = setInterval(function () {
    if (time > 0) {
      time--;
      timer.textContent = time;
    } else {
      clearInterval(interval);
      let over = document.querySelector('#pannel_bottom');
      over.innerHTML = "<h1>Game is Over ( Thanks For Playing )</h1>";
    };
  }, 1000);
}
timer();
let math = 0;
function getHitValue() {
  let hitNumber = document.querySelector("#hitvalue");
  math = Math.floor(Math.random() * 10);
  hitNumber.textContent = math;
}
getHitValue();
const pannel_bottom = document.querySelector("#main #pannel #pannel_bottom");
pannel_bottom.addEventListener("click", function (details) {
  let clickedNumber = Number(details.target.textContent);
  if (clickedNumber === math) {
    scoreIncrease();
    makingBubbles();
    getHitValue();
  }
});
let score = 0;
function scoreIncrease() {
  let score_dom = document.querySelector("#score");
  score += 10;
  score_dom.textContent = score;
}
