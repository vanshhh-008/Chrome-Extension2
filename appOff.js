function change2(){
    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
    let media = document.querySelectorAll("img,video,picture");
    media.forEach((mediaItem)=>{
        mediaItem.style.filter = "invert(0) hue-rotate(0deg)";
    
    })
    }
    change2();