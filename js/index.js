function imgSlider (anything){
  document.querySelector('.mySlider').src = anything; 
}

function gentiWarna(color){
  const bulet = document.querySelector('.bob')
  bulet.style.background = color;
}

let docTitle = document.title;
 window.addEventListener("blur", () => {
 document.title = " 😭 Come back  ";
})
window.addEventListener("focus", () => {
document.title = docTitle;
 })