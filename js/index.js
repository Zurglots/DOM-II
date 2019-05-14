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

// keypress body

let body = document.querySelector("body");
console.log(body);

body.addEventListener("keydown", event => {
  event.target.style.filter = "invert(100%)";
});

body.addEventListener("keyup", event => {
  event.target.style.filter = "";
});

// on scroll effect

let bodyText = document.querySelector(".img-content img");
console.log(bodyText);

bodyText.addEventListener("wheel", event => {
  event.target.style.filter = "invert(100%)";
});

// Need to add toggle?

// on load

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

//   if (input.type == "") {
//     button.target.style.background = "red";
//   } else {
//     button.target.style.background = "green";
//   }

// resize

// not sure how to implement this

// scroll

const myScroller = document.querySelector("body");
console.log(myScroller);

myScroller.addEventListener("scroll", event => {
  event.target.style.background = "red";
});

// myScroller.forEach(link => {
//   link.addEventListener("scroll", event => {
//     event.style.color = "red";
//   });
// });
