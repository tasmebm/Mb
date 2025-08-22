// منو
function toggleMenu(){
    document.getElementById("nav").classList.toggle("open");
}

// FAB
function toggleFab(){
    const e = document.getElementById("fabIcons"),
          t = document.querySelector(".fab-button"),
          n = e.classList.contains("show");
    e.classList.toggle("show");
    t.textContent = n ? "+" : "×";
}

// بستن منو با کلیک بیرون
document.addEventListener("click", function(e){
    const t = document.getElementById("nav"),
          n = document.querySelector(".menu-btn");
    if(!t.contains(e.target) && !n.contains(e.target)){
        t.classList.remove("open");
    }
});

// اسلایدر بدون fade روان
const slides = document.querySelectorAll(".fade-slider img");
if(slides.length > 0){
    let current = 0;
    slides.forEach((img, idx) => {
        if(idx !== 0) img.classList.remove("active");
    });
    function nextSlide(){
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
    }
    setInterval(nextSlide, 4000);
        }
