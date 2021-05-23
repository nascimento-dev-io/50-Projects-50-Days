const counters = document.querySelectorAll(".social-media-container .counter");

counters.forEach((counter) => {
  const target = +counter.getAttribute("data-target");

  console.log(target);

  updateCounter(counter, target);
});

function updateCounter(social, target) {
  let count = 0;

  const increment = +target / 200;

  const int = setInterval(() => {
    if (count == target) clearInterval(int);

    social.textContent = Math.ceil(count);

    count += increment;
  }, 1);
}

// forma original do curso

// counters.forEach((counter) => {
//   counter.innerText = "0";

//   const updateCounter = () => {
//     const target = +counter.getAttribute("data-target");
//     const c = +counter.innerText;

//     const increment = target / 200;

//     if (c < target) {
//       counter.innerText = `${Math.ceil(c + increment)}`;
//       setTimeout(updateCounter, 1);
//     } else {
//       counter.innerText = target;
//     }
//   };

//   updateCounter();
// });
