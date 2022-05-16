var data = document.getElementById("btn");

data.addEventListener('click',function(){
    document.body.style.background=randomBg();
});
function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
  }