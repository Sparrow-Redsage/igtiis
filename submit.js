const form = document.querySelector('form'), recommend = document.querySelector('.button');

let showList = [];

form.addEventListener('submit', (e) => {
    if(localStorage.getItem('shows')) {
        let localStorageJson = JSON.parse(localStorage.getItem('shows'));
        showList = localStorageJson;
    }

    e.preventDefault();
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    showList.push(obj);
    
    const json = JSON.stringify(showList);
    localStorage.setItem('shows', json);

    form.reset();
});

recommend.addEventListener('click', (e) => {
    console.log('clicked');
    showList = JSON.parse(localStorage.getItem('shows'));
    if(showList.length === 0) {
        window.alert('No shows to recommend! Add a show first!');
        e.preventDefault();
    }
    else{
        window.location.href = 'recommend.html';
    }
});