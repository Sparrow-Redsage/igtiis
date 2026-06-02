const h1 = document.querySelector("h1"), img = document.getElementById("image");

let showList = [];

showList = JSON.parse(localStorage.getItem('shows'));
show = showList.shift();

h1.innerHTML = show.title;

if(show.photo.length > 0){
    img.insertAdjacentHTML('afterbegin', '<img src="' + show.photo + '" alt="Show poster">');
}

const json = JSON.stringify(showList);
localStorage.setItem('shows', json);

