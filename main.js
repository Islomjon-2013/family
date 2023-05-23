const review = [
  {
    id: 1,
    name: "Shukhrat",
    job: "34 years old",
    img: "./images/1.jpg",
  },
  {
    id: 2,
    name: "Hulkaroy",
    job: "32 years old ",
    img: "./images/2.jpg",
  },
  {
    id: 3,
    name: "Islomjon",
    job: "10 years old",
    img: "./images/3.jpg",
  },
  {
    id: 4,
    name: "Mustafo",
    job: "7 years old",
    img: "./images/4.jpg",
  },
  {
    id: 5,
    name: "Muhammadamin",
    job: "2 years old",
    img: "./images/5.jpg",
  },
];
let author = document.getElementById("author");
let job = document.getElementById("job");
let img = document.getElementById("person-img");
let prevbtn = document.getElementById("prev");
let nextbtn = document.getElementById("next");
let randombtn = document.getElementById("random");
let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});
function showPerson(person) {
  const item = review[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
}
nextbtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > review.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevbtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = review.length - 1;
  }
  showPerson(currentItem);
});
