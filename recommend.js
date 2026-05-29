const h1 = document.querySelector("h1"), img = document.getElementById("show-poster");

let showList = [];

showList = JSON.parse(localStorage.getItem('shows'));
show = showList.shift();

h1.innerHTML = show.title;
img.src = show.photo;

const json = JSON.stringify(showList);
localStorage.setItem('shows', json);