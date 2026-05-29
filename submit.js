const form = document.querySelector('form');

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