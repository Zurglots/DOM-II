// Your code goes here

let mainimg = document.querySelector(".intro img");

console.log(mainimg);

// inverse img color on attempt at for EACH img insead of main.

// mainimg.forEach((el, i) => {
//   const mainimgs = mainimg[i];
//   el.querySelector("img").addEventListener("mouseover", event => {
//     event.target.style.filter = "invert(100%)";
//   });
//   el.querySelector("img").addEventListener("mouseleave", event => {
//     event.target.style.filter = "";
//   });
// });

// inverse main img

mainimg.addEventListener("mouseover", event => {
  event.target.style.filter = "invert(100%)";
});

mainimg.addEventListener("mouseleave", event => {
  event.target.style.filter = "";
});

// keypress event

let body = document.querySelector("body");
// console.log(body);

body.addEventListener("keydown", event => {
  event.target.style.filter = "invert(100%)";
});

body.addEventListener("keyup", event => {
  event.target.style.filter = "";
});

// Wheel event

let mapImg = document.querySelector(".img-content img");
// console.log(mapImg);

mapImg.addEventListener("wheel", event => {
  event.target.style.filter = "invert(100%)";
});

// drag me

mapImg.addEventListener("drag", event => {
  event.target.style.filter = "";
});

// Need to add toggle?

// onload

window.addEventListener("load", event => {
  alert("Hey, You're Awesome. Carry On.");
});

// add focus

const form = document.getElementById("form");

form.addEventListener(
  "focus",
  event => {
    event.preventDefault();
    event.target.style.background = "pink";
  },
  true
);

form.addEventListener(
  "blur",
  event => {
    // event.preventDefault();
    event.target.style.background = "";
  },
  true
);

submitButton = document.querySelector("button");

submitButton.addEventListener("click", event => {
  event.preventDefault();
});

// scroll

const myScroller = document.querySelector("header");
// console.log("myScroller"); it's firing when listening for click, no change on scroll.

myScroller.addEventListener("scroll", event => {
  event.target.style.backgroundColor = "red";
});

// dbl click example and eventPropagation Example

const contentSection = document.querySelector(".content-section");
const contentText = document.querySelector(".text-content");

contentSection.addEventListener("dblclick", event => {
  event.target.style.backgroundColor = "blue";
  console.log("clicked content!!");
});

contentText.addEventListener("dblclick", event => {
  event.stopPropagation();
  event.target.style.backgroundColor = "red";
});
