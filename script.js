let mijnLink = document.querySelector(".link");
function klikFunctie() {
      let mijnDiv = document.querySelector(".pink");
      if (mijnDiv.classList.contains("slideopen")) {
         console.log("haal class weg");
         mijnDiv.style.height="0px";
         this.innerHTML = "<span>preview</span>"
      } else {
         mijnDiv.classList.add("slideopen");
         this.innerHTML = "<span>Enough of me</span>"
      }
      mijnDiv.classList.add("slideopen");
}

mijnLink.addEventListener("click",klikFunctie);

let mijnCreative = document.querySelector("h3");
let mijnPlant1 = document.querySelector("#plant1");





function preview() {
  let mijnProject1 = document.querySelector(".Project1");
  let mijnInfo = document.querySelector(".info");
  let mijnDiv = document.querySelector(".pink");
  let mijnProject2 = document.querySelector(".Project2")
  let mijnInfo2 = document.querySelector(".info2");

  if (mijnDiv.classList.contains("slideopen")) {
    mijnProject1.classList.toggle("onzichtbaar");
    mijnInfo.classList.toggle("onzichtbaar");
    mijnProject2.classList.toggle("onzichtbaar");
    mijnInfo2.classList.toggle("onzichtbaar");

  } else {
      mijnInfo.classList.remove("onzichtbaar");
      mijnProject2.classList.remove("onzichtbaar");
      mijnInfo2.classList.remove("onzichtbaar");
      mijnProject1.classList.remove("onzichtbaar");
  }
}

mijnLink.addEventListener("click",preview);




let mijnMain = document.querySelector("main");
let mijnHeader = document.querySelector("header");

function checkKey(e){
  let event = window.event ? window.event : e;
  console.log(event.keyCode)
}


document.onkeydown = function(event){
  switch (event.keyCode){
    case 37:   mijnMain.style.background = "#bcd3f7";
              mijnHeader.style.background = "#bcd3f7";

  break;
  case 38:
  mijnMain.style.background = "#b4edc3";
           mijnHeader.style.background = "#b4edc3";

  break;
  case 39:   mijnMain.style.background = "#ddc4f2";
             mijnHeader.style.background = "#ddc4f2";
  break;
  case 40: mijnMain.style.background = "#ebb9db";
             mijnHeader.style.background = "#ebb9db";
    }
};
