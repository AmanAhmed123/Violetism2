let up = document.querySelector(".up");
let game = document.querySelector(".game");
let linksPosition = document.querySelector(".my-links");
window.onscroll = function () {
    if (this.scrollY >= 700) {
        up.classList.add("show")
    } else {
        up.classList.remove("show")
    }
};

up.onclick = function () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    })
}

// window.onscroll = function() {
//   console.log( window.scrollY );
// }


