function toggleMenu(){document.getElementById("nav").classList.toggle("open")}

function toggleFab(){
    const e=document.getElementById("fabIcons"),
          t=document.querySelector(".fab-button"),
          n=e.classList.contains("show");
    e.classList.toggle("show");
    t.textContent=n?"+":"×";
}

document.addEventListener("click",function(e){
    const t=document.getElementById("nav"),
          n=document.querySelector(".menu-btn");
    t.contains(e.target)||n.contains(e.target)||t.classList.remove("open")
});

// اسلایدر برای index.html
const slides=document.querySelectorAll(".fade-slider img");
if(slides.length>0){
    let current=0;
    slides.forEach(img=>{img.src=img.dataset.src});
    function showSlide(i){slides.forEach(s=>s.classList.remove("active"));slides[i].classList.add("active")}
    function nextSlide(){current=(current+1)%slides.length;showSlide(current)}
    setInterval(nextSlide,4000);
        }
