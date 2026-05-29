const form = document.querySelector('form'), recommend = document.querySelector('.recommend-button'), clear = document.querySelector('.clear-button');

form.addEventListener('submit', (e) => {
    let showList = [];
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
    let showList = [];
    if(localStorage.getItem('shows')) {
        showList = JSON.parse(localStorage.getItem('shows'));
            if(showList.length === 0) {
            window.alert('No shows to recommend! Add a show first!');
            e.preventDefault();
    }
    }
    else{
        window.alert('No shows to recommend! Add a show first!');
        e.preventDefault();
    }

});

clear.addEventListener('click', (e) => {
    let showList = [];
    localStorage.removeItem('shows');
    const json = JSON.stringify(showList);
    localStorage.setItem('shows', json);
});