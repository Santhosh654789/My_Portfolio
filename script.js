// const texts = ["Java Developer", "Full Stack Developer"];
// let index = 0;
// let charIndex = 0;
// const typing = document.querySelector(".typing");

// function typeEffect() {
//     if (charIndex < texts[index].length) {
//         typing.textContent += texts[index].charAt(charIndex);
//         charIndex++;
//         setTimeout(typeEffect, 100);
//     } else {
//         setTimeout(eraseEffect, 1500);
//     }
// }

// function eraseEffect() {
//     if (charIndex > 0) {
//         typing.textContent = texts[index].substring(0, charIndex - 1);
//         charIndex--;
//         setTimeout(eraseEffect, 50);
//     } else {
//         index = (index + 1) % texts.length;
//         setTimeout(typeEffect, 300);
//     }
// }

// window.addEventListener("scroll", function() {
//     const header = document.querySelector("header");
//     header.classList.toggle("scrolled", window.scrollY > 50);
// });


// typeEffect();
