
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}



const person = [
  {
    first_name : "Salman",
    last_name : "Rasul",
    age : 23

  },
  {
    first_name : "Shayan",
    last_name : "SHaheen",
    age : 21

  },
  {
    first_name : "Maria",
    last_name : "Khusnood",
    age : 20

  }
]

console.log(person[2][1]);




































































