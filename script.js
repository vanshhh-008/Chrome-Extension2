const button = document.querySelector(".button");
const circle = document.querySelector(".circle");

let buttonOn = false;
button.addEventListener("click",()=>{
    if(!buttonOn){
        buttonOn = true;
        circle.style.animation = "movecircleright 0.5s forwards";
        chrome.tabs.executeScript({
            file: "appOn.js"
        })

    } 
    else{
        buttonOn = false;
        circle.style.animation = "movecircleleft 0.5s forwards";
         chrome.tabs.executeScript({
             file:"appOff.js"
         })
    }
});
