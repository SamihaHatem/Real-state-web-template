//header display none and block
var header = document.getElementById("myHeader");
var navBar = document.getElementById("mynavBar");

window.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop < 73.6) {
        header.style.display = "block";
        navBar.style.top = "35px";
    } else {
        header.style.display = "none";
        navBar.style.top = 0;
    }
});

// Nav Btn

function displayDiv() {
    var btnDiv = document.getElementById("nav-btn-div")
    if (btnDiv.classList.contains("d-none")) {
        btnDiv.classList.remove("d-none")
        btnDiv.style.display = "block"
    } else {
        btnDiv.classList.add("d-none")

    }
}

// video play and pause
var playButton = document.getElementById("play_button");
var video = document.getElementById("video");
var playBtn = document.getElementById("play-btn");
var vidParagraoh = document.getElementById("vid-p1");
var vidParagraoh2 = document.getElementById("vid-p2");

video.playbackRate = 2;

playButton.addEventListener("click", function() {
    if (video.paused) {
        video.play();
        playBtn.style.setProperty("color", "#ffffff45", "important");
        vidParagraoh.style.setProperty("color", "#ffffff45", "important");
        vidParagraoh2.style.setProperty("color", "#ffffff45", "important");
    } else {
        video.pause();
        playBtn.style.setProperty("color", "white", "important");
        vidParagraoh.style.setProperty("color", "white", "important");
        vidParagraoh2.style.setProperty("color", "white", "important");
    }
});

//chosen div section 2

function choseDiv(id) {
    var div1 = document.getElementById("div-1");
    var div2 = document.getElementById("div-2");
    var div3 = document.getElementById("div-3");
    console.log(div3)
    if (id == "div1") {
        div1.classList.add("chosen-div-section2");
        div2.classList.remove("chosen-div-section2");
        div3.classList.remove("chosen-div-section2");
    } else if (id == "div2") {
        div2.classList.add("chosen-div-section2");
        div1.classList.remove("chosen-div-section2");
        div3.classList.remove("chosen-div-section2");
    } else if (id == "div3") {
        div3.classList.add("chosen-div-section2");
        div2.classList.remove("chosen-div-section2");
        div1.classList.remove("chosen-div-section2");
    }
}

//love item

var heartId = document.getElementById("heartId");

function redHeart(element) {
    element.classList.toggle("heart-hover2");
    element.classList.toggle("heart-hover");
    element.parentElement.style.border = element.parentElement.style.border === '2px solid #ff0081' ? '' : '2px solid #ff0081';

}


/* 
document.getElementById('picField').onchange = function(evt) {
    var outImage = document.getElementById("signUp-img");
    console.log(outImage)
    var tgt = evt.target || window.event.srcElement,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {

        var fr = new FileReader();
        fr.onload = function() {
            document.getElementById(outImage).src = fr.result;
        }
        fr.readAsDataURL(files[0]);
        console.log(files[0])

    }

    // Not supported
    else {
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
    }
} */