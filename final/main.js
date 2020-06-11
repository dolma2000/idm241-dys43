// Wrap every letter in a span
var textWrapper = document.querySelector('.text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

const slideup = anime({
    targets: '.text .letter',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 3000,
    autoplay:false,
    delay: (el, i) => 1500 + 50 * i
})

const moveup = anime({
    targets: ".images",
    translateY: [100,0],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration:3000,
    autoplay:false,
    delay: (el, i) => 2500 + 2000 * i
})

const blob = document.getElementById('blob');
const photos = document.getElementById('photos');
photos.hidden = true;

function toggleColor() {
    var myButtonClasses = document.getElementById("blob").classList;
  
    if (myButtonClasses.contains("blob")) {
      myButtonClasses.remove("blob");
    } 
    if (myButtonClasses.contains("blob-full-screen")) {
      myButtonClasses.add("blob-full-screen");
    } else {
      myButtonClasses.add("blob-full-screen");
    }
  }

blob.addEventListener ('click', () => {
    console.log('log clicked on');
    setTimeout(() => {
        photos.hidden = false
    }, 1000);
    slideup.play();
    moveup.play();
    // blob.classList.toggle('.blob-full-screen');
    toggleColor();
});



