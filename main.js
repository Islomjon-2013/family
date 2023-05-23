const review = [
  {
    id: 1,
    name: "Shukhrat",
    job: "03.23.1989",
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
    name: "Muhammadamin",
    job: "23.02.2021",
    img: "./images/3.jpg",
  },
  {
    id: 4,
    name: "Mustafo",
    job: "15.01.2016",
    img: "./images/4.jpg",
  },
  {
    id: 5,
    name: "Hulkaroy",
    job: "12.04.1991",
    img: "./images/5.jpg",
  },
];
let author = document.getElementById("author");
let job = document.getElementById("job");
let img = document.getElementById("person-img");
let prevbtn = document.getElementById("prev");
let nextbtn = document.getElementById("next");

let currentItem = 3;
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
