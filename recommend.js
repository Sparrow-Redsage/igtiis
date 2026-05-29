const h1 = document.querySelector("h1"), img = document.getElementById("show-poster");

let showList = [];

if(localStorage.getItem('shows')) {
        console.log("Show list:", showList);
        let localStorageJson = localStorage.getItem('shows');
        showList = JSON.parse(localStorageJson);
        //show = showList.shift();
        console.log("Show list:", showList);


        //h1.innerHTML = showList.title;
        //img.src = showList.photo;

        //const json = JSON.stringify(showList);
        //localStorage.setItem('shows', json);
    }
