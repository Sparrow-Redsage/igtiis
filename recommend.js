const h1 = document.querySelector("h1"), img = document.getElementById("show-poster");

let showList = [];

if(localStorage.getItem('shows')) {
        let localStorageJson = JSON.parse(localStorage.getItem('shows'));
        showList = localStorageJson;
        show = showList.shift();

        console.log("Show:", show);
        console.log("Show list:", showList);


        h1.innerHTML = show.title;
        img.src = show.photo;

        const json = JSON.stringify(showList);
        localStorage.setItem('shows', json);
    }
