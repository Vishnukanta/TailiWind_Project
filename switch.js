// import * as test from "./tailwind.config";
function switchStage(i) {
  const switcher = document.querySelector("#switcher")
  const stages = document.querySelector("#stages")

  switcher.children[i].firstElementChild.style.color = "#FFFFFF"
  switcher.children[i].lastElementChild.src = "./img/arrow-button-active.svg"
  stages.children[i].style.display = "flex"

  for (let j = 0; j < switcher.children.length; j++) {
    if (j !== i) {
      switcher.children[j].firstElementChild.style.color = "#909090"
      switcher.children[j].lastElementChild.src = "./img/arrow-button.svg"
      stages.children[j].style.display = "none"
    }
  }
}
