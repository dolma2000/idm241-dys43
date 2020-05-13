
  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });


  // MENU SLIDE IN 
  const navSlide = () => {

    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
    });
    }
    
    navSlide();