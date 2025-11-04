const navButton = document.querySelector('nav:first-of-type button');
const dropdown = document.querySelector("nav:first-of-type ul");

console.log(navButton);
console.log(dropdown);

navButton.addEventListener("click", () => {
  console.log("test");
  dropdown.classList.toggle("show");
});

const h1 = document.querySelectorAll("h1");
const h2 = document.querySelectorAll("h2")
const img=document.querySelectorAll("section img")

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const intersecting = entry.isIntersecting;
    
    console.log(entry);
    if (intersecting) {
      entry.target.classList.add("inbeeld");
    }
  }); // <-- sluit forEach
});   // <-- sluit IntersectionObserver

h1.forEach((h1) => {
  observer.observe(h1);
});

h2.forEach((h2) => {
    observer.observe(h2);
  });

img.forEach((img) => {
    observer.observe(img);
  });





